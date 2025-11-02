import React from 'react';
import { CheckSquare, Moon, Sun } from 'lucide-react';
import { useTask } from '../context/TaskContext';

const Header = () => {
  const { stats, theme, toggleTheme } = useTask();

  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-500 rounded-lg">
          <CheckSquare className="text-white" size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ color: theme === 'light' ? '#111827' : '#ffffff' }}>
            Task Manager
          </h1>
          <p className="text-gray-700 dark:text-gray-400 text-sm" style={{ color: theme === 'light' ? '#374151' : '#9ca3af' }}>
            {stats.pending} pending, {stats.completed} completed
          </p>
        </div>
      </div>
      
      <button
        onClick={toggleTheme}
        className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <Moon className="text-gray-700 dark:text-gray-300" size={20} />
        ) : (
          <Sun className="text-yellow-400" size={20} />
        )}
      </button>
    </header>
  );
};

export default Header;