'use client';

import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';
import { ColumnData, Task } from './Board';

interface ColumnProps {
  column: ColumnData;
  onAddTask?: (columnId: string, content: string) => void;
  onDeleteTask: (taskId: string, columnId: string) => void;
  onEditTask: (taskId: string, columnId: string, newContent: string) => void;
}

export default function Column({ column, onAddTask, onDeleteTask, onEditTask }: ColumnProps) {
  const [newTaskContent, setNewTaskContent] = useState('');

  const { isOver, setNodeRef } = useDroppable({
    id: column.id,
  });

  const handleAddTask = () => {
    if (newTaskContent.trim() && onAddTask) {
      onAddTask(column.id, newTaskContent.trim());
      setNewTaskContent('');
    }
  };

  const getBgColor = (id: string) => {
    if (id === 'widgets-ready-saf' || id === 'widgets-in-saf') return 'bg-red-100';
    if (id === 'widgets-ready-js' || id === 'widgets-in-js') return 'bg-orange-100';
    if (id === 'widgets-ready-testing' || id === 'widgets-in-testing') return 'bg-yellow-100';
    if (id === 'widgets-ready-deployment' || id === 'widgets-in-deployment') return 'bg-green-100';
    return 'bg-white';
  };

  return (
    <div
      ref={setNodeRef}
      className={`${getBgColor(column.id)} rounded-lg shadow-md p-3 flex-1 min-h-64 ${isOver ? 'bg-blue-50' : ''}`}
    >
      <h2 className="text-xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">{column.title}</h2>
      <div className="space-y-2 mb-4">
        {column.tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            columnId={column.id}
            onDelete={() => onDeleteTask(task.id, column.id)}
            onEdit={(newContent: string) => onEditTask(task.id, column.id, newContent)}
          />
        ))}
      </div>
      {onAddTask && (
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskContent}
            onChange={(e) => setNewTaskContent(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-3 py-2 border rounded placeholder-gray-700 text-black"
            onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          />
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}
