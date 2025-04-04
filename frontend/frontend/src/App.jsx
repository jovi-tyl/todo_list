import { useState, useEffect } from "react";
import { getTasks, addTask, deleteTask } from "./utils/api";
import TaskList from "./pages/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data); // Set tasks in state
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    };

    fetchTasks();
  }, []);

  // Function to add a new task
  const handleAddTask = async (task) => {
    try {
      const newTask = await addTask(task); // Send task to backend
      setTasks([...tasks, newTask]); // Update UI by adding the new task
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  // Function to delete a task
  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId); // Remove from backend
      setTasks(tasks.filter(task => task.id !== taskId)); // Update UI by removing the task
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
