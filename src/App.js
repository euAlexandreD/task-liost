import { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";

import TaskItem from "./components/TaskItem";

const App = () => {
    const fetchTasks = async () => {
        try {
            const { data } = await axios.get(
                "https://alexandre-task-list-a09bfaff88b6.herokuapp.com/tasks"
            );
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    const [tasks, setTasks] = useState([
        {
            id: "1",
            description: "estudar",
            isCompleted: true,
        },
        {
            id: "2",
            description: "dormir",
            isCompleted: false,
        },
    ]);

    const deleteTask = () => {
        setTasks([""]);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task}>
                    {task}
                </TaskItem>
            ))}
            <button onClick={deleteTask}>delete</button>
        </>
    );
};

export default App;
