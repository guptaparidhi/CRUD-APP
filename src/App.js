import React, { useState } from 'react'
import TaskTable from './tables/TaskTable'
import AddTaskForm from './forms/AddTaskForm'
import EditTaskForm from './forms/EditTaskForm'

const App = () => {

  const tasksData = [
    { id: 1, taskname: 'Get Up' },
    { id: 2, taskname: 'Brush teeth and Bathe' },
    { id: 3, taskname: 'Breakfast' },
  ]

  const [tasks, setTasks] = useState(tasksData)

  const [editing, setEditing] = useState(false)

  const [currentTask, setCurrentTask] = useState(false)

  const addTask = (task) => {
    task.id = tasks.length + 1
    setTasks([...tasks, task])
  }

  const editRow = (task) => {
    setEditing(true)
  
    setCurrentTask({ id: task.id, taskname: task.taskname })
  }

  const updateTask = (id, updatedTask) => {
    setEditing(false)
  
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)))
  }

  const deleteTask = (id) => {
    setEditing(false)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <h1>TODO APP</h1>
      <div className="flex-row">
      <div className="flex-large">
      {editing ? (
            <div>
              <h2>Edit Task</h2>
              <EditTaskForm
                setEditing={setEditing}
                currentTask={currentTask}
                updateTask={updateTask}
              />
            </div>
          ) : (
            <div>
              <h2>Add task</h2>
              <AddTaskForm addTask={addTask} />
            </div>
        
          )}
        </div>
        
        <div className="flex-large">
          <h2>View tasks</h2>
          <TaskTable tasks={tasks} deleteTask={deleteTask} editRow={editRow}/>
        </div>
      </div>
    </div>
  )
}

export default App
