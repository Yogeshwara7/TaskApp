import React, { useState, useCallback } from 'react';
import { Plus } from 'lucide-react';
import { useTask } from '../context/TaskContext';

const TaskForm = React.memo(() => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const { addTask, theme } = useTask();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setError('');
    
    if (!inputValue.trim()) {
      setError('Task cannot be empty');
      return;
    }
    
    const success = addTask(inputValue);
    if (success) {
      setInputValue('');
    }
  }, [inputValue, addTask]);

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
    if (error) setError('');
  }, [error]);

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <div className="flex-1">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a new task..."
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              error 
                ? 'border-red-500 focus:border-red-500 dark:border-red-400' 
                : 'border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-400'
            }`}
            style={{
              backgroundColor: theme === 'light' ? '#ffffff' : '#374151',
              color: theme === 'light' ? '#111827' : '#f9fafb'
            }}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1 animate-fade-in">
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95"
        >
          <Plus size={20} />
          Add
        </button>
      </div>
    </form>
  );
});

TaskForm.displayName = 'TaskForm';

export default TaskForm;