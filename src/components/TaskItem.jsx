import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useAlert } from "react-alert";

import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
    const alert = useAlert();

    const handleTaskDelete = async ({ task }) => {
        try {
            await axios.delete(
                `https://alexandre-task-list-a09bfaff88b6.herokuapp.com/tasks/${task._id}`
            );

            await fetchTasks();

            alert.success("Tarefa deletada com sucesso");
        } catch (error) {
            alert.error("Algo deu errado");
        }
    };

    const handleTaskCompletionChange = async (e) => {
        try {
            await axios.patch(
                `https://alexandre-task-list-a09bfaff88b6.herokuapp.com/tasks/${task._id}`,
                {
                    isCompleted: e.target.checked,
                }
            );
            await fetchTasks();
            alert.success("Terefa atualizada com sucesso");
        } catch (error) {
            alert.error("Algo deu errado");
        }
    };

    return (
        <>
            <div className="task-item-container">
                <div className="task-description">
                    <label
                        className={
                            task.isCompleted
                                ? "checkbox-container-completed"
                                : "checkbox-container"
                        }
                    >
                        {task.description}
                        <input
                            type="checkbox"
                            defaultChecked={task.isCompleted}
                            onChange={(e) => handleTaskCompletionChange(e)}
                        />
                        <span
                            className={
                                task.isCompleted
                                    ? "checkmark completed"
                                    : "checkmark"
                            }
                        ></span>
                    </label>
                </div>
                <div className="delete">
                    <AiFillDelete
                        size={18}
                        color="#f97474"
                        onClick={handleTaskDelete}
                    />
                </div>
            </div>
        </>
    );
};

export default TaskItem;
