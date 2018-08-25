//Importamos PureComponent en lugar de Component
import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../HOC/WithClass';

class App extends PureComponent {
  
  // En un componente stateful en el unico lugar al que podemos acceder a props sin la palabra this
  // es en el constructor. En cualquier otro lugar debe ser this.props...
  // Si se implementa el constructor Lo primero que hay que hacer es llamar a super(props) para que funcione

  //1er metodo llamado en la creacion del componente stateful
  constructor(props){
    super(props);
    // Aca podría inicializar el state con this.state=...
    console.log("[App.js] constructor", props);
  }

  //2do metodo llamado en la creacion del componente stateful
  componentWillMount(){
    console.log("[App.js] Component will mount ");
  }

  //4to metodo llamado en la creacion del componente stateful
  // El orden en el que están en el codigo no importa, se ejecutan segun el orden especificado por react
  componentDidMount(){
    console.log("[App.js] inside componentDidMount");
  }


  
  /*
    El buen uso de este metodo es para que se vuelva a llamar a render para actualizar el DOM si es 
    que algo efectivamente cambia. Si no cambia nada, no hay necesidad de llamar a render para mejorar
    el desempeño de la aplicacion. Solo se re rendearizará el DOM si hubo algun cambio. 

    Ver funcionamiento cuando hago click en el boton show persons cuando las personas ya están cargadas
  */ 
  
  /*
  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] Inside shouldComponentUpdate");
    return this.state.personaas !== nextState.personaas || 
      this.state.showPersons !== nextState.showPersons
  }

  En lugar de hacerlo de esta manera, podemos hacerlo sin implementar shouldComponentUpdate sino que 
  heredando de otro componente, PureComponent
*/
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
  //3er metodo llamado en la creacion del componente stateful Y el UNICO OBLIGATORIO
  render() {
    console.log("[App.js] inside render")

    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        personas={this.state.personaas}
        clicked={this.deletePersonHandler}
        changed={this.switchNameHandler} />
        //Podemos asignar asi sin <div> que envuelva, porque es un solo componente. 

    }
    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          personas={this.state.personaas} 
          clicked={this.togglePersonsHandler}/>
        {persons}
      </WithClass>

    );
  }
}

export default App;
