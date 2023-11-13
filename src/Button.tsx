import React, { FC } from 'react';
import { FilterValuesType } from './App';

type ButtonPropsType = {
    title: FilterValuesType
    changeFilter: (value: FilterValuesType) => void
}

const Button: FC<ButtonPropsType> = (props) => {
    return (
        <button onClick={() => {
            props.changeFilter(props.title)
        }}>{props.title}</button>
    );
};

export default Button;