import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

    //Variables que sirven para las clases de los elementos que usaremos
    const assignedClasses = [];
    
    let btnClass = '';
    
    //Cambiamos la clase del boton segun si el booleano pasado por parametro es true o false
    if (props.showPersons){
        btnClass = classes.red;
    }

    // personas es una array pasada por parametro conteniendo las personas
    if (props.personas.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personas.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi this is a React app</h1>
            <p 
                className={assignedClasses.join(' ')}
            >Esto esta funcionando</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >Switch name</button>
        </div>
    );
}

export default Cockpit;