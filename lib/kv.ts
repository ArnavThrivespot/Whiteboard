import { createClient } from '@vercel/edge-config';

export const BOARD_KEY = 'kanban-board-state';

// Initialize Edge Config client - Vercel will provide EDGE_CONFIG env var
export const edgeConfig = createClient(process.env.EDGE_CONFIG);
