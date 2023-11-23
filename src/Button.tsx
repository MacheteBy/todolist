import React, { FC } from 'react';
import { FilterValuesType } from './App';

type ButtonPropsType = {
    title: FilterValuesType
    changeFilter: (value: FilterValuesType) => void
    filter: FilterValuesType
}

const Button: FC<ButtonPropsType> = (props) => {

    const onClickButtonHundler = () => {
        props.changeFilter(props.title)
    }

    return (
        <button className={props.filter === props.title ? "active-filter" : ""} onClick={onClickButtonHundler}>{props.title}</button>
    );
};

export default Button;