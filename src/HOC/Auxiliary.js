//Aux es un Higher Order Component (HOC) 
//a higher-order component is a function that takes a component and returns a new component
//Sirve para evitar usar <div> innecesarios cuando no hay necesidad de estilar componentes. 

const aux = (props) => props.children;

export default aux;