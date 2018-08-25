import React, {Component} from 'react';


// Error boundaries info https://reactjs.org/docs/error-boundaries.html

// Only class components can be error boundaries. In practice, most of the time you’ll want to declare 
// an error boundary component once and use it throughout your application.

// error boundaries only catch errors in the components below them in the tree.
// can’t catch an error within itself
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    //Es un nuevo metodo 
    //componentDidCatch() method works like a JavaScript catch {} block, but for components
    componentDidCatch = (error, info)=>{
        this.setState({
            hasError:true,
            errorMessage: error
        })
    }
    render(){
        if (this.state.hasError){
            //Esto se retornará si algo anduvo mal
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            //Si no hay error se retornan los hijos wrapeados por <ErrorBoundary></ErrorBoundary>
            return this.props.children;
        }
    }
}

export default ErrorBoundary;