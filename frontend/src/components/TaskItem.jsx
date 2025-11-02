import React, { useCallback } from 'react';
import { Trash2, GripVertical } from 'lucide-react';
import { useTask } from '../context/TaskContext';

const TaskItem = React.memo(({ task, index, dragHandleProps }) => {
  const { toggleTask, deleteTask } = useTask();

  const handleToggle = useCallback(() => {
    toggleTask(task.id);
  }, [task.id, toggleTask]);

  const handleDelete = useCallback(() => {
    deleteTask(task.id);
  }, [task.id, deleteTask]);

  return (
    <div className={`group flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-md ${
      task.completed ? 'opacity-75' : ''
    }`}>
      {/* Drag Handle */}
      <div 
        {...dragHandleProps}
        className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
      >
        <GripVertical size={16} />
      </div>

      {/* Task Text */}
      <span className={`flex-1 transition-all duration-200 ${
        task.completed 
          ? 'line-through text-gray-500 dark:text-gray-400' 
          : 'text-gray-800 dark:text-gray-200'
      }`}>
        {task.text}
      </span>

      {/* Complete Button */}
      <button
        onClick={handleToggle}
        className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
          task.completed
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-gray-200 text-gray-700 hover:bg-green-100 hover:text-green-700 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-green-800 dark:hover:text-green-200'
        }`}
      >
        {task.completed ? 'Completed' : 'Complete'}
      </button>

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 transition-colors duration-200 opacity-0 group-hover:opacity-100 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
});

TaskItem.displayName = 'TaskItem';

export default TaskItem;