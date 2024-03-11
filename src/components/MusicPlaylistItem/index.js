import {RiDeleteBin7Line} from 'react-icons/ri'
import './index.css'

const MusicPlaylistItem = props => {
  const {itemDetails, onDelete} = props
  const {id, imageUrl, name, genre, duration} = itemDetails

  const onClicked = () => {
    onDelete(id)
  }

  return (
    <li className="playlist-item">
      <div className="playlist-details-container">
        <img src={imageUrl} alt="track" className="item-img-styles" />
        <div>
          <p className="item-title">{name}</p>
          <p className="item-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          aria-label="delete"
          data-testid="delete"
          className="delete-btn"
          onClick={onClicked}
        >
          <RiDeleteBin7Line />
        </button>
      </div>
    </li>
  )
}

export default MusicPlaylistItem
