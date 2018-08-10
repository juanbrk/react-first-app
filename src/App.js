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
      ]
    })
  }

  render() {
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
         onClick={ () => this.switchNameHandler("Luchiano")}
         style={style}
        >Switch name</button>
        <Person
          name={this.state.personaas[0].name}
         age={this.state.personaas[0].age}/>
        <Person
          name={this.state.personaas[1].name} 
          age="25" 
          click={this.switchNameHandler.bind(this, "Juanete")}
          changed={this.changedNameHandler}/>
         <Person
          name={this.state.personaas[2].name}
         age={this.state.personaas[2].age}/>
        

      </div>
    );
  }
}

export default App;
