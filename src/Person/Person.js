import React from 'react';
import './Person.css';
const person = (props)=> {

    return(
        <div className="Person">
            <p onClick={props.click} >Hola mi nombre es {props.name} y tengo {props.age} años</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    )
};

export default person;