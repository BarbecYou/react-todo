import { FormEvent, useState } from "react";
import { Task } from '../App';

// library imports
import { PlusCircleIcon } from '@heroicons/react/24/solid';

const CustomForm = (props: { setTasks: (tasks: Task[]) => void }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTask: Task = {
            id: Date.now(),
            isChecked: false,
            name: task
        }
        props.setTasks([newTask]);
        setTask("");
        console.log(newTask)
    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}>
            <div className="formGrid">
                <label htmlFor="taskInput">enter task</label>
                <button type="submit" id="submitBtn">
                    <PlusCircleIcon />
                </button>
                <input
                    type="text"
                    id="taskInput"
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
