import React, { ChangeEvent, KeyboardEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { FilterValuesType } from './App';
import Button from './Button';
import ListItems from './ListItems';

type TaskType = {
    id: string
    title: string
    isDone: boolean 
}


type TodolistPropsType = {
    title: string
    task: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}


const Todolist: FC<TodolistPropsType> = (props) => {
    //1 отрисовываем элементы из массива
    // const tasks: Array<TaskType> = props.task

    // const listItems: Array<JSX.Element> = []
    // for (let i = 0; i < props.task.length; i++) {
    //     const listItem: JSX.Element = <li>
    //         <input type="checkbox" checked={tasks[i].isDone} /> 
    //         <span>{tasks[i].title}</span></li>
    //         listItems.push(listItem)
    // }
    //2 отрисовываем элементы из массива
    const listItemsMap = props.task.map(function (elem) {
        return <ListItems checked={elem.isDone} title ={elem.title} id={elem.id} removeTask={props.removeTask} />
    });

    let[newTaskTitle, setNewTaskTitle] = useState('');

    const onClickButtonHundler = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle('')
    }

    const onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(event.currentTarget.value)
    }

    const onKeyPressHundler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.charCode === 13){
            props.addTask(newTaskTitle)
            setNewTaskTitle('')
        }
    }

    return (
        <TodolistStyled>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle} onChange={onChangeHundler} onKeyPress={onKeyPressHundler}/>
                <button onClick={onClickButtonHundler}>+</button>
            </div>
            <ul>
                {listItemsMap}
            </ul>
            <div>
                <Button title='all' changeFilter={props.changeFilter}/>
                <Button title='active' changeFilter={props.changeFilter}/>
                <Button title='completed' changeFilter={props.changeFilter}/>
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
