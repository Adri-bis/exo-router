import { useLoaderData } from "react-router-dom";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import Images from "../components/Images";

export default function Rat() {
  const data = useLoaderData();
  const [dataAnimals, setDataAnimals] = useState(data.hits);

  return (
    <>
      <SearchBar data={dataAnimals} setData={setDataAnimals} />
      <h1>Categoty Rat</h1>
      <Images data={dataAnimals} />
    </>
  );
}
