import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    todoList: [
      { id: 1, description: 'Hit the gym', isDone: true },
      { id: 2, description: 'Meet Sissoko', isDone: false },
      { id: 3, description: 'Do my checkpoint', isDone: true },
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
        id: Math.random(),
        description: action.payload.newDescription,
        isDone: false,
      }
      state.todoList.push(newTodoList)
    },
    toggleComplete: (state, action) => {
      const index = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      )
      state.todoList[index].isDone = action.payload.isDone
    },
    deleteToDo: (state, action) => {
      let { todoList } = state
      state.todoList = todoList.filter((item) => item.id !== action.payload.id)
    },
    filterDone: (state, action) => {
      let { todoList } = state
      state.todoList = todoList.filter((item) => item.isDone !== false)
      // console.log(
      //   state.todoList.filter((item) => item.isDone).map((item) => item.isDone)
      // )
    },
    filterUndone: (state, action) => {
      let { todoList } = state
      state.todoList = todoList.filter((item) => item.isDone !== true)
      // state.todoList.filter((item) => !item.isDone).map((item) => !item.isDone)
    },
    editTodo: (state, action) => {
      let { todoList } = state
      state.todoList = todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      )
    },
  },
})

export const {
  addToDo,
  deleteToDo,
  editTodo,
  filterDone,
  filterUndone,
  toggleComplete,
} = toDoSlice.actions

export default toDoSlice.reducer
