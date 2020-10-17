import React from 'react'
import './Input.css';

function Input(props) {
    return (
        <textarea
            className={props.inputSize}
            placeholder={props.placeholder}
            rows="6"
            onChange = {props.changed}
        />
    )
}

export default Input
