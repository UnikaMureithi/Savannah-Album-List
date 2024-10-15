import "./Card.styles.css"

const Card = ({ user }) => {
  const { name, username, email } = user

  return (
    <div>
      <h2>{name}</h2>
      <h2>{username}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card
