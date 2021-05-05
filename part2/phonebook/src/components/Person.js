import React from 'react'

//individual person and number
function Person({id, name, number, deletePerson}) {
    return (
        <div>
            {name} {number} 
            <button onClick={() => deletePerson(id)}>X</button>
        </div>)
}

export default Person
