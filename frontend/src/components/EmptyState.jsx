import React from 'react';
import { CheckSquare, Plus } from 'lucide-react';

const EmptyState = ({ filter }) => {
  const getEmptyMessage = () => {
    switch (filter) {
      case 'completed':
        return {
          title: 'No completed tasks yet',
          subtitle: 'Complete some tasks to see them here',
          icon: CheckSquare,
        };
      case 'pending':
        return {
          title: 'No pending tasks',
          subtitle: 'All caught up! Great job!',
          icon: CheckSquare,
        };
      default:
        return {
          title: 'No tasks yet',
          subtitle: 'Add your first task to get started',
          icon: Plus,
        };
    }
  };

  const { title, subtitle, icon: Icon } = getEmptyMessage();

  return (
    <div className="text-center py-16 animate-fade-in">
      <div className="mb-4">
        <Icon 
          size={64} 
          className="mx-auto text-gray-300 dark:text-gray-600" 
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-500">
        {subtitle}
      </p>
    </div>
  );
};

export default EmptyState;