import React, { useState } from 'react'

import { addToDo } from '../redux/toDoSlice'
import { useDispatch } from 'react-redux'

const AddTask = (id) => {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    id: '',
    description: '',
    descriptionError: null,
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    })
  }

  const add = () => {
    if (description === '') {
      setState({ ...state, descriptionError: 'You must write something!' })
      return
    }
    dispatch(addToDo({ newDescription: description }))
    setState({ ...state, description: '' })
  }
  const { description, descriptionError } = state
  return (
    <div className='form'>
      <h2>My Todo App</h2>
      <div>
        <input
          type='text'
          value={description}
          name='description'
          onChange={handleChange}
        ></input>

        <button type='button' className='button' onClick={add}>
          Add
        </button>
      </div>
      {descriptionError ? (
        <div className='error'>{descriptionError}</div>
      ) : null}
    </div>
  )
}

export default AddTask
