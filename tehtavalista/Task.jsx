const DeleteButton = ({onClick}) => {
  return (
    <button onClick={onClick}>poista</button>
  )
}

const Task = ({ task, deleteTask }) => {
  return (
    <li className='task'>
      {task.content} <DeleteButton onClick={() => deleteTask(task.id)} />
    </li>
  )
}

export default Task
