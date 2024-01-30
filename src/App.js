import { useEffect, useState } from 'react'

function App() {
  console.log('App component start point ')
  const [countState, setCountState] = useState({
    count: 0,
    name: 'gyandeep',
  })

  const incrementHandler = () => {
    setCountState((prevState) => {
      console.log('useState')
      return { ...prevState, count: prevState.count + 1 }
    })
  }
  useEffect(() => {
    console.log('useEffect')
  }, [])
  console.log('App component start end ')
  return (
    <>
      <h2>{countState.name}</h2>
      <h3>Count:{countState.count}</h3>
      <button onClick={incrementHandler}>increment</button>
    </>
  )
}

export default App
