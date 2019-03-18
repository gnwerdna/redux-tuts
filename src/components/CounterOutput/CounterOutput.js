import React from 'react'
import classes from './CounterOutput.module.css'
const counterOutput = (props) => (
    <div className={classes.CounterOutput}>
        <h2>Current Counter: {props.value}</h2>
    </div>
);

export default counterOutput;