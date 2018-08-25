import React from 'react';
import classes from  './Person.css';
const person = (props)=> {


    return(
        <div className={classes.Person} >
            <p onClick={props.click} >Hola mi nombre es {props.name} y tengo {props.age} años</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    )
};

export default person;