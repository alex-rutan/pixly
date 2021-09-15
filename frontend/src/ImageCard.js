/**
 * presentational component to display an image and details
 * 
 * props:
 * - image: Image object
 * - children: JSX
*/

function ImageCard({ image, children }) {
  return (
    <div className="card p-0 mb-3">
      <p className="card-header p-3">{image.name}</p>
      <img className="img-fluid" src={image.path} alt={image.name} />
      {children ?
        <div className="m-4">
          {children}
        </div> :
        null
      }
    </div>
  )
}

export default ImageCard;