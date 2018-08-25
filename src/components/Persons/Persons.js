import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.personas.map((persona, indice) => {
    return (
        <Person
            key={persona.id}
            click={() => props.clicked(indice)}
            name={persona.name}
            age={persona.age}
            changed={(event) => props.changed(event, persona.id)}
        />
    );
});

export default Persons;