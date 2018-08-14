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

  // Esta funcion maneja la remocion de personas dado el indice de la persona en el array del estado
  //Generamos una neuva array, copia de la original. Removemos el elemento con el metodo splice y 
  // seteamos el estado pasando la nueva array
  deletePersonHandler = (indicePersona) =>{
    const personas = this.state.personaas;
    personas.splice(indicePersona, 1);
    this.setState({personaas: personas});
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
            // El metodo map provee otro argumento que es el index del objeto que manipularemos, esto nos
            //Permite poder pasarle esta informacion a metodos o funciones que hagan algo con el objeto
            this.state.personaas.map((persona, indice) => {
            return (
              <Person
              name={persona.name} 
              age={persona.age}
              click={() => this.deletePersonHandler(indice)} />
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
