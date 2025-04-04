import { useState } from 'react';
import { addTask } from '../utils/api';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { title, description, completed };
    try {
      const newTask = await addTask(task);
      onAddTask(newTask); // Notify parent to update the task list with the new task
      setTitle('');
      setDescription('');
      setCompleted(false);
    } catch (error) {
      console.error('Error adding task', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Task Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
