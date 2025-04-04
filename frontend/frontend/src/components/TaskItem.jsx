import { deleteTask } from "../utils/api";

const TaskItem = ({ task, onDelete }) => {
    const handleDelete = async () => {
        try {
            await deleteTask(task.id);
            onDelete(task.id);
        } catch (error) {
            console.error("Error detected", error);
        }
    };

    return (
        <div className="mx-4 grid grid-cols-[1fr_1fr_100px] gap-4 items-center">
            <span>Title: {task.title}</span>
            <span>Completed: {task.completed ? "Yes" : "No"}</span>
            <button 
                onClick={handleDelete}
                className='w-full px-4 py-2 rounded-2xl border-2 bg-red-500 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300
                hover:shadow-lg transition duration-300 ease-in-out'>Delete</button>
        </div>
    );
};

export default TaskItem;