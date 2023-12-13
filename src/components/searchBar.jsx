import { useState } from "react";

export default function SearchBar({data, setData}) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClickButton = () => {
    const result = data.filter((element) => element.tags.includes(value));
    console.log(result);
    return setData(result);
  };
  return (
    <>
      <input value={value} onChange={handleChange}></input>
      <button type="button" onClick={handleClickButton}>
        Search
      </button>
    </>
  );
}
