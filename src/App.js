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
  render() {
    return (
      <div className="App">
        <button onClick={ () => this.switchNameHandler("Luchiano")}>Switch name</button>
        <h1>Hola {this.state.personaas[0].name} de {this.state.personaas[0].age} anos</h1>
        <h1>Hola {this.state.personaas[1].name} de {this.state.personaas[1].age} anos</h1>
        <h1>Hola {this.state.personaas[2].name} de {this.state.personaas[2].age} anos</h1>
        <Person name="Juan" age="25" click={this.switchNameHandler.bind(this, "Juanete")}/>
        

      </div>
    );
  }
}

export default App;
