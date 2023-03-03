import { useContext } from "react";
import CustomForm from "./CustomForm";
import { TaskContext } from "./TaskActionContext";
import TaskList from "./TaskList";

const MainComponent = () => {
    //const { tasks } = useContext(TaskContext);

    return (
        <div className="mainContainer">

            { /* grid column for active todos */}
            <div className="container">
                <header>
                    <h1>my task list</h1>
                </header>
                <CustomForm />
                <TaskList isCompletedList={false} />
            </div>

            {/* grid column for completed todos*/}
            <div className='container'>
                <TaskList isCompletedList={true} />
            </div>
        </div>
    )
}
export default MainComponent;