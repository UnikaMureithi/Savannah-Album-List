import Photo from "../photo/Photo"
import "./PhotoList.styles.css"

const PhotoList = ({ photos = [] }) => (
  <div className="photo-list">
    {photos.map((photo) => {
      return <Photo key={photo.id} photo={photo} />
    })}
  </div>
)

export default PhotoList
