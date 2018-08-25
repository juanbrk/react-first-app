import React, { Component } from 'react';
import classes from './Person.css';

class person extends Component {
    constructor(props){
        super(props);
        console.log("[Person.js] constructor", props);
      }
    
      componentWillMount(){
        console.log("[Person.js] Component will mount ");
      }

      componentDidMount(){
        console.log("[Person.js] inside componentDidMount");
      }

    render() {
        console.log("[Person.js] inside render");
        return <div className={classes.Person} >
            <p onClick={this.props.click} >Hola mi nombre es {this.props.name} y tengo {this.props.age} años</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
    }
}

export default person;