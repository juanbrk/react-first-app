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
    //Cambiamos el valor de showPersons del state. Este bloque cambia unicamente el valor de showPersons
    //El resto del state se mantiene intacto
    this.setState({showPersons: !doesShow})
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

    //Se puede ejecutar codigo javascript al wrapear en {} a todo aquello que sea dinamico y pueda cambiar
    //En este caso agrupamos a todos los <Person> en un div y aplicamos un operador ternario para ejecutar
    //un cambio condicional. No se permite usar bloques if dentro del codigo. Se usa un ternary 
    //Sintaxis del ternary condicion ? ejecutaSiTrue :  ejecutaSiElse
    return (
      <div className="App">
        <button
         onClick={this.togglePersonsHandler}
         style={style}
        >Switch name</button>
        
        {
          this.state.showPersons ? 
          <div>
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
        </div> : null
        }
        
        

      </div>
    );
  }
}

export default App;
