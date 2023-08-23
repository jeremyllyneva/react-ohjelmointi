const Filter = ({ filterPerson, setFilterPerson }) =>
    <label>
      filter shown with: <input type="text" value={filterPerson} onChange={(event) => setFilterPerson(event.target.value)} />
    </label>

export default Filter
