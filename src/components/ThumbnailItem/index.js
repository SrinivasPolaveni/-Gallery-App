// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {itemDetails, onChangeState, onChangeStateText, isActive} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = itemDetails
  const onChange = () => {
    onChangeState(imageUrl)
    onChangeStateText(imageAltText)
  }

  const result = isActive ? '' : 'image2'

  return (
    <li className="card1" onClick={onChange}>
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className={`image1 ${result}`}
      />
    </li>
  )
}
export default ThumbnailItem
