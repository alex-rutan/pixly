/**
 * presentational component to display an image and details
 * 
 * props:
 * - image: Image object
 * - children: JSX
*/
function ImageCard({image, children}) {
  return (
  <div className="card p-0 mb-3">
    <p className="card-header">{image.name}</p>
    {children}
    <img className="img-fluid" src={image.path} alt={image.name}/>
  </div>)
}

export default ImageCard;