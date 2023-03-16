import { useContext, useRef } from 'react'

// custom types and components
import { Task, TaskContext } from '../contexts/TaskContext';
import style from "../styles/TaskItem.module.css";

const TaskItem = (props: { key: number, task: Task }) => {
    const ref = useRef<HTMLInputElement>(null);
    const { updateTask, completeTask, deleteTask } = useContext(TaskContext);

    const handleNameChange = () => {
        const inputField = ref.current!;
        inputField.disabled = !inputField.disabled;
        updateTask(props.task.id, inputField.value);
    }

    return (
        <li className={style.tasksss}>
            <div className={style.taskGroup}>
                <input
                    type="checkbox"
                    checked={props.task.isChecked}
                    name={props.task.name}
                    id={props.task.id.toString()}
                    onChange={() => {
                        completeTask(props.task.id)
                    }}
                />
                <input ref={ref} disabled id="taskNameField" type="text" defaultValue={props.task.name} onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleNameChange();
                    }
                }}>
                </input>
            </div>
            <div className={style.taskGroup}>
                <button className={style.buttonDark} onClick={handleNameChange} >
                    edit
                </button>
                <button
                    className={style.buttonDark}
                    onClick={() => deleteTask(props.task.id)}>
                    delete
                </button>
            </div>
        </li>
    );
}
export default TaskItem;