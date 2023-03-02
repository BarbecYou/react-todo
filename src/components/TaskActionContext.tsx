import React, { PropsWithChildren, useState } from "react";

export interface Task {
    name: string,
    isChecked: boolean,
    id: number,
}

type TasksContextType = {
    tasks: Task[];
    completedTasks: Task[];
    addTask: (newTask: Task) => void;
    completeTask: (id: number) => void;
    uncompleteTask: (id: number) => void;
    deleteTask: (id: number) => void;
    updateTask: (id: number, newName: string) => void;
};

export const TaskContext = React.createContext<TasksContextType>({
    tasks: [],
    completedTasks: [],
    addTask: () => { },
    completeTask: () => { },
    uncompleteTask: () => { },
    deleteTask: () => { },
    updateTask: () => { },
});

export const TaskProvider = ({ children }: PropsWithChildren) => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [completedTasks, setCompletedTasks] = useState<Task[]>([])

    const addTask = (newTask: Task) => {
        setTasks([...tasks, newTask]);
        console.log(1)
    }

    const completeTask = (id: number) => {
        let checkedTask = tasks.find(t => t.id === id)!;
        setTasks(tasks.filter(t => t.id != id))
        checkedTask = {
            ...checkedTask,
            id: Date.now(),
            isChecked: true
        }
        setCompletedTasks(prev => [...prev, checkedTask])
    }

    const uncompleteTask = (id: number) => {
        let checkedTask = completedTasks.find(t => t.id === id)!;
        setCompletedTasks(completedTasks.filter(t => t.id != id))
        checkedTask = {
            ...checkedTask,
            id: Date.now(),
            isChecked: false
        }
        setTasks(prev => [...prev, checkedTask])
    }

    const updateTask = (id: number, newName: string) => {
        setTasks(prev => prev.map(t => (t.id === id ? { ...t, name: newName } : t)))
    }

    const deleteTask = (id: number) => {
        setTasks(prev => prev.filter(t => t.id != id))
    }

    const value = {
        tasks,
        completedTasks,
        addTask,
        completeTask,
        uncompleteTask,
        updateTask,
        deleteTask
    }

    return (
        <TaskContext.Provider value={value} >
            {children}
        </TaskContext.Provider>
    )
}