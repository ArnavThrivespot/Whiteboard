'use client';

import { useState, useEffect } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Column from './Column';

export interface Task {
  id: string;
  content: string;
}

export interface ColumnData {
  id: string;
  title: string;
  tasks: Task[];
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

  useEffect(() => {
    const saved = localStorage.getItem('kanban-board-v2');
    if (saved) {
      setColumns(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('kanban-board-v2', JSON.stringify(columns));
  }, [columns]);

  const moveTask = (taskId: string, fromColumnId: string, toColumnId: string) => {
    setColumns(prev => {
      const newColumns = [...prev];
      const fromColumn = newColumns.find(col => col.id === fromColumnId);
      const toColumn = newColumns.find(col => col.id === toColumnId);
      const task = fromColumn?.tasks.find(t => t.id === taskId);
      if (fromColumn && toColumn && task) {
        fromColumn.tasks = fromColumn.tasks.filter(t => t.id !== taskId);
        toColumn.tasks.push(task);
      }
      return newColumns;
    });
  };

  const addTask = (columnId: string, content: string) => {
    const newTask: Task = { id: Date.now().toString(), content };
    setColumns(prev =>
      prev.map(col =>
        col.id === columnId ? { ...col, tasks: [...col.tasks, newTask] } : col
      )
    );
  };

  const deleteTask = (taskId: string, columnId: string) => {
    setColumns(prev =>
      prev.map(col =>
        col.id === columnId ? { ...col, tasks: col.tasks.filter(t => t.id !== taskId) } : col
      )
    );
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

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-2 min-h-screen bg-gray-100 space-y-2">
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
