import React, { ChangeEvent, useState } from 'react';
import { v1 } from 'uuid';
import AddItemForm from './AddItemForm';
import './App.css';
import Todolist, { TaskType } from './Todolist';


export type FilterValuesType = 'all' | 'active' | 'completed'
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {


    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        { id: todolistId1, title: 'What to learn', filter: 'all' },
        { id: todolistId2, title: 'What to buy', filter: 'all' }
    ])

    let [tasksObj, setTaskc] = useState<TasksStateType>({
        [todolistId1]: [
            { id: v1(), title: 'HTML&CSS', isDone: true },
            { id: v1(), title: 'JS', isDone: false },
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

    function changeTaskTitle(taskID?: string, newTitle?: string, todolistsId?: string) {
        // let tasks = tasksObj[todolistsId]
        // let task = tasks.find(task => task.id === taskID)
        // if (task) {
        //     task.title = newTitle
        //     setTaskc({...tasksObj})
        // }
        alert(newTitle)
    }


    function removeTodolist(todolistsId: string) {
        let filteredTodolist = todolists.filter(tl => tl.id !== todolistsId)
        setTodolists(filteredTodolist)
        delete tasksObj[todolistsId]
        setTaskc({...tasksObj})
    }

    function addTodolists(title: string) {
        let todolist: TodolistType = {
            id: v1(),
            filter: 'all',
            title: title
        };
        setTodolists([todolist, ...todolists]);
        setTaskc({...tasksObj, [todolist.id]: []})
    }


    return (
        <div className="App">
            <AddItemForm addItem={addTodolists}/>
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
                            todolistsId={todolists.id}
                            title={todolists.title}
                            task={tasksForTodolis}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeStatus={changeStatus}
                            filter={todolists.filter}
                            removeTodolist={removeTodolist}
                            changeTaskTitle={changeTaskTitle}/>
                    )
                })
            }

        </div>
    );
}




export default App;
