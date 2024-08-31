import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]) // Initialize jokes as an empty array

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data)
      })
      .catch((err) => {
        console.log("error:", err)
      })
  }, []) // Add an empty dependency array to run useEffect only once

  return (
    <>
      <h1>First frontend and backend merger</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.punchline}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
