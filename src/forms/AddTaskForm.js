import React, { useState } from 'react'


const AddTaskForm = (props) => {

    const initialFormState = { id: null, taskname: '' }
    const [task, setTask] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
    
        setTask({ ...task, [name]: value })
    }
    

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (!task.taskname ) return
    
            props.addTask(task)
            setTask(initialFormState)
          }}>
        <label>Task Name</label>
        <input type="text" name="taskname" value={task.taskname} onChange={handleInputChange} />
        <button>Add new task</button>
        </form>
    )
}

export default AddTaskForm
