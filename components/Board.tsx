'use client';

import { useState, useEffect, useCallback } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Column from './Column';
import { fetchBoard, updateBoard, BoardState } from '../lib/board-api';

export interface Task {
  id: string;
  content: string;
  version?: number;
}

export interface ColumnData {
  id: string;
  title: string;
  tasks: Task[];
  version?: number;
}

const initialColumns: ColumnData[] = [
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
];

export default function Board() {
  const [columns, setColumns] = useState<ColumnData[]>(initialColumns);
  const [version, setVersion] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load board state from API on mount
  useEffect(() => {
    const loadBoard = async () => {
      try {
        const boardState = await fetchBoard();
        if (boardState) {
          setColumns(boardState.columns);
          setVersion(boardState.version);
        }
      } catch (err) {
        console.error('Failed to load board:', err);
        setError('Failed to load board state');
      } finally {
        setIsLoading(false);
      }
    };

    loadBoard();
  }, []);

  // Polling for real-time updates
  useEffect(() => {
    const pollInterval = setInterval(async () => {
      try {
        const boardState = await fetchBoard();
        if (boardState && boardState.version > version) {
          setColumns(boardState.columns);
          setVersion(boardState.version);
        }
      } catch (err) {
        console.error('Polling failed:', err);
      }
    }, 3000); // Poll every 3 seconds

    return () => clearInterval(pollInterval);
  }, [version]);

  // Sync board state to API
  const syncBoardState = useCallback(async (newColumns: ColumnData[]) => {
    const boardState: BoardState = {
      columns: newColumns,
      version: version,
      lastUpdated: new Date().toISOString(),
    };

    try {
      const success = await updateBoard(boardState);
      if (success) {
        // Update local version on success
        setVersion(prev => prev + 1);
      } else {
        // On failure, revert optimistic update by refetching
        const currentState = await fetchBoard();
        if (currentState) {
          setColumns(currentState.columns);
          setVersion(currentState.version);
        }
        setError('Failed to sync changes - board reverted to latest state');
        setTimeout(() => setError(null), 5000); // Clear error after 5 seconds
      }
    } catch (err) {
      console.error('Sync failed:', err);
      // Revert optimistic update
      const currentState = await fetchBoard();
      if (currentState) {
        setColumns(currentState.columns);
        setVersion(currentState.version);
      }
      setError('Network error - changes reverted');
      setTimeout(() => setError(null), 5000);
    }
  }, [version]);

  const moveTask = (taskId: string, fromColumnId: string, toColumnId: string) => {
    const newColumns = columns.map(col => ({ ...col, tasks: [...col.tasks] }));
    const fromColumn = newColumns.find(col => col.id === fromColumnId);
    const toColumn = newColumns.find(col => col.id === toColumnId);
    const task = fromColumn?.tasks.find(t => t.id === taskId);
    if (fromColumn && toColumn && task) {
      fromColumn.tasks = fromColumn.tasks.filter(t => t.id !== taskId);
      toColumn.tasks.push(task);
      setColumns(newColumns);
      syncBoardState(newColumns);
    }
  };

  const addTask = (columnId: string, content: string) => {
    const newTask: Task = { id: Date.now().toString(), content };
    const newColumns = columns.map(col =>
      col.id === columnId ? { ...col, tasks: [...col.tasks, newTask] } : col
    );
    setColumns(newColumns);
    syncBoardState(newColumns);
  };

  const deleteTask = (taskId: string, columnId: string) => {
    const newColumns = columns.map(col =>
      col.id === columnId ? { ...col, tasks: col.tasks.filter(t => t.id !== taskId) } : col
    );
    setColumns(newColumns);
    syncBoardState(newColumns);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over) {
      const taskId = active.id as string;
      const toColumnId = over.id as string;
      const fromColumn = columns.find(col => col.tasks.some(t => t.id === taskId));
      if (fromColumn && fromColumn.id !== toColumnId) {
        moveTask(taskId, fromColumn.id, toColumnId);
      }
    }
  };

  const widgetsToDesign = columns.find(col => col.id === 'widgets-to-design');
  const readySaf = columns.find(col => col.id === 'widgets-ready-saf');
  const inSaf = columns.find(col => col.id === 'widgets-in-saf');
  const readyJs = columns.find(col => col.id === 'widgets-ready-js');
  const inJs = columns.find(col => col.id === 'widgets-in-js');
  const readyDeploy = columns.find(col => col.id === 'widgets-ready-deployment');
  const inDeploy = columns.find(col => col.id === 'widgets-in-deployment');

  if (isLoading) {
    return (
      <div className="p-2 min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-lg">Loading board...</div>
      </div>
    );
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-2 min-h-screen bg-gray-100 space-y-2">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        {/* Widgets to design */}
        <div className="flex justify-center">
          {widgetsToDesign && (
            <Column
              key={widgetsToDesign.id}
              column={widgetsToDesign}
              onAddTask={addTask}
              onDeleteTask={deleteTask}
            />
          )}
        </div>
        {/* SAF development pair */}
        <div className="flex gap-4">
          {readySaf && (
            <Column
              key={readySaf.id}
              column={readySaf}
              onAddTask={addTask}
              onDeleteTask={deleteTask}
            />
          )}
          {inSaf && (
            <Column
              key={inSaf.id}
              column={inSaf}
              onAddTask={addTask}
              onDeleteTask={deleteTask}
            />
          )}
        </div>
        {/* JavaScript development pair */}
        <div className="flex gap-4">
          {readyJs && (
            <Column
              key={readyJs.id}
              column={readyJs}
              onAddTask={addTask}
              onDeleteTask={deleteTask}
            />
          )}
          {inJs && (
            <Column
              key={inJs.id}
              column={inJs}
              onAddTask={addTask}
              onDeleteTask={deleteTask}
            />
          )}
        </div>
        {/* Deployment pair */}
        <div className="flex gap-4">
          {readyDeploy && (
            <Column
              key={readyDeploy.id}
              column={readyDeploy}
              onAddTask={addTask}
              onDeleteTask={deleteTask}
            />
          )}
          {inDeploy && (
            <Column
              key={inDeploy.id}
              column={inDeploy}
              onAddTask={addTask}
              onDeleteTask={deleteTask}
            />
          )}
        </div>
      </div>
    </DndContext>
  );
}
