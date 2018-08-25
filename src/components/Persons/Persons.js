import React, { Component } from 'react';
import Person from './Person/Person';

/*
Para convertir un stateless en un stateful tengo que importar Component from react, hacer que el 
elemento extienda Component y llamar al metodo render()
*/


class persons extends Component {

    constructor(props){
        super(props);
        console.log("[Persons.js] inside constructor", props);
      }
    
      componentWillMount(){
        console.log("[Persons.js]inside Component will mount ");
      }

      componentDidMount(){
        console.log("[Persons.js] inside componentDidMount");
      }

    render() {
        console.log("[Persons.js] inside render")
        return this.props.personas.map((persona, indice) => {
            return <Person
                key={persona.id}
                click={() => this.props.clicked(indice)}
                name={persona.name}
                age={persona.age}
                changed={(event) => this.props.changed(event, persona.id)}
            />
        });
    }
}

export default persons;