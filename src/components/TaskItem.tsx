import { useContext, useRef } from 'react'

// custom types and components
import { Task, TaskContext } from './TaskContext';
import styles from './TaskItem.module.css';

const TaskItem = (props: { key: number, task: Task }) => {
    const ref = useRef<HTMLInputElement>(null);
    const { updateTask, completeTask, deleteTask } = useContext(TaskContext);

    const handleNameChange = () => {
        const inputField = ref.current!;
        console.log(inputField);
        inputField.disabled = !inputField.disabled;
        updateTask(props.task.id, inputField.value);
    }

    return (
        <li className={styles.task}>
            <div className={styles['task-group']}>
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
            <div className={styles['task-group']}>
                <button className={styles.button} onClick={handleNameChange} >
                    edit
                </button>
                <button
                    className={styles.button}
                    onClick={() => deleteTask(props.task.id)}>
                    delete
                </button>
            </div>
        </li>
    );
}
export default TaskItem;