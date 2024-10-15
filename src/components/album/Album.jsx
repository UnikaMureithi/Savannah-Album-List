import "./Album.styles.css"

const Album = ({ album }) => {
  const { id, userId, title } = album
  return (
    <div className="album-container">
      <h1>{id}</h1>
      <h2>{userId}</h2>
      <h1>{title}</h1>
    </div>
  )
}

export default Album
