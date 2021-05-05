import React from 'react'
import Person from './Person'

function Persons({persons, deletePerson}) {
    //console.log(persons)


    return (
        <div>
            {persons?.map((person)=>{
            //console.log(i, person.name);
            return <Person key={person.id} id={person.id} name={person.name} number={person.number} deletePerson={deletePerson}/>
            })}
        </div>
    )
}

export default Persons
