import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    //Es un nuevo metodo 
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