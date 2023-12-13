import React from "react";
import { useNavigate } from "react-router-dom";

function Images({ data }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      {data.map((image, index) => (
        <button
          key={index}
          type="button"
          onClick={() => {
            navigate("/animals/show", { state: image });
          }}>
          <img src={image.largeImageURL} alt="" />
        </button>
      ))}
    </div>
  );
}

export default Images;
