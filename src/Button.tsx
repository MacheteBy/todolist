import React, { FC } from 'react';
import { FilterValuesType } from './App';

type ButtonPropsType = {
    title: FilterValuesType
    changeFilter: (value: FilterValuesType) => void
}

const Button: FC<ButtonPropsType> = (props) => {

    const onClickButtonHundler = () => {
        props.changeFilter(props.title)
    }

    return (
        <button onClick={onClickButtonHundler}>{props.title}</button>
    );
};

export default Button;