import { FormEvent, useState } from "react";

// custom icons
import { PlusCircleIcon } from '@heroicons/react/24/solid';

const CustomForm = () => {
    const [task, setTask] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault;
        console.log(e);
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
                    onInput={(e: FormEvent<HTMLInputElement>) => { setTask((e.target as HTMLInputElement).value) }}
                    required
                    autoFocus
                    maxLength={60}
                />
            </div>
        </form>
    )
}
export default CustomForm;
