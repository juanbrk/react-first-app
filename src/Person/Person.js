import React from 'react';
const person = (props)=> {

    return(
        <div>
            <p onClick={props.click}>Hola mi nombre es {props.name} y tengo {props.age} años</p>
        </div>

    )
};

export default person;