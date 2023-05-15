import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { editTodo, filterDone, filterUndone } from '../redux/toDoSlice'
import Task from './Task'

const ListTask = () => {
  const { todoList } = useSelector((state) => state.toDo)

  const dispatch = useDispatch()

  const [isEditing, setEditing] = useState(false)

  const [state, setState] = useState({
    id: '',
    description: '',
    descriptionError: null,
  })

  ////////////////////////////////
  const [tasks, setTasks] = useState(todoList.map((task) => task.isDone))

  console.log(tasks[0])
  const onEditToggle = (id, description) => {
    setEditing(true)
    setState({
      ...state,
      id,
      description,
    })
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    })
  }

  const { description, descriptionError, id } = state

  const edit = () => {
    if (description === '') {
      setState({ ...state, descriptionError: 'You must write something!' })
      return
    }
    dispatch(editTodo({ description, id }))
    setEditing(false)
  }

  return (
    <div className='section'>
      <div>
        <h3>Filters</h3>
        <button
          type='button'
          className='button'
          onClick={() => dispatch(filterDone({ id }))}
        >
          Done
        </button>
        <button
          type='button'
          className='button'
          onClick={() => dispatch(filterUndone({ id: tasks }))}
        >
          pending
        </button>
      </div>
      {isEditing ? (
        <div className='form'>
          <h2>Update your plan for today</h2>
          <div>
            <input
              type='text'
              value={description}
              name='description'
              onChange={handleChange}
            ></input>
            <button type='button' className='button' onClick={edit}>
              Update
            </button>
          </div>
          {descriptionError ? (
            <div className='error'>{descriptionError}</div>
          ) : null}
        </div>
      ) : (
        <Task
          onEditToggle={onEditToggle}
          // id={todoList.id}
          // isDone={todoList.isDone}
        />
      )}
    </div>
  )
}

export default ListTask
