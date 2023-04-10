import React from 'react'
import TodoListItem from '../todoListItem/TodoListItem'

const TodoList = (props) => {
  if(props.todo.length===0){
    return <h3>No tasks</h3>
  }

  const elements=props.todo.map((item)=>{
    // const {id, ...itemProps}=item
    return(
      <li className='list-group-item' key={item.id}>
       <TodoListItem {...item} {...props}/>
    </li>
    )
  })
  return (
   <ul className='list-group'>
    {elements}
    
   </ul>
  )
}

export default TodoList