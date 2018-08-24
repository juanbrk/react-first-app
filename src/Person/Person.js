import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props)=> {

    //Usamos una media query para redimensionar el componente dinamicamente
    const style = {
        '@media-queries (min-width: 500px)':{
            width: '450px'
        }
    }

    return(
        //asignamos el style con el media query, que sobreescribirá al estilo de su clase
        <div className="Person" style={style}>
            <p onClick={props.click} >Hola mi nombre es {props.name} y tengo {props.age} años</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    )
};

export default Radium(person);