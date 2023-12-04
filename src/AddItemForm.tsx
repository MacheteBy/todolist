import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

type AddItemFormPropstType = {
    addItem: (title: string) => void
}


const AddItemForm: React.FC<AddItemFormPropstType> = (props) => {

    let [newTaskTitle, setNewTaskTitle] = useState('');
    let [error, setError] = useState<string | null>(null);

    const onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(event.currentTarget.value)
    }

    const onClickButtonHundler = () => {
        if (newTaskTitle.trim() !== '') {
            props.addItem(newTaskTitle.trim())
            setNewTaskTitle('')
        } else {
            setError('Filed is required')
        }
    }

    const onKeyPressHundler = (event: KeyboardEvent<HTMLInputElement>) => {
            setError('')
            if (event.charCode === 13) {
                props.addItem(newTaskTitle)
                setNewTaskTitle('')
            }
        }

        return (
            <div>
                <input className={error ? "error" : ""} maxLength={15} value={newTaskTitle} onChange={onChangeHundler} onKeyPress={onKeyPressHundler} />
                <button onClick={onClickButtonHundler}>+</button>
                {error && <div className="error-message">Filed is required</div>}
            </div>
        )
    }


export default AddItemForm;