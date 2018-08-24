import React, { Component } from 'react';
import classes from'./App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    personaas: [
      { id: 'fa49s8', name: 'Juan', age: 25 },
      { id: 'a5e46s', name: 'Luis', age: 32 },
      { id: 'e7a86', name: 'Lucas', age: 18 }
    ]
  };

  switchNameHandler = (event, id) => {

    const personIndex = this.state.personaas.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.personaas[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.personaas];
    persons[personIndex] = person;
    this.setState({
      personaas: persons
    })
  }

  deletePersonHandler = (indicePersona) => {
    const personas = [...this.state.personaas];
    personas.splice(indicePersona, 1);
    this.setState({ personaas: personas });
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }


  render() {

    //Clase que tendrá el boton, se asignará dinamicamente el cambio
    let btnClass = '';

    const assignedClasses = [];
    if (this.state.personaas.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.personaas.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <p className={assignedClasses.join(' ')}>Esto esta funcionando</p>
          {
            this.state.personaas.map((persona, indice) => {
              return (

                <Person
                  key={persona.id}
                  click={() => this.deletePersonHandler(indice)}
                  name={persona.name}
                  age={persona.age}
                  changed={(event) => this.switchNameHandler(event, persona.id)}
                />
              );
            })}
        </div>
      );
      //Asignacion dinamica de la clase del boton. Webpack devuelve una string, por lo que puede hacerse
      // className= {btnClass}
      btnClass = classes.red;
    }
    return (
        <div className={classes.App}>
          <button
          //Asignamos dinamicamente la clase al bton. 
            className={btnClass}
            onClick={this.togglePersonsHandler}
          >Switch name</button>
          {persons}
        </div>
      
    );
  }
}

export default App;
