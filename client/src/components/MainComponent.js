import React, { useState } from "react";
import {GetDirectorsQuery} from "./directors/DirectorsQuery";
import "./MainComponent.css";
import MoviesQuery from "./movies/MoviesQuery";
import Navigation from "./nav/Navigation";

const MainComponent = () => {
  const styleC = {
    textAlign: "center",
    height: "50px",
  };
  const [selectContent, setSelectContent] = useState("movies");

  const handleNavSelect = (event) => {
    setSelectContent(event.target.name);
  };

  return (
    <div className="main-component">
      <header className="header" style={styleC}>
        <h1>React App with GraphQl </h1>
      </header>
      <div className="container">
        <div className="main-component__header">
          <Navigation
            onNavChange={handleNavSelect}
            selectContent={selectContent}
          />
        </div>
        <div className="main-component__content content">
          {selectContent === "movies" ? (
            <MoviesQuery title="Фильмы" />
          ) : (
            <GetDirectorsQuery title="Режисеры" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
