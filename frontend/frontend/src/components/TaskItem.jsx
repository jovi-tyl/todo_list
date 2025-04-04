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
        <div>
            Title: {task.title}
            Completed: {task.completed ? "Yes" : "No"}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;