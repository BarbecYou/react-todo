import { useContext, useEffect } from "react";
import CustomForm from "./AddTaskForm";
import TaskList from "./TaskList";
import style from "../styles/Main.module.css";
import { ThemeContext } from "../contexts/ThemeContext";

const MainComponent = () => {
    const { theme, changeTheme } = useContext(ThemeContext)

    useEffect(() => {
        document.body.className = theme;
    });

    return (
        <>
            <div className={style["themeButtonContainer"]}>
                <button className={style[`themeButton-${theme}`]} onClick={changeTheme}>{theme === 'dark' ? 'Ligth mode' : 'Dark mode'}</button>
            </div>
            <div className={style.mainContainer}>

                { /* grid column for active todos */}
                <div className={style.container}>
                    <h1>my task list</h1>
                    <CustomForm />
                    <TaskList isCompletedList={false} />
                </div>

                {/* grid column for completed todos*/}
                <div className={style.container}>
                    <h1>completed tasks</h1>
                    <TaskList isCompletedList />
                </div>
            </div>
        </>
    )
}
export default MainComponent;