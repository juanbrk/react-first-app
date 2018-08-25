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

      //1 Metodo que ejecuta cuando el componente se actualiza
      componentWillReceiveProps(nextProps){
          console.log("[UDATE Persons.js] inside componentWillReceiveProps", nextProps);
      }

      //Segundo metodo que se ejecuta frente a la actualización del componente y antes de volver a llamar a render()
      //Metodo que nos permite decidir si el componente se actualizará o no. Nos permite ahorrar un poco
      // de desempeño o performance. 
      shouldComponentUpdate(nextProps, nextState){
          console.log("[UPDATE Persons.js] inside shouldComponentUpdate", nextProps, nextState);
          //DEBE RETORNAR TRUE O FALSE. si retorna true, se actualiza sino se detiene el proceso de
          // actualizacion sin llegar a volver a llamar al metodo render() para que actualize el DOM
          return this.props.personas !== nextProps.personas;
      }


      //Tercer metodo que se ejecuta frente a la actualización del componente
      //Se usa cuando se esta por actualizar el componente
      componentWillUpdate(nextProps, nextState){
        console.log("[UPDATE Persons.js] inside componentWillUpdate", nextProps, nextState);
      }

      // Ultimo metodo que se ejecuta frente a la actualizacion del componente
      //No tiene nextProps ni nextState porque la actualización ya se llevo a cabo y el estado y las 
      //props que se actualizaron son las actuales en el componente 
      componentDidUpdate(){
        console.log("[UPDATE Persons.js] inside componentDidUpdate");
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