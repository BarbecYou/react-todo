import React, { useContext } from 'react'
import { Task, TaskContext } from './TaskActionContext';

// custom types and components
import TaskItem from './TaskItem';
import styles from './TaskList.module.css'

const TaskList = (props: { isCompletedList: boolean }) => {
    const { tasks } = useContext(TaskContext);

    const tempArray = tasks.sort((a, b) => b.id - a.id).filter(t => t.isChecked === props.isCompletedList);

    return (
        <ul className={styles.tasks}>

            {tempArray.length == 0 && <p>You have no tasks here</p>}
            {tempArray.map(task => {
                return (
                    <TaskItem
                        key={task.id}
                        task={task}
                    />)
            })}

        </ul>
    );
}
export default TaskList;