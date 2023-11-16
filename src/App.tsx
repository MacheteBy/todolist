import React, { SetStateAction, useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import Todolist from './Todolist';


export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

    let task_one_title = "What to learn"

    let [tasks, setTaskc] = useState([
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'React', isDone: false },
    ])

    console.log(tasks)

    let [filter, setFilter] = useState<FilterValuesType>('all')

    let tasksForTodolis = tasks

    if (filter === 'active') {
        tasksForTodolis = tasks.filter(task => task.isDone === false)
    }
    if (filter === 'completed') {
        tasksForTodolis = tasks.filter(task => task.isDone === true)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    function addTask(title: string) {
        let newtask = { id: v1(), title: title, isDone: false }
        let newTasks = [newtask, ...tasks]
        setTaskc(newTasks)
    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTaskc(filteredTasks)
    }

    // const task_two_title = "Songs"
    //
    // const task_two = [
    //     {id: 1, title: 'Hello world', isDone: true},
    //     {id: 2, title: 'I am Happy', isDone: false},
    //     {id: 3, title: 'Yo', isDone: false},
    // ]


    return (
        <div className="App">
            <Todolist
                title={task_one_title}
                task={tasksForTodolis}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}/>
            {/* <Todolist title = {task_two_title} task={task_two}/> */}
        </div>
    );
}




export default App;
