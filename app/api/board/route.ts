// In-memory storage for development/testing when Edge Config is not available
let memoryStorage: { [key: string]: any } = {};

import { NextRequest, NextResponse } from 'next/server';
import { edgeConfig, BOARD_KEY } from '../../../lib/kv';
import { BoardState, ApiResponse } from '../../../lib/board-api';

const isEdgeConfigAvailable = process.env.EDGE_CONFIG;

export async function GET() {
  try {
    const boardState = isEdgeConfigAvailable
      ? await edgeConfig.get<BoardState>(BOARD_KEY)
      : memoryStorage[BOARD_KEY];

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

      if (isEdgeConfigAvailable) {
        // For Edge Config, we'll use a different approach for updates
        // In production, updates are typically done via Vercel CLI/API
        memoryStorage[BOARD_KEY] = defaultState;
      } else {
        memoryStorage[BOARD_KEY] = defaultState;
      }
      return NextResponse.json({ success: true, data: defaultState });
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

    // Get current state for version check
    const currentState = isEdgeConfigAvailable
      ? await edgeConfig.get<BoardState>(BOARD_KEY)
      : memoryStorage[BOARD_KEY];

    // For Edge Config, we simplify version control since it doesn't support
    // the same concurrency features as KV
    const updatedState: BoardState = {
      ...boardState,
      version: (boardState.version || 0) + 1,
      lastUpdated: new Date().toISOString(),
    };

    // Store in memory for now - in production Edge Config updates
    // would be handled via Vercel CLI/API or REST API with tokens
    memoryStorage[BOARD_KEY] = updatedState;

    return NextResponse.json({ success: true, data: updatedState });
  } catch (error) {
    console.error('Failed to update board:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update board state' },
      { status: 500 }
    );
  }
}
