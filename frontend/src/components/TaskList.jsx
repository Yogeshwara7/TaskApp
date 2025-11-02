import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useTask } from '../context/TaskContext';
import TaskItem from './TaskItem';
import EmptyState from './EmptyState';

const TaskList = () => {
  const { filteredTasks, reorderTasks, filter } = useTask();

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    
    if (startIndex !== endIndex) {
      reorderTasks(startIndex, endIndex);
    }
  };

  if (filteredTasks.length === 0) {
    return <EmptyState filter={filter} />;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`space-y-3 transition-colors duration-200 ${
              snapshot.isDraggingOver ? 'bg-blue-50 dark:bg-blue-900/10 rounded-lg p-2' : ''
            }`}
          >
            {filteredTasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={`transition-transform duration-200 ${
                      snapshot.isDragging ? 'rotate-2 scale-105' : ''
                    }`}
                  >
                    <TaskItem
                      task={task}
                      index={index}
                      dragHandleProps={provided.dragHandleProps}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;