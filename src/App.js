import React, { Component } from 'react';
//Importamos un objeto JS que contendrá las clases de App.css como propiedades. 
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: 'auto'
    };

    //Agregamos a la array los estilos a partir del objeto classes importado 
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
      style.backgroundColor = 'red';
    }
    return (
      //El nombre de la clase es uno generado por la propiedad ident... que agregamos en webpack...
      // y al que accedemos a partir del objeto classes importado . El nombre sera un id unico generado 
      //para este componente
        <div className={classes.App}>
          <button
            onClick={this.togglePersonsHandler}
            style={style}
          >Switch name</button>
          {persons}
        </div>
      
    );
  }
}

export default App;
