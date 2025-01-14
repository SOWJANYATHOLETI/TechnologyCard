// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} tech-card`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}
export default CardItem
