import React from 'react'

// custom types and components
import { Task } from '../App';
import TaskItem from './TaskItem';
import styles from './TaskList.module.css'

const TaskList = (props: { tasks: Task[], deleteTask: (id: number) => void }) => {

    return (
        <ul className={styles.tasks}>
            {
                props.tasks.sort((a, b) => b.id - a.id).map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        deleteTask={props.deleteTask}
                    />
                ))
            }
        </ul>
    );
}
export default TaskList;