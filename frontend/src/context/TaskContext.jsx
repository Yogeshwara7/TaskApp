import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useLocalStorage('taskFilter', 'all');
  const [theme, setTheme] = useLocalStorage('theme', 'light');


  // Add new task
  const addTask = useCallback((text) => {
    if (!text.trim()) return false;
    
    const newTask = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    
    setTasks(prev => [...prev, newTask]);
    return true;
  }, [setTasks]);

  // Toggle task completion
  const toggleTask = useCallback((id) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  // Delete task
  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, [setTasks]);

  // Reorder tasks (for drag and drop)
  const reorderTasks = useCallback((startIndex, endIndex) => {
    setTasks(prev => {
      const result = Array.from(prev);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    });
  }, [setTasks]);



  // Filtered tasks
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      console.log('Toggling theme from', prev, 'to', newTheme);
      
      // Directly apply to document as backup
      document.documentElement.classList.remove('dark');
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
      
      return newTheme;
    });
  }, [setTheme]);

  // Task statistics
  const stats = useMemo(() => ({
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    pending: tasks.filter(task => !task.completed).length,
  }), [tasks]);

  const value = {
    tasks,
    filteredTasks,
    filter,
    setFilter,
    theme,
    stats,
    addTask,
    toggleTask,
    deleteTask,
    reorderTasks,
    toggleTheme,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};