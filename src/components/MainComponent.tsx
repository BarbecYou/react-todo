import CustomForm from "./CustomForm";
import TaskList from "./TaskList";

const MainComponent = () => {

    return (
        <div className="mainContainer">

            { /* grid column for active todos */}
            <div className="container">
                <h1>my task list</h1>
                <CustomForm />
                <TaskList isCompletedList={false} />
            </div>

            {/* grid column for completed todos*/}
            <div className='container'>
                <h1>completed tasks</h1>
                <TaskList isCompletedList={true} />
            </div>
        </div>
    )
}
export default MainComponent;