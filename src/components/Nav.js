import React, { useContext } from "react";
import "../App.css";
import { MovieContext } from "../MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <header className="header">
        <h1 className="logo">
          <a href="">Movie-List</a>
        </h1>
        <ul className="main-nav">
          <li>
            <a href="">List of Movies: {movies.length}</a>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default Nav;
