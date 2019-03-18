import React from 'react'
import classes from './CounterControl.module.css'
const counterControl = (props) => (
    <div onClick={props.clicked} className={classes.CounterControl}>
        {props.label}
    </div>
);

export default counterControl