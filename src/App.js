import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    personaas: [
      {name: 'Juan', age:25},
      {name: 'Luis', age: 32},
      {name: 'Lucas', age: 18}
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      personaas: [
        {name: newName, age:25},
        {name: 'Lufis', age: 312},
        {name: 'Luchas', age: 18}
      ]
    })
  }

  changedNameHandler = (event) =>{
    this.setState({
      personaas: [
        {name: "Juan", age:25},
        {name: event.target.value, age: 312},
        {name: 'Luchas', age: 18}
      ],
      showPersons: false
    })
  }

  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }



  render() {
    let persons = null;
    if (this.state.showPersons){
      persons =(
        <div>
          {
          // este es el patron en react para mostrar elementos en lista. Usamos javascript para mapear
          // cada elemento de la array personaas en un elemento JSX. Esto se hace porque la array personaas
          // es una array de objetos JS y en el render deben usarse objetos JSX. 
            this.state.personaas.map(persona => {
            return (
              <Person
              name={persona.name} 
              age={persona.age} />
            );
          })}
          </div> 
      );
    }

    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer',
      margin:'auto'
    };

    return (
    <div className="App">
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
