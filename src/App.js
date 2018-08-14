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

    //Podemos usar el sector entre render() y return para agregar logica
    //En este caso trasladamos la logica del operador ternario hacia aqui afuera
    //declaramos una variable persons que puede ser null o contener componentes segun la condicion
    //this.state.showPersons

    //De esta manera cuando llamemos {persons} en return, el codigo rendeara algo nulo o algo que retorne
    // un componente. 
    // de esta manera mejoramos la readability del codigo y eliminamos el operador ternario que puede
    //complicarsecuando hay muchos ternarios nested. Esta es la manera javascript de hacerlo
    let persons = null;

    if (this.state.showPersons){
      persons =(
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
