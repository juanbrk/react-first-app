import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
                //Wrapeamos lo que puede retornar un error en errorBoundary. ErrorBoundary es un higher order
                //component, es un componente que wrapea otro componente con el proposito de agarrar cualquier
                //error que el elemento wrapeado tira.
                //El atributo key debe ir siempre en el Outer element que se mapea. por eso lo movemos a ErrorB
                //Solo debe usarse cuando hace sentido, no envolver todo con un ErrorBoundary
                // Solo funciona en production mode y no en development mode. 
                <ErrorBoundary key={persona.id}> 
                  <Person
                    click={() => this.deletePersonHandler(indice)}
                    name={persona.name}
                    age={persona.age}
                    changed={(event) => this.switchNameHandler(event, persona.id)}
                  />
                </ErrorBoundary>
              );
            })}
        </div>
      );
      btnClass = classes.red;
    }
    return (
      <div className={classes.App}>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}
        >Switch name</button>
        {persons}
      </div>

    );
  }
}

export default App;
