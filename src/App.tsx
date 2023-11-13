import React, { useState } from 'react';
import './App.css';
import Todolist from './Todolist';


export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

    let task_one_title = "What to learn"

    let [tasks, setTaskc] = useState([
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'React', isDone: false },
    ])


    let[filter, setFilter] = useState<FilterValuesType>('all')

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

    function removeTask(id: number) {
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
            changeFilter={changeFilter}/>
        {/* <Todolist title = {task_two_title} task={task_two}/> */}
    </div>
);
}




export default App;
