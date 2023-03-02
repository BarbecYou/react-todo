import { useContext } from "react";
import CustomForm from "./CustomForm";
import { TaskContext } from "./TaskActionContext";
import TaskList from "./TaskList";

const MainComponent = () => {
    const { tasks, completedTasks } = useContext(TaskContext);

    return (
        <div className="mainContainer">

            { /* grid column for active todos */}
            <div className="container">
                <header>
                    <h1>my task list</h1>
                </header>
                <CustomForm />
                {tasks.length == 0 && <p>You have no tasks to do!</p>}
                {tasks && <TaskList tasks={tasks} />}
            </div>

            {/* grid column for completed todos*/}
            <div className='container'>
                <TaskList tasks={completedTasks} />
            </div>
        </div>
    )
}
export default MainComponent;