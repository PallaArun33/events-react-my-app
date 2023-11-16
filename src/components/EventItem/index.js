// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveImgId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const getActiveImgClassName = isActive ? 'event-img active' : 'event-img'

  const onClickActiveImg = () => {
    setActiveImgId(id)
  }

  return (
    <li className="list-items">
      <button type="button" className="img-btn" onClick={onClickActiveImg}>
        <img src={imageUrl} alt="event" className={getActiveImgClassName} />
      </button>
      <p className="dance-type">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
