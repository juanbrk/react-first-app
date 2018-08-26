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
    }

    componentWillMount() {
        console.log("[Person.js] Component will mount ");
    }

    componentDidMount() {
        /*
            Desde aca podemos acceder al atributo creado con ref. Como el atributo se crea durante render() y este metodo es el siguiente en el 
            orden de llamadas en la creación del componente, accedo desde aca y llamo el metodo focus que es un metodo disponible para los <input>

            Si queremos hacer foco sobre alguno en particular, accedemos a la prop del elemento que deseamos

            if (this.props.position === 0) {
                focus...
            }
        */
       this.inputElement.focus();

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
            /* 
                Agrego un atributo ref, que solo pueden tener los stateful components. Recibe una funcion y crea un atributo para la clase Person
                inp es este elemento <input> . inputElement es el nombre de la nueva propiedad que estará disponible para acceder desde otro lado
                en la clase. Será creada cuando corra render. 
            */
            ref={(inp)=> {this.inputElement = inp}}
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