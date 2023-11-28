import React from 'react';

type ItemType = {
    id: string
    title: string
    checked: boolean
    removeTask: (taskId: string, todolistsId:string) => void
    changeStatus: (taskID: string, isDone: boolean, todolistsId: string) => void
}

const ListItems = (props: ItemType) => {

    return (
        <div>
            <li key={props.id} className={props.checked ? "is-done" : ""}>
            <input type="checkbox" checked={props.checked} onClick={() => props.changeStatus(props.id, props.checked, props.id)}/>
            <span>{props.title}</span>
            <button onClick={() => {
                props.removeTask(props.id, props.id)
            }}>✖️</button>
            </li>
        </div>
    );
};

export default ListItems;