import React from 'react';
import { CheckCircle, Clock, Target } from 'lucide-react';
import { useTask } from '../context/TaskContext';

const TaskStats = () => {
  const { stats } = useTask();

  const statItems = [
    {
      icon: Target,
      label: 'Total Tasks',
      value: stats.total,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: Clock,
      label: 'Pending',
      value: stats.pending,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      icon: CheckCircle,
      label: 'Completed',
      value: stats.completed,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {statItems.map(({ icon: Icon, label, value, color, bgColor }) => (
        <div
          key={label}
          className={`${bgColor} rounded-lg p-4 text-center transition-all duration-200 hover:scale-105`}
        >
          <Icon className={`${color} mx-auto mb-2`} size={24} />
          <div className="text-2xl font-bold text-gray-900 dark:text-white" style={{ color: 'var(--text-color, #111827)' }}>
            {value}
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-400" style={{ color: 'var(--text-color, #374151)' }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskStats;