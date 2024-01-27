import React, { useState } from 'react'
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
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </React.Fragment>
  )
}

export default App
