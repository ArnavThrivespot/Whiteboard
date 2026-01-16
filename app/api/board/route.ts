import { NextRequest, NextResponse } from 'next/server';
import { kv, BOARD_KEY } from '../../../lib/kv';
import { BoardState, ApiResponse } from '../../../lib/board-api';

export async function GET() {
  try {
    const boardState = await kv.get<BoardState>(BOARD_KEY);

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

      await kv.set(BOARD_KEY, defaultState);
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
    const currentState = await kv.get<BoardState>(BOARD_KEY);

    if (currentState && currentState.version >= boardState.version) {
      // Version conflict - return current state
      return NextResponse.json({
        success: false,
        error: 'Version conflict - board was updated by another user',
        data: currentState
      }, { status: 409 });
    }

    // Update with new version
    const updatedState: BoardState = {
      ...boardState,
      version: (boardState.version || 0) + 1,
      lastUpdated: new Date().toISOString(),
    };

    await kv.set(BOARD_KEY, updatedState);

    return NextResponse.json({ success: true, data: updatedState });
  } catch (error) {
    console.error('Failed to update board:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update board state' },
      { status: 500 }
    );
  }
}
