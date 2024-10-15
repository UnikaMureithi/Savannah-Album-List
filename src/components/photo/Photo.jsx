import "./Photo.styles.css"

const Photo = ({ photo }) => {
  const { albumId, title, url } = photo

  return (
    <div className="photo-container">
      <h2>{albumId}</h2>
      <h2>{title}</h2>
      <img src={url} alt={`photo ${title}`} />
    </div>
  )
}

export default Photo
