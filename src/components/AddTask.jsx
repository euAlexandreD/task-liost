import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAlert } from "react-alert";
import axios from "axios";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = ({ fetchTasks }) => {
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
                `${process.env.REACT_APP_API_URL}/tasks`,
                {
                    description: task,
                    isCompleted: false,
                }
            );
            await fetchTasks();

            setTask("");

            alert.success("Tarefa adicionada com sucesso");
        } catch (error) {
            alert.error("Algo deu errado");
        }
    };

    return (
        <>
            <div className="add-task-container">
                <CustomInput
                    label="Adicionar Tarefa..."
                    value={task}
                    onChange={onChange}
                    onEnterPress={hendleTaskAdittion}
                />
                <CustomButton onClick={hendleTaskAdittion}>
                    <FaPlus size={14} color="#ffffff" />
                </CustomButton>
            </div>
        </>
    );
};

export default AddTask;
