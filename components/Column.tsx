'use client';

import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';
import { ColumnData, Task } from './Board';

interface ColumnProps {
  column: ColumnData;
  onAddTask: (columnId: string, content: string) => void;
  onDeleteTask: (taskId: string, columnId: string) => void;
}

export default function Column({ column, onAddTask, onDeleteTask }: ColumnProps) {
  const [newTaskContent, setNewTaskContent] = useState('');

  const { isOver, setNodeRef } = useDroppable({
    id: column.id,
  });

  const handleAddTask = () => {
    if (newTaskContent.trim()) {
      onAddTask(column.id, newTaskContent.trim());
      setNewTaskContent('');
    }
  };

  return (
    <div
      ref={setNodeRef}
      className={`bg-white rounded-lg shadow-md p-3 flex-1 min-h-64 ${isOver ? 'bg-blue-50' : ''}`}
    >
      <h2 className="text-lg font-semibold mb-4">{column.title}</h2>
      <div className="space-y-2 mb-4">
        {column.tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            columnId={column.id}
            onDelete={() => onDeleteTask(task.id, column.id)}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={newTaskContent}
          onChange={(e) => setNewTaskContent(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-3 py-2 border rounded"
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}
