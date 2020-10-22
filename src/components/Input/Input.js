import React from 'react'
import './Input.css';

function Input(props) {
    return (
        <div className="container">
        <div className="row">
        <div className="col-12">
        <textarea
            className={props.inputSize}
            placeholder={props.placeholder}
            rows="6"
            onChange = {props.changed}
        />
        </div>
        </div>
        </div>
    )
}

export default Input
