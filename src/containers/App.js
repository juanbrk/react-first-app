import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        personas={this.state.personaas}
        clicked={this.deletePersonHandler}
        changed={this.switchNameHandler} />
        //Podemos asignar asi sin <div> que envuelva, porque es un solo componente. 

    }
    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          personas={this.state.personaas} 
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>

    );
  }
}

export default App;
