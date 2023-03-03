import CustomForm from "./CustomForm";
import TaskList from "./TaskList";

const MainComponent = () => {

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