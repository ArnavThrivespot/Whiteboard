'use client';

import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Task } from './Board';

interface TaskCardProps {
  task: Task;
  columnId: string;
  onDelete: () => void;
  onEdit: (newContent: string) => void;
}

export default function TaskCard({ task, columnId, onDelete, onEdit }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(task.content);

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
    disabled: isEditing,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const handleSave = () => {
    if (editContent.trim() && editContent.trim() !== task.content) {
      onEdit(editContent.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditContent(task.content);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditContent(e.target.value);
  };

  return (
    <div className={`bg-gray-50 p-2 rounded shadow-sm ${isDragging ? 'opacity-50' : ''}`}>
      <div
        ref={setNodeRef}
        style={style}
        {...(isEditing ? {} : { ...listeners, ...attributes })}
        className={isEditing ? '' : 'cursor-move'}
      >
        {isEditing ? (
          <input
            type="text"
            value={editContent}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="w-full px-2 py-1 text-base text-black border rounded focus:outline-none"
            autoFocus
          />
        ) : (
          <p className="text-base text-gray-800 select-none" onClick={() => setIsEditing(true)}>
            {task.content}
          </p>
        )}
      </div>
      <div className="mt-1 flex gap-1">
        {!isEditing && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
            className="text-blue-500 hover:text-blue-700 text-xs"
          >
            Edit
          </button>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="text-red-500 hover:text-red-700 text-xs"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
