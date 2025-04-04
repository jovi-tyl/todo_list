import { useState } from 'react';
import { addTask } from '../utils/api';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { title, completed };
    try {
      const newTask = await addTask(task);
      onAddTask(newTask); // Notify parent to update the task list with the new task
      setTitle('');
      setCompleted(false);
    } catch (error) {
      console.error('Error adding task', error);
    }
  };

  return (
    <div className="flex justify-evenly">
    <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Enter your task"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
      />
  
      <button type="submit" 
      className='px-4 py-2 rounded-2xl border-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300
      hover:shadow-lg transition duration-300 ease-in-out'>
        Add Task</button>
    </form>
    </div>
  );
};

export default TaskForm;
