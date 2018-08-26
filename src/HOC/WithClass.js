import React, {Component} from 'react';
/* 
    tHIS IS NOT A FUNCTIONAL COMPONENT ITS A NORMAL JS FUNCTION 
    THAT EXPECTS 2 ARGUMENTS AND RETURNS A FUNCTION THAT BEHAVES
    AS A FUNCTIONAL COMPONENT

    En lugar de pasar props, se le pasan configuraciones. 
*/
const withClass = (WrappedComponent, className) => {
    /*
        NO ES NECESARIO QUE ESTE HOC RETORNE UNA FUNCION. 
        Dependiendo de lo que necesite hacer, puedo hasta retornar un stateful component para, por ejemplo, conectarme con la web
        Hacemos esto retornando una clase anonima (no tiene nombre). En este caso el HOC es una funcion que retorna una clase on demand
    */
    return class extends Component {
        render() {
            return(
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            );
        }
    }
};
export default withClass;