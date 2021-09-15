import { useState, useContext} from "react";
import ImagesContext from "./ImagesContext";

/**
 * Search component, calls searchPhotos based on search term.
 * 
 * state:
 * - Formdata: object
 * 
 * context:
 * SearchPhotos - ImagesContext
*/
function SearchForm(){
  const [formData, setFormData] = useState({search:""});
  const {searchPhotos} = useContext(ImagesContext);

  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData( oldData => (
      {
        ...oldData,
        [name]: value,
      }
    ))
  }

  function handleSubmit(evt){
    evt.preventDefault();
    searchPhotos(formData["search"]);
    setFormData({search:""});
  }

  return (
    <form onSubmit={handleSubmit} className="SearchFrom form-group row text-center my-3">
      <div className="col-10 ps-5">
      <input
        name="search"
        placeholder="Enter Search Term..."
        onChange={handleChange}
        className="form-control"
      />
      </div>
      <div className="col-2 pe-5">
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}

export default SearchForm;