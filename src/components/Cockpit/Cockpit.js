import React from 'react';
import classes from './Cockpit.css';
import Auxiliary from '../../HOC/Auxiliary';

const Cockpit = (props) => {

    //Variables que sirven para las clases de los elementos que usaremos
    const assignedClasses = [];
    
    //Cambie .Cockpit por .Button ya que es para el unico elemento que necesito estilo
    let btnClass = classes.Button;
    
    //Cambiamos la clase del boton segun si el booleano pasado por parametro es true o false
    if (props.showPersons){
        //Agrupo clases si se cumple la condicion
        btnClass = [classes.Button, classes.red ].join(' ');
    }

    // personas es una array pasada por parametro conteniendo las personas
    if (props.personas.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personas.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
       
        <Auxiliary>
            <h1>Hi this is a React app</h1>
            <p 
                className={assignedClasses.join(' ')}
            >Esto esta funcionando</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >Switch name</button>
        </Auxiliary>
    );
}

export default Cockpit;