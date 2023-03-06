import React, { useContext } from 'react'
import { Task, TaskContext } from './TaskContext';

// custom types and components
import TaskItem from './TaskItem';

const TaskList = (props: { isCompletedList: boolean }) => {
    const { tasks } = useContext(TaskContext);

    const tempArray = tasks.sort((a, b) => b.id - a.id).filter(t => t.isChecked === props.isCompletedList);

    return (
        <ul className='tasks'>

            {tempArray.length == 0 && <p className='noTasksP'>You have no tasks here</p>}
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