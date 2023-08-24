import { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filterPerson, setFilterPerson] = useState("")

  const filteredNames = persons.filter(person => person.name.toLowerCase().includes(filterPerson.toLowerCase()))

  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
    }

    const alreadyAdded = persons.find( personAdded => {
      return personAdded.name.toLowerCase() === personObject.name.toLowerCase()
    })

    if(alreadyAdded === undefined) {
      personService
        .create(personObject)
          .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const deletePerson = (id) => {
    const deletedPerson = persons.find(person => person.id === id)
    const confirm = window.confirm(`Delete ${deletedPerson.name}?`)

    if (confirm) {
      personService
        .deleteContact(id)
          .then(setPersons(persons.filter(person => person.id !== id)))
  }}

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterPerson={filterPerson} setFilterPerson={setFilterPerson} />

      <h2>add a new</h2>

      <PersonForm addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber}  />

      <h2>Numbers</h2>

      <Persons people={filteredNames} deletePerson={deletePerson} />

    </div>
  )
}

export default App
