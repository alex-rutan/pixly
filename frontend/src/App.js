import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootswatch/dist/yeti/bootstrap.min.css";
import ImagesContext from "./ImagesContext";
import PixlyApi from "./api";

/**
 * overall app to let users see images and their metadata.
 * 
 * states:
 * - images: array of image objects
 * - isLoading: boolean whether the page is doing ajax calls
*/
function App() {
  const [ images, setImages ] = useState(
    [{ path: "https://i.imgur.com/x2Xf5nj.jpeg", name: "cat1" },
    { path: "https://i.imgur.com/O6SqEc1.jpeg", name: "cat2" }]
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function getAllImagesOnMount() {
    async function getAllImages() {
      let imagesFromAPI = await PixlyApi.getAllImages();
      setImages(imagesFromAPI.images)
      setIsLoading(false);
    }
    getAllImages();
  }, [])

  useEffect(function renderOnImagesChange() {
    setIsLoading(false);
  }, [images])
  
  //filters through all photos' metadata with the search term
  async function searchPhotos(searchTerm){
    let imagesFromAPI = await PixlyApi.getAllImages(searchTerm);
    setImages(imagesFromAPI.images)
    setIsLoading(true);
  }

  // context: images, setImages, setIsLoading, searchPhotos
  return (
    <ImagesContext.Provider value={{images, setImages, setIsLoading, searchPhotos}}>
      <BrowserRouter>
        <Nav />
        <Routes loading={isLoading}/>
      </BrowserRouter>
    </ImagesContext.Provider>
  );
}

export default App;
