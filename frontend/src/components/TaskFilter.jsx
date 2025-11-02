import React, { useCallback } from 'react';
import { useTask } from '../context/TaskContext';

const TaskFilter = React.memo(() => {
  const { filter, setFilter, stats, theme } = useTask();

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, [setFilter]);

  const filters = [
    { key: 'all', label: 'All', count: stats.total },
    { key: 'pending', label: 'Pending', count: stats.pending },
    { key: 'completed', label: 'Completed', count: stats.completed },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => handleFilterChange(key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
            filter === key
              ? 'bg-blue-500 text-white shadow-lg scale-105'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
          }`}
          style={filter !== key ? { 
            color: theme === 'light' ? '#111827' : '#d1d5db',
            backgroundColor: theme === 'light' ? '#ffffff' : '#374151',
            border: theme === 'light' ? '1px solid #e5e7eb' : 'none'
          } : {}}
        >
          {label}
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            filter === key
              ? 'bg-white/20 text-white'
              : 'bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-300'
          }`}>
            {count}
          </span>
        </button>
      ))}
    </div>
  );
});

TaskFilter.displayName = 'TaskFilter';

export default TaskFilter;