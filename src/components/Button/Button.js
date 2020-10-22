import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <div className="container">
        <div className="row">
        <div className="col-4">

        <button
            className={props.btnSize} 
            onClick = {props.clicked}
        >
           {props.title}
        </button>
        </div>
        </div>
        </div>

    )
}

export default Button;
