import React from 'react';
//tHIS IS NOT A FUNCTIONAL COMPONENT ITS A NORMAL JS FUNCTION 
//THAT EXPECTS 2 ARGUMENTS AND RETURNS A FUNCTION THAT BEHAVES
//AS A FUNCTIONAL COMPONENT
const withClass = (WrappedComponent, className) => {
    return (props) => {
        return (<div className={className}>
            <WrappedComponent />
        </div>
        );
    }
};
/*
        const withClass = (WrappedComponent, className) => {
        return (props) => {
            return (
                <div className={className} >
                    <WrappedComponent />
                </div>
            )
        }
    };
*/
export default withClass;