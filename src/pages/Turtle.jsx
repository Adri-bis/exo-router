import { useLoaderData, useNavigate } from "react-router-dom";
import SearchBar from "../components/searchBar";
import { useState } from "react";

export default function Turtle (){
    const data = useLoaderData();
    const navigate = useNavigate();
    const [dataAnimals, setDataAnimals] = useState(data.hits);

    const handleClick = (i) => {
      navigate("/animals/show", { state: { ...data, id: i } });
    };
  
    return (
      <>
        <SearchBar  data={dataAnimals} setData={setDataAnimals}   />
        <h1>Categoty Tiger</h1>
        <div className="container">
          {data.hits.map((image, index) => (
            <div key={index} id={`item-${index}`}>
             <button type="button" onClick={() => handleClick(index)}>
             <img src={image.largeImageURL} alt="" />
            </button>
            </div>
          ))}
        </div>
      </>
    );
    }