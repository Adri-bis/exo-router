import { useLoaderData, useNavigate } from "react-router-dom";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import Images from "../components/Images";

export default function Tiger() {
  const data = useLoaderData();
  const [dataAnimals, setDataAnimals] = useState(data.hits);

  return (
    <>
      <SearchBar data={dataAnimals} setData={setDataAnimals} />
      <h1>Categoty Tiger</h1>
      <Images data={dataAnimals} />
    </>
  );
}
