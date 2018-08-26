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

    /*  
        NUNCA MODIFICAR EL WRAPPED COMPONENT, UNICAMENTE UTILIZARLO AS IS. NO CAMBIARLE EL ESTADO NI LAS PROPS ACA PORQUE CADA WRCOM TIENE != PROPS
        Para pasarle props al componente envuelto se utiliza el operador spread con las props de la funcion, esto le pasa los pares clave-valor
        al wrappedComponent y nada mas. Una vez hecho esto ya se le pasan las props a cada componente Wrapeado y funciona como si nada. 
        PASARLE PROPS DE ESTA MANERA CONVIERTE EL HOC EN UN HOC REUSABLE 
    */
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
};
export default withClass;