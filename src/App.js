import { useState, useEffect } from "react"
import CardList from "./components/card-list/CardList"
import "./App.css"

const App = () => {
  const [users, setUsers] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users))
  }, [])

  return (
    <div className="App">
      <h1>List of Users</h1>

      <CardList users={users} />
    </div>
  )
}

export default App
