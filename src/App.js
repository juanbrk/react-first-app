import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    personaas: [
      {id:'fa49s8',name: 'Juan', age:25},
      {id:'a5e46s',name: 'Luis', age: 32},
      {id:'e7a86',name: 'Lucas', age: 18}
    ]
  };

  //Usamos el metodo para cambiar el nombre de una persona, cambiando el estado del componente. 
  switchNameHandler = (event, id) => {
    
    //Busco el indice de la persona a cambiar el nombre
    const personIndex = this.state.personaas.findIndex(p => {
      return p.id === id;
    });
    //creo un nuevo objeto para evitar valor por referencia. Uso el operador spread para que el objeto tenga
    //los mismos atributos que la persona que obtuvimos de la array.  
    const person = {...this.state.personaas[personIndex]};
    
    //Actualizo el nombre de la persona fetcheada, puedo hacerlo porque la array es distinta a la del estado
    person.name = event.target.value;

    //Actualizo la array y el estado del componente
    const persons = [...this.state.personaas];
    persons[personIndex] = person;
    this.setState({
      personaas: persons 
    })
  } 
  deletePersonHandler = (indicePersona) =>{
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
              key={persona.id}
              click={() => this.deletePersonHandler(indice)}
              name={persona.name} 
              age={persona.age}
              changed={(event)=> this.switchNameHandler(event, persona.id)}
               />
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
