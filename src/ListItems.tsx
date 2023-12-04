import React, { ChangeEvent } from 'react';
import EditableSpan from './EditableSpan';

type ItemType = {
    id: string
    title: string
    checked: boolean
    todolistsId: string
    removeTask: (taskId: string, todolistsId:string) => void
    changeStatus: (taskID: string, isDone: boolean, todolistsId: string) => void
    changeTaskTitle: (taskID?: string, newTitle?: string, todolistsId?: string) => void
}

const ListItems = (props: ItemType) => {

    return (
        <div>
            <li key={props.id} className={props.checked ? "is-done" : ""}>
            <input type="checkbox" checked={props.checked} onClick={() => props.changeStatus(props.id, props.checked, props.todolistsId)}/>
            {/* <span>{props.title}</span> */}
            <EditableSpan title={props.title} onChange={(newTitle) => props.changeTaskTitle(newTitle)}/>
            <button onClick={() => {
                props.removeTask(props.id, props.todolistsId)
            }}>✖️</button>
            </li>
        </div>
    );
};

export default ListItems;