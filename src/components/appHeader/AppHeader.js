import React from 'react'


const AppHeader = ({allTodoCount, doneCount}) => {
   
  return (
    <div className='d-flex align-items-center justify-content-between'>
        <h2>Todo List</h2>
        <h3>{allTodoCount} more todo {doneCount} done</h3>
    </div>
  )
}

export default AppHeader