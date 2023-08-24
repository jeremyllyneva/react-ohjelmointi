const DeleteButton = ({onClick}) => {
  return (
    <button onClick={onClick}>delete</button>
  )
}

const Persons = ({ people, deletePerson }) => people.map(person =>
  <p key={person.id}> {person.name} {person.number} <DeleteButton onClick={() => deletePerson(person.id)} />
  </p>
)

export default Persons
