import React, { useState, useContext } from "react";
import "../App.css";
import { MovieContext } from "../MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <div>
      <h2 className="bolda">Add a New Movie </h2>
      <form onSubmit={addMovie}>
        <label for="name">Movie Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={updateName}
        />
        <label for="name">Movie Price</label>
        <input
          type="text"
          id="price"
          name="price"
          value={price}
          onChange={updatePrice}
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
