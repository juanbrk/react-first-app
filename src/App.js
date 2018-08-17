import React, { Component } from 'react';
//Importar radium para poder usarlo
import Radium from 'radium';
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

  switchNameHandler = (event, id) => {
    
    const personIndex = this.state.personaas.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.personaas[personIndex]};
    person.name = event.target.value;

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
    
    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor:'pointer',
      margin:'auto',
      //Esta es la sintaxis para usar Radium con cualquier pseudo selector, envolverlos en '' para que sean
      //string en JSX. el valor es un nuevo objeto JS para que contenga el conjutno de estilos para el estado
      //cuando hoveree
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };

    const classes = [];
    if(this.state.personaas.length <= 2){
      classes.push('red');
    }
    if(this.state.personaas.length <= 1){
      classes.push('bold');
    }


    let persons = null;
    if (this.state.showPersons){
      persons =(
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
              changed={(event)=> this.switchNameHandler(event, persona.id)}
               />
            );
          })}
          </div> 
      );
      style.backgroundColor= 'red';
      //Para actualizar el pseudo selector no podemos usar style.:hover sino que tenemos que usar la sintaxis
      //stile[':nombreDelSelector'] = {}
      style[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      };
    }
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

// Hacemos este wrap para poder usar las funcionalidades ofrecidas por radium
//Puede hacerse lo mismo en components que heredan de Component o elementos funciones, imprtando radium y
//wrapeando el export
export default Radium(App);
