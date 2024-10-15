import Album from "../album/Album"
import "./AlbumList.styles.css"

const AlbumList = ({ albums = [] }) => (
  <div className="album-list">
    {albums.map((album) => {
      return <Album key={album.id} album={album} />
    })}
  </div>
)

export default AlbumList
