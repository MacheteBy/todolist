import React, { FC } from 'react';
import { FilterValuesType } from './App';

type ButtonPropsType = {
    id: string
    title: FilterValuesType
    changeFilter: (value: FilterValuesType, todolistsId: string) => void
    filter: FilterValuesType
}

const Button: FC<ButtonPropsType> = (props) => {

    const onClickButtonHundler = () => {
        props.changeFilter(props.title, props.id)
    }

    return (
        <button className={props.filter === props.title ? "active-filter" : ""} onClick={onClickButtonHundler}>{props.title}</button>
    );
};

export default Button;