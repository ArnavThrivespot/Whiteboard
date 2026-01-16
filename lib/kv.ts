import { list, put } from '@vercel/blob';

export const BOARD_PREFIX = 'board-state';

// Upload board state to blob storage
export async function uploadBoardState(boardState: any): Promise<string> {
  const timestamp = Date.now();
  const blobName = `${BOARD_PREFIX}-${timestamp}.json`;

  const blob = await put(blobName, JSON.stringify(boardState), {
    access: 'public',
  });

  return blob.url;
}

// Fetch latest board state from blob storage
export async function fetchLatestBoardState(): Promise<any | null> {
  try {
    const { blobs } = await list({ prefix: BOARD_PREFIX });

    if (blobs.length === 0) {
      return null;
    }

    // Find the most recent blob by upload time
    const latestBlob = blobs.reduce((latest, current) =>
      new Date(current.uploadedAt) > new Date(latest.uploadedAt) ? current : latest
    );

    // Download and parse the JSON content
    const response = await fetch(latestBlob.url);
    const boardState = await response.json();

    return boardState;
  } catch (error) {
    console.error('Failed to fetch board state from blob:', error);
    return null;
  }
}
