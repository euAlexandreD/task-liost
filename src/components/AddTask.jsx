import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAlert } from "react-alert";
import axios from "axios";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = () => {
    const [task, setTask] = useState("");

    const alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const hendleTaskAdittion = async () => {
        try {
            if (task.length === 0) {
                return alert.error(
                    "A tarefa precisa de uma descrição para ser adicionada"
                );
            }
            await axios.post(
                "https://alexandre-task-list-a09bfaff88b6.herokuapp.com/tasks",
                {
                    description: task,
                    isCompleted: false,
                }
            );
        } catch (error) {}
    };

    return (
        <>
            <div className="add-task-container">
                <CustomInput
                    label="Adicionar Tarefa..."
                    value={task}
                    onChange={onChange}
                />
                <CustomButton onClick={hendleTaskAdittion}>
                    <FaPlus size={14} color="#ffffff" />
                </CustomButton>
            </div>
        </>
    );
};

export default AddTask;
