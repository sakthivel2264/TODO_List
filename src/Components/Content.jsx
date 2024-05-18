import { useEffect, useState } from "react"
import './Content.css'

function Content() {
  const [tasks, setTasks] = useState([])
  const [newTask,setNewTask] = useState("")

  const handleChange = (e) =>{
      setNewTask(e.target.value)
    }

  const handleSubmit =(e) =>{
      e.preventDefault()
      if(newTask.trim() !== ""){
        const newTaskObj = { id: Date.now(), text: newTask, checked:false}
        setTasks((prevTasks)=>[...prevTasks,newTaskObj])
        setNewTask("")
        localStorage.setItem("tasks",JSON.stringify([...tasks,newTaskObj]))
      }
    }

  const handleDelete = (id) => {
    const updatedItems = tasks.filter((task) => task.id !== id)
    setTasks(updatedItems)
    localStorage.setItem("tasks",JSON.stringify(tasks.filter((task)=> task.id !== id)))
  }

  const toggleTask = (id) =>{
    setTasks(
      tasks.map((task)=> task.id === id ?{ ...task, checked: !task.checked}:task)
    )
  }

  const year = () =>{
     return new Date().getFullYear()
  }

  useEffect( () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"))
    if(storedTasks){
      setTasks(storedTasks)
    }
  },[])

  return (
    <>
    
      <main>
      <form onSubmit={handleSubmit} className="form-newtask">
        <input 
        type="text"
        placeholder="Add New Task"
        value={newTask}
        onChange={handleChange}
         />
        <button type="submit"  className="addtask-btn">Add Task</button>
      </form>
      <ol className="List">
        {tasks.map((task) => (
          <li key={task.id} >
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleTask(task.id)}
            />
            <label>{task.text}</label>
            <button onClick={() => handleDelete(task.id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ol>
    </main>
    </>
  )
}

export default Content