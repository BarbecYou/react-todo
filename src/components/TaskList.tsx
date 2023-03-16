import React, { useContext } from 'react'
import { Task, TaskContext } from '../contexts/TaskContext';

// custom types and components
import TaskItem from './TaskItem';
import style from '../styles/TaskList.module.css'

const TaskList = (props: { isCompletedList: boolean }) => {
    const { tasks } = useContext(TaskContext);

    const tempArray = tasks.sort((a, b) => b.id - a.id).filter(t => t.isChecked === props.isCompletedList);

    return (
        <ul className={style.tasks}>

            {tempArray.length == 0 && <p className={style.noTasksP}>You have no tasks here</p>}
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