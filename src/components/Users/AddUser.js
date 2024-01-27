import { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helper/Wrapper'
const AddUser = (props) => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState()

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }
  const addUserHandler = (event) => {
    event.preventDefault()
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'either name or age is empty',
      })
      return
    }
    if (+age < 1) {
      setError({
        title: 'Invalid Input',
        message: ' age must be greater than 0',
      })
      return
    }
    console.log(username, age)
    props.onAddUser({ id: Math.random(), name: username, age: age })
    setUsername('')
    setAge('')
  }
  const errorHandler = () => setError(null)
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      {!error && (
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              value={username}
              id="username"
              type="text"
              onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age</label>
            <input
              value={age}
              id="age"
              type="number"
              onChange={ageChangeHandler}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      )}
    </Wrapper>
  )
}
export default AddUser
