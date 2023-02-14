import React, { useState } from 'react'

// custom types and components
import { Task } from '../App';
import styles from './TaskItem.module.css';

const TaskItem = (props: { task: Task, deleteTask: (id: number) => void }) => {
    const [isChecked, setIsChecked] = useState(props.task.isChecked);
    return (
        <li className={styles.task}>
            <div className={styles['task-group']}>
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
            </div>
            <div className={styles['task-group']}>
                <button className={styles.button}>
                    edit
                </button>
                <button
                    className={styles.button}
                    onClick={() => props.deleteTask(props.task.id)}>
                    delete
                </button>
            </div>
        </li>
    );
}
export default TaskItem;