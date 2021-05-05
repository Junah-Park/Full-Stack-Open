import React, { useState, useEffect } from 'react'
import Add from './components/Add'
import Persons from './components/Persons'
import personService from './services/personService'
import Notification from './components/Notification'
import './index.css';


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')  
  const [ notification, setNotification] = useState(null)
  
  //add a name along with a number to the phonebook if it isn't found
  const addName = (event) => {
    event.preventDefault()

    //empty name error handling
    if (newName === "") {
      return;
    }

    //if the person isn't in the phonebook, add to the phonebook
    if (!persons.find((person)=>person.name === newName)) {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      // console.log(newPerson)
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNotification(`Added ${returnedPerson.name}`)
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
  }
  
  //button function for deleting an entry from the database
  const deletePerson = (id) => {
      //console.log(id)
      const delPerson = persons.find(person => person.id === id)
      const confirmDelete = window.confirm(`Delete ${delPerson.name}?`)
      if (confirmDelete) {
        personService
            .remove(id)
            .then((res) => {
              //console.log(res)
              //remove person from state by filtering id
              setPersons(persons.filter((person) => person.id !== id))
              setNotification(`Removed ${delPerson.name}`)
              setTimeout(() => {
                setNotification(null)
              }, 5000)
            })
            .catch((err) => {
                console.log(err)
            })
      }
      
  }
  
  //update the name number state value upon changes to the text fields
  const handleNameChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  //initialize phonebook state with data from server
  useEffect(() => {
    // console.log('effect')
    personService
      .getAll()
      .then( initialPersons => {
        //console.log(initialPersons)
        //return each object in the array of json data
        setPersons(initialPersons)        
        //setPersons(res.data.map((person) => {return {name:person.name, number:person.number}}))
      })
      .catch((err)=> console.log(err))
      // console.log(persons)
  },[])

  //JSX that displays each name + number in the phonebook and a form to 
  //enter names and numbers
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification 
        // style={
        //   {
        //     color: 'green',
        //     background: 'lightgrey',
        //     'font-size': '20px',
        //     'border-style': 'solid',
        //     'border-radius': '5px',
        //     'padding': '10px',
        //     'margin-bottom': '10px'
        //   }
        // } 
        message={notification}
        setNotification={setNotification}
      />
      <h2>Add a person</h2>
      <Add
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        deletePerson={deletePerson}/>
    </div>
  )
}

export default App