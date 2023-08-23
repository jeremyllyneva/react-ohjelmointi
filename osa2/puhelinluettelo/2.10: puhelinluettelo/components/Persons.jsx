const Person = ({ name, number }) => <p key={name}>{name} {number}</p>

const Persons = ({ people }) => people.map(person =>
  <Person key={person.name} name={person.name} number={person.number}
/>)

export default Persons
