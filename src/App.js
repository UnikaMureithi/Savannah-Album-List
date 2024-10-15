import { useState, useEffect } from "react"
import CardList from "./components/card-list/CardList"
import AlbumList from "./components/album-list/AlbumList"
import PhotoList from "./components/photo-list/PhotoList"
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([])
  const [albums, setAlbums] = useState([])
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users))
  }, [])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albums) => setAlbums(albums))
  }, [])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((photos) => setPhotos(photos))
  }, [])

  return (
    <div className="App">
      <h1>List of Users</h1>
      <CardList users={users} />

      <h1>List of Albums</h1>
      <AlbumList albums={albums} />

      <h1>List of Photos</h1>
      <PhotoList photos={photos} />
    </div>
  )
}

export default App
