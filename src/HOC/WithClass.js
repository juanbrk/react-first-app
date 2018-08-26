import React from 'react';
/* 
    tHIS IS NOT A FUNCTIONAL COMPONENT ITS A NORMAL JS FUNCTION 
    THAT EXPECTS 2 ARGUMENTS AND RETURNS A FUNCTION THAT BEHAVES
    AS A FUNCTIONAL COMPONENT

    En lugar de pasar props, se le pasan configuraciones. 
*/
const withClass = (WrappedComponent, className) => {
    //Retorna una funciona que recibirá las configuraciones como sus props y renderea algo
    //La funcion de retorno califica como un componente funcional. 

    // NUNCA MODIFICAR EL WRAPPED COMPONENT, UNICAMENTE UTILIZARLO AS IS. NO CAMBIARLE EL ESTADO NI LAS PROPS ACA
    return (props) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )
};
export default withClass;