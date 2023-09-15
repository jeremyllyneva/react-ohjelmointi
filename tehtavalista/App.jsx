import { useState, useEffect } from 'react'
import './index.css'
import Task from './components/Task'
import taskService from './services/tasks'


const App = () => {
  const [tasks, setTasks] = useState(null)
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    taskService
      .getAll()
        .then(initialTasks => {
        setTasks(initialTasks)
      })
  }, [])

  if (!tasks) {
    return null
  }

  const addTask = (event) => {
    event.preventDefault()
    const taskObject = {
      content: newTask,
    }

    taskService
      .create(taskObject)
        .then(returnedTask => {
        setTasks(tasks.concat(returnedTask))
        setNewTask('')
      })
  }

  const handleTaskChange = (event) => {
    setNewTask(event.target.value)
  }

  const deleteTask = (id) => {
    const deletedTask = tasks.find(task => task.id === id)
    taskService
      .removeTask(id)
        .then(setTasks(tasks.filter(task => task.id !== id)))
  }


  return (
    <div>
      <h1>Tehtävälista</h1>
      <ul>
        {tasks.map((task) =>
        <Task key={task} task={task} deleteTask={deleteTask}/>
        )}
      </ul>
      <form onSubmit={addTask}>
          <input
            value={newTask}
            onChange={handleTaskChange}
            placeholder='Lisää tehtävä'
          />
          <button type="submit">Lisää</button>
      </form>
    </div>
  )
}

export default App
