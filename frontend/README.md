# Task Manager App

A modern, feature-rich task management application built with React, featuring drag-and-drop functionality, dark mode, and persistent local storage.

## Features

### Basic Functionality
- ✅ Add new tasks with form validation
- ✅ Mark tasks as completed/pending
- ✅ Delete tasks with confirmation
- ✅ Filter tasks (All, Completed, Pending)
- ✅ Persist tasks using Local Storage

### React Advanced Features
- ✅ **Custom Hooks**: `useLocalStorage` for persistent state management
- ✅ **Context API**: Global state management without prop drilling
- ✅ **Performance Optimization**: 
  - `React.memo` for component memoization
  - `useCallback` for function memoization
  - `useMemo` for expensive calculations
- ✅ **Form Validation**: Prevents empty task submission with error feedback

### CSS & UI Features
- ✅ **Dark/Light Mode Toggle**: Persistent theme switching
- ✅ **Smooth Animations**: CSS transitions for all interactions
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Drag & Drop**: Reorder tasks using @hello-pangea/dnd
- ✅ **Modern UI**: Clean, accessible interface with hover effects

### Additional Features
- 📊 **Task Statistics**: Visual overview of task counts
- 🎨 **Custom Animations**: Fade-in, slide-in, and bounce effects
- ♿ **Accessibility**: Proper ARIA labels and keyboard navigation
- 📱 **Mobile Optimized**: Touch-friendly interface
- 🔄 **Auto-save**: All changes saved automatically to localStorage

## Tech Stack

- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **@hello-pangea/dnd** - Drag and drop functionality
- **Lucide React** - Beautiful, customizable icons
- **Local Storage** - Client-side data persistence

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # App header with theme toggle
│   ├── TaskForm.jsx    # Add new task form
│   ├── TaskFilter.jsx  # Filter buttons
│   ├── TaskList.jsx    # Drag-and-drop task list
│   ├── TaskItem.jsx    # Individual task component
│   ├── TaskStats.jsx   # Statistics overview
│   └── EmptyState.jsx  # Empty state component
├── context/            # React Context
│   └── TaskContext.jsx # Global task state management
├── hooks/              # Custom hooks
│   └── useLocalStorage.js # Local storage hook
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles and animations
```

## Performance Optimizations

- **Memoization**: Components and functions are memoized to prevent unnecessary re-renders
- **Efficient Updates**: Context updates only trigger re-renders for components that use the changed data
- **Lazy Loading**: Components are loaded only when needed
- **Optimized Animations**: CSS transitions instead of JavaScript animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for learning or as a starting point for your own task manager!