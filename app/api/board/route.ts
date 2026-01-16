import { NextRequest, NextResponse } from 'next/server';
import { fetchLatestBoardState, uploadBoardState } from '../../../lib/kv';
import { BoardState, ApiResponse } from '../../../lib/board-api';
import { broadcastBoardState } from './sse/route';

export async function GET() {
  try {
    let boardState = await fetchLatestBoardState();

    if (!boardState) {
      // Initialize with default state if not exists
      const defaultState: BoardState = {
        columns: [
          {
            id: 'widgets-to-design',
            title: 'Widgets to design (make ready for dev)',
            tasks: [],
          },
          {
            id: 'widgets-ready-saf',
            title: 'Widgets ready for SAF development',
            tasks: [],
          },
          {
            id: 'widgets-in-saf',
            title: 'Widgets in saf development',
            tasks: [],
          },
          {
            id: 'widgets-ready-js',
            title: 'Widgets ready for javascript development',
            tasks: [],
          },
          {
            id: 'widgets-in-js',
            title: 'Widgets in javascript development',
            tasks: [],
          },
          {
            id: 'widgets-ready-testing',
            title: 'Widgets ready for testing',
            tasks: [],
          },
          {
            id: 'widgets-in-testing',
            title: 'Widgets in testing',
            tasks: [],
          },
          {
            id: 'widgets-ready-deployment',
            title: 'Widgets ready for deployment',
            tasks: [],
          },
          {
            id: 'widgets-in-deployment',
            title: 'Widgets in deployment',
            tasks: [],
          },
        ],
        version: 1,
        lastUpdated: new Date().toISOString(),
      };

      // Upload the default state to blob storage
      await uploadBoardState(defaultState);
      boardState = defaultState;
    }

    return NextResponse.json({ success: true, data: boardState });
  } catch (error) {
    console.error('Failed to fetch board:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch board state' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const boardState: BoardState = await request.json();

    // Update version and timestamp
    const updatedState: BoardState = {
      ...boardState,
      version: (boardState.version || 0) + 1,
      lastUpdated: new Date().toISOString(),
    };

    // Upload to blob storage
    await uploadBoardState(updatedState);

    // Broadcast the update to all connected clients
    broadcastBoardState(updatedState);

    return NextResponse.json({ success: true, data: updatedState });
  } catch (error) {
    console.error('Failed to update board:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update board state' },
      { status: 500 }
    );
  }
}
