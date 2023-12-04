import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { FilterValuesType } from './App';
import Button from './Button';
import ListItems from './ListItems';
import AddItemForm from './AddItemForm'

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


type TodolistPropsType = {
    id: string
    title: string
    todolistsId: string
    task: Array<TaskType>
    removeTask: (taskId: string, todolistsId: string) => void
    changeFilter: (value: FilterValuesType, todolistsId: string) => void
    addTask: (title: string, todolistsId: string) => void
    changeStatus: (taskID: string, isDone: boolean, todolistsId: string) => void
    changeTaskTitle: (taskID?: string, newTitle?: string, todolistsId?: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistsId: string) => void
}


const Todolist: FC<TodolistPropsType> = (props) => {
    const listItemsMap = props.task.map(function (elem) {
        return <ListItems todolistsId={props.todolistsId} checked={elem.isDone} title={elem.title} id={elem.id} removeTask={props.removeTask} changeStatus={props.changeStatus} changeTaskTitle={(newTitle) => props.changeTaskTitle(newTitle)}/>
    });


    const onRemoveTodolist = () => {
        props.removeTodolist(props.id)
    }

    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }

    return (
        <TodolistStyled>
            <h3>{props.title}</h3><button onClick={onRemoveTodolist}>x</button>
            <AddItemForm addItem={addTask}/>
            <ul>
                {listItemsMap}
            </ul>
            <div>
                <Button filter={props.filter} title='all' changeFilter={props.changeFilter} id={props.id} />
                <Button filter={props.filter} title='active' changeFilter={props.changeFilter} id={props.id} />
                <Button filter={props.filter} title='completed' changeFilter={props.changeFilter} id={props.id} />
            </div>
        </TodolistStyled>
    )
}

export default Todolist;


const TodolistStyled = styled.div`
    border: 3px solid black;
    border-radius: 20px;
    padding: 10px;
    background-color: #07615c84;
    color: #303030;
`