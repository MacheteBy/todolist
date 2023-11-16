import React from 'react';

type ItemType = {
    id: string
    title: string
    checked: boolean
    removeTask: (taskId: string) => void
}

const ListItems = (props: ItemType) => {
    return (
        <div>
            <li key={props.id}>
            <input type="checkbox" checked={props.checked} />
            <span>{props.title}</span>
            <button onClick={() => {
                props.removeTask(props.id)
            }}>✖️</button>
            </li>
        </div>
    );
};

export default ListItems;