import { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

import "./Tasks.scss";
import AddTask from "./AddTask";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API_URL}/tasks`
            );
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            <div className="tasks-container">
                <h2>Minhas Tarefa</h2>

                <div className="last-tasks">
                    <h3>Ultimas Tarefas</h3>
                    <AddTask fetchTasks={fetchTasks} />
                    <div className="tasks-list">
                        {tasks
                            .filter((task) => task.isCompleted === false)
                            .map((lastTask) => (
                                <TaskItem
                                    key={lastTask.id}
                                    task={lastTask}
                                    fetchTasks={fetchTasks}
                                />
                            ))}
                    </div>
                </div>

                <div className="completed-tasks">
                    <h3>Tarefas Concluidas</h3>
                    <div className="tasks-list">
                        {tasks
                            .filter((task) => task.isCompleted)
                            .map((completedTasks) => (
                                <TaskItem
                                    key={completedTasks.id}
                                    task={completedTasks}
                                    fetchTasks={fetchTasks}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tasks;
