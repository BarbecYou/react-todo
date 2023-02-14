import React, { useState } from 'react'

// custom types and components
import { Task } from '../App';
import styles from './TaskItem.module.css';

const TaskItem = (props: { task: Task, deleteTask: (id: number) => void }) => {
    const [isChecked, setIsChecked] = useState(props.task.isChecked);
    return (
        <li className={styles.task}>
            <div>
                <input
                    type="checkbox"
                    checked={isChecked}
                    name={props.task.name}
                    id={props.task.id.toString()}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <label htmlFor={props.task.id.toString()}>
                    {props.task.name}
                </label>
                <button>
                    szerkesztés
                </button>
                <button
                    onClick={() => props.deleteTask(props.task.id)}>
                    törlés
                </button>
            </div>
        </li>
    );
}
export default TaskItem;