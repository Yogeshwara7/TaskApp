import React, { useEffect, useState } from 'react';
import { TaskProvider, useTask } from './context/TaskContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';

const AppContent = () => {
    const { theme } = useTask();
    const [isLight, setIsLight] = useState(true);

    useEffect(() => {
        console.log('App received theme:', theme);
        const lightMode = theme === 'light';
        setIsLight(lightMode);
        
        // Force update document class
        document.documentElement.classList.remove('dark');
        if (!lightMode) {
            document.documentElement.classList.add('dark');
        }
        
        // Also update CSS custom properties for better fallback
        document.documentElement.style.setProperty('--bg-color', lightMode ? '#f9fafb' : '#111827');
        document.documentElement.style.setProperty('--text-color', lightMode ? '#111827' : '#f9fafb');
        
        console.log('Theme applied:', lightMode ? 'light' : 'dark');
    }, [theme]);

    // Use inline styles as fallback
    const containerStyle = {
        backgroundColor: isLight ? '#f9fafb' : '#111827',
        color: isLight ? '#111827' : '#f9fafb',
        minHeight: '100vh',
        transition: 'all 0.3s ease'
    };

    return (
        <div style={containerStyle} className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 py-8 max-w-2xl" style={{ color: isLight ? '#111827' : '#f9fafb' }}>
                <Header />
                <TaskStats />
                <TaskForm />
                <TaskFilter />
                <TaskList />
            </div>
        </div>
    );
};

function App() {
    return (
        <TaskProvider>
            <AppContent />
        </TaskProvider>
    );
}

export default App;