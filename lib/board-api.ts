import { ColumnData } from '../components/Board';

export interface BoardState {
  columns: ColumnData[];
  version: number;
  lastUpdated: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Fetch current board state from API
export async function fetchBoard(): Promise<BoardState | null> {
  try {
    const response = await fetch('/api/board');
    const result: ApiResponse<BoardState> = await response.json();

    if (result.success && result.data) {
      return result.data;
    }
    return null;
  } catch (error) {
    console.error('Failed to fetch board:', error);
    return null;
  }
}

// Update board state via API with version check
export async function updateBoard(boardState: BoardState): Promise<boolean> {
  try {
    const response = await fetch('/api/board', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(boardState),
    });

    const result: ApiResponse<BoardState> = await response.json();
    return result.success;
  } catch (error) {
    console.error('Failed to update board:', error);
    return false;
  }
}
