import React, { useContext } from 'react'
import { Task, TaskContext } from './TaskActionContext';

// custom types and components
import TaskItem from './TaskItem';
import styles from './TaskList.module.css'

const TaskList = (props: { tasks: Task[] }) => {

    return (
        <ul className={styles.tasks}>
            {
                props.tasks.sort((a, b) => b.id - a.id).map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                    />
                ))
            }
        </ul>
    );
}
export default TaskList;