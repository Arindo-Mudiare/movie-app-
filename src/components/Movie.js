import React from "react";
import "../App.css";

const Movie = ({ name, price }) => {
  return (
    <div>
      <h2 className="bolda">{name}</h2>
      <p>{price}</p>
    </div>
  );
};
export default Movie;
