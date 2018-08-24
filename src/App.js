import React, { Component } from 'react';
//Importar StyleRoot para poder usar media queries
import Radium, { StyleRoot } from 'radium';
import './App.css';
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: 'auto',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    const classes = [];
    if (this.state.personaas.length <= 2) {
      classes.push('red');
    }
    if (this.state.personaas.length <= 1) {
      classes.push('bold');
    }


    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <p className={classes.join(' ')}>Esto esta funcionando</p>
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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }
    return (
      //Para poder usar media queries hay que hacer un wrap en la aplicacion con StyleRoot
      // Estamos usando mediaQUeries para redimensionar el componente Person
      <StyleRoot>
        <div className="App">
          <button
            onClick={this.togglePersonsHandler}
            style={style}
          >Switch name</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
