import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteToDo, toggleComplete } from '../redux/toDoSlice'
const Task = ({ onEditToggle }) => {
  const dispatch = useDispatch()
  const { todoList } = useSelector((state) => state.toDo)

  return (
    <ul className='todos'>
      {todoList.map(({ id, description, isDone }) => {
        return (
          <>
            <li className='list-container' key={id}>
              <input
                type='checkbox'
                className='checkbox'
                checked={isDone}
                onChange={() =>
                  dispatch(toggleComplete({ id: id, isDone: !isDone }))
                }
              />
              <span className='content'>{description}</span>
              <span className='todo-action'>
                <button
                  className='edit'
                  onClick={() => onEditToggle(id, description)}
                >
                  edit
                </button>
                <button
                  className='edit'
                  onClick={() => dispatch(deleteToDo({ id }))}
                >
                  delete
                </button>
              </span>
            </li>
          </>
        )
      })}
    </ul>
  )
}

export default Task
