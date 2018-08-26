import React, { Component } from 'react';
// Libreria que nos permite garantizar el correcto pasaje de tipos para las props desde otros componentes
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../HOC/withClass';
import Auxiliary from '../../../HOC/Auxiliary';

class person extends Component {
    constructor(props) {
        super(props);
        console.log("[Person.js] constructor", props);
        //Creamos un objeto ref con createRef() disponible a partir de React 16.3.0
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log("[Person.js] Component will mount ");
    }

    componentDidMount() {
        // Para acceder a ref, debemos acceder al current ref. 
       this.inputElement.current.focus();

        console.log("[Person.js] inside componentDidMount");
    }

    render() {
        console.log("[Person.js] inside render");
        return <Auxiliary>
            <p onClick={this.props.click} >Hola mi nombre es {this.props.name} y tengo {this.props.age} años</p>
            <input 
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name}
            // nueva manera de conectar la referencia al elemento despues de haberlo creado con createRef()
            ref={this.inputElement}
             />
        </Auxiliary>
    }
}


/* 
    aca hacemos el enforcing para el correcto pasaje de los tipos para las props. La propiedad desp del punto es propTypes con p minuscula
    dentro de la declaracion es con P mayuscula, es el objeto importado desde 'prop-types'
    When an invalid value is provided for a prop, a warning will be shown in the JavaScript console

    https://reactjs.org/docs/typechecking-with-proptypes.html
*/
person.propTypes  = {
    //El valor que se pasa a la propiedad click, debe ser una funcion
    click:PropTypes.func,
    //El valor que se pasa a la propiedad name, debe ser un string
    name:PropTypes.string,
    //El valor que se pasa a la propiedad age, debe ser un numero
    age:PropTypes.number,
    //El valor que se pasa a la propiedad changed, debe ser 
    changed: PropTypes.func
};

export default withClass(person, classes.Person);