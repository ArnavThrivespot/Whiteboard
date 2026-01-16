'use client';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Task } from './Board';

interface TaskCardProps {
  task: Task;
  columnId: string;
  onDelete: () => void;
}

export default function TaskCard({ task, columnId, onDelete }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div className={`bg-gray-50 p-2 rounded shadow-sm ${isDragging ? 'opacity-50' : ''}`}>
      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className="cursor-move"
      >
        <p className="text-base text-gray-800">{task.content}</p>
      </div>
      <button
        onClick={onDelete}
        className="mt-1 text-red-500 hover:text-red-700 text-xs"
      >
        Delete
      </button>
    </div>
  );
}
