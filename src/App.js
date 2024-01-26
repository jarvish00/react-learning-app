import { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
  const [users, setUsers] = useState([])
  const addUserHandler = (newUser) => {
    setUsers((existingUserList) => {
      return [newUser, ...existingUserList]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  )
}

export default App
