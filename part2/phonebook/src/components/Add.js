import React from 'react'

//form to add persons to the phonebook
function Add({newName, newNumber, handleNameChange, handleNumberChange, addName}) {
    return (
        <form onSubmit={addName}>
            <div>
                name: <input 
                    value={newName}
                    onChange={handleNameChange}
                />
                </div>        
                <div>
                number: <input 
                    value={newNumber}
                    onChange={handleNumberChange}
                />
                </div>
                <div>
                <button type="submit">add</button>
            </div>
        </form>      
    )
}

export default Add
