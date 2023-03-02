import React, { useContext } from 'react'
import { TaskContext } from './TaskActionContext';

// custom types and components
import TaskItem from './TaskItem';
import styles from './TaskList.module.css'

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <ul className={styles.tasks}>
            {
                tasks.sort((a, b) => b.id - a.id).map(task => (
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