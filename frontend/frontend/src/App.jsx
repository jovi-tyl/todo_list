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
  const handleAddTask = async (newTask) => {
    setTasks([...tasks, newTask]); // Update UI by adding the new task
  };

  // Function to delete a task
  const handleDeleteTask = async (taskId) => {
      setTasks(tasks.filter(task => task.id !== taskId)); // Update UI by removing the task
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">To Do List</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
