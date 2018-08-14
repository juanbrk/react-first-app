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

  // usar el operador = entre arrays las copia por referencia. Lo que queremos que se haga es una nueva
  //array, eso se hace usando el operador ES6 spread ... que vierte el contenido de la antigua array en
  // una nueva. Esto se hace así porque siempre se debe mantener la inmutabilidad del estado del componente
  // y una array copiada por referencia no es la mejor manera de hacerlo. 
  deletePersonHandler = (indicePersona) =>{
    //const personas = this.state.personaas.slice();
    //Esta es la forma antigua de hacerlo, es equivalente a utilizar spread
    const personas = [...this.state.personaas];
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
