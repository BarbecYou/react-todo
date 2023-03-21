import { FormEvent, useContext, useState } from "react";

// library imports
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Task, TaskContext } from "../contexts/TaskContext";
import style from "../styles/AddTaskForm.module.css"
import { ThemeContext } from "../contexts/ThemeContext";

const CustomForm = () => {
    const { addTask } = useContext(TaskContext);
    const { theme } = useContext(ThemeContext);
    const [task, setTask] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTask: Task = {
            id: Date.now() + Math.random() * 10 + 5,
            isChecked: false,
            name: task
        }
        addTask(newTask);
        setTask("");
    }

    return (
        <form
            className={style.form}
            onSubmit={handleSubmit}>
            <div className={`${style['formGrid']} ${style[`formGrid-${theme}`]}`}>
                <label htmlFor="taskInput">enter task</label>
                <button type="submit" id={style.submitBtn}>
                    <PlusCircleIcon />
                </button>
                <input
                    type="text"
                    id={style.taskInput}
                    className="input"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                />
            </div>
        </form>
    )
}
export default CustomForm;
