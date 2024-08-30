const TaskItem = (props) => {
    return (
        <>
            <h1>{props.task.description}</h1>;
            <p>{props.task.isCompleted ? "Completa" : "Não completa"}</p>
        </>
    );
};

export default TaskItem;
