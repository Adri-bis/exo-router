import { useLocation } from "react-router-dom";

export const fetchData = async (category) => {
    try {
      const api = `https://pixabay.com/api/?key=41159557-72f68db06c4beeffaddaa746b&q=${category}&image_type=photo&pretty=true&per_page=20`
      const reponse = await fetch(api);
      const data = await reponse.json();
      if (reponse.ok){
        return data;
      }
    } catch (error) {
      console.error(error)
    }
  }
  export const IsData = () => {
    const location = useLocation();
    if (location.state){
    return location.state
    } else{
      return fetchData("animals")
    }
  }

  
  