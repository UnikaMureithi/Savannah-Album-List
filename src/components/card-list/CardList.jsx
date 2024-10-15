import Card from "../card/Card"
import "./CardList.styles.css"

const CardList = ({ users = [] }) => (
  <div className="card-list">
    {users.map((user) => {
      return <Card key={user.id} user={user} />
    })}
  </div>
)

export default CardList
