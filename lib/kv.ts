import { kv } from '@vercel/kv';

export const BOARD_KEY = 'kanban-board-state';

// Initialize KV client - Vercel will provide KV_URL and KV_REST_API_URL env vars
export { kv };
