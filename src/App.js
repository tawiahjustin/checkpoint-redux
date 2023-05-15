import './App.css'
import AddTask from './Components/AddTask'
// import { useSelector } from 'react-redux'

import ListTask from './Components/ListTask'

function App() {
  // const { todoList } = useSelector((state) => state.toDo)

  return (
    <div className='App'>
      <AddTask />
      <ListTask />
    </div>
  )
}

export default App
