import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import Todolist from './Todolist';


export type FilterValuesType = 'all' | 'active' | 'completed'
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {


    // let [tasks, setTaskc] = useState([
    //     { id: v1(), title: 'HTML&CSS', isDone: true },
    //     { id: v1(), title: 'JS', isDone: true },
    //     { id: v1(), title: 'React', isDone: false },
    // ])

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        { id: todolistId1, title: 'What to learn', filter: 'active' },
        { id: todolistId2, title: 'What to buy', filter: 'completed' }
    ])

    let [tasksObj, setTaskc] = useState({
        [todolistId1]: [
            { id: v1(), title: 'HTML&CSS', isDone: true },
            { id: v1(), title: 'JS', isDone: true },
            { id: v1(), title: 'React', isDone: false },
        ],
        [todolistId2]: [
            { id: v1(), title: 'book', isDone: true },
            { id: v1(), title: 'Milk', isDone: true },
            { id: v1(), title: 'Potatos', isDone: false },
        ]
    })







    function changeFilter(value: FilterValuesType, todolistsId: string) {
        let todolist = todolists.find(tl => tl.id === todolistsId)
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists]);
        }
    }

    function addTask(title: string, todolistsId: string) {
        let newtask = { id: v1(), title: title, isDone: false }
        let tasks = tasksObj[todolistsId]
        let newTasks = [newtask, ...tasks]
        tasksObj[todolistsId] = newTasks
        setTaskc({...tasksObj})
    }

    function removeTask(id: string, todolistsId: string) {
        let tasks = tasksObj[todolistsId]
        let filteredTasks = tasks.filter(task => task.id !== id)
        tasksObj[todolistsId] = filteredTasks
        setTaskc({...tasksObj})
    }

    function changeStatus(taskID: string, isDone: boolean, todolistsId: string) {
        let tasks = tasksObj[todolistsId]
        let task = tasks.find(task => task.id === taskID)
        if (task) {
            task.isDone = !isDone
            setTaskc({...tasksObj})
        }

    }

    function removeTodolist(todolistsId: string) {
        let filteredTodolist = todolists.filter(tl => tl.id !== todolistsId)
        setTodolists(filteredTodolist)
        delete tasksObj[todolistsId]
        setTaskc({...tasksObj})
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
            {
                todolists.map((todolists) => {
                    let tasksForTodolis = tasksObj[todolists.id]
                    if (todolists.filter === 'active') {
                        tasksForTodolis = tasksObj[todolists.id].filter(task => task.isDone === false)
                    }
                    if (todolists.filter === 'completed') {
                        tasksForTodolis = tasksObj[todolists.id].filter(task => task.isDone === true)
                    }
                    return (
                        <Todolist
                            key={todolists.id}
                            id={todolists.id}
                            title={todolists.title}
                            task={tasksForTodolis}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeStatus={changeStatus}
                            filter={todolists.filter}
                            removeTodolist={removeTodolist} />
                    )
                })
            }

        </div>
    );
}




export default App;
