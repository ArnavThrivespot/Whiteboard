import { NextRequest } from 'next/server';
import { BoardState } from '../../../../lib/board-api';

// Store active SSE connections
const clients = new Set<ReadableStreamDefaultController>();

// Broadcast board state to all connected clients
export function broadcastBoardState(boardState: BoardState) {
  const data = `data: ${JSON.stringify(boardState)}\n\n`;
  clients.forEach(client => {
    try {
      client.enqueue(new TextEncoder().encode(data));
    } catch (error) {
      // Client disconnected, remove from set
      clients.delete(client);
    }
  });
}

export async function GET(request: NextRequest) {
  // Set up SSE headers
  const responseStream = new ReadableStream({
    start(controller) {
      // Add this client to the set
      clients.add(controller);

      // Send initial connection message
      const initialData = `data: ${JSON.stringify({ type: 'connected' })}\n\n`;
      controller.enqueue(new TextEncoder().encode(initialData));

      // Handle client disconnect
      request.signal.addEventListener('abort', () => {
        clients.delete(controller);
      });
    },
    cancel() {
      // Client disconnected
    },
  });

  return new Response(responseStream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Cache-Control',
    },
  });
}
