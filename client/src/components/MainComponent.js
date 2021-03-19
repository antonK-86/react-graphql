import React, { useState } from "react";
import DirectorsQuery from "./directors/DirectorsQuery";
import "./MainComponent.css";
import MoviesQuery from "./movies/MoviesQuery";
import Navigation from "./nav/Navigation";

const data = {
  directors: [
    {
      name: "Кристофер Нолан",
      age: 56,
    },
    {
      name: "Лав Диас",
      age: 47,
    },
    {
      name: "Джеймс Кэмерон",
      age: 65,
    },
  ],
  movies: [
    {
      name: "Довод",
      genre: "боевик",
      directorId: "60473fdc3f57490ea4b0ee62",
    },
    {
      name: "Бессонница",
      genre: "триллер",
      directorId: "60473fdc3f57490ea4b0ee62",
    },
    {
      name: "Подмена",
      genre: "драма",
      directorId: "6047407b3f57490ea4b0ee68",
    },
    {
      name: "Чудо на гудзоне",
      genre: "драма",
      directorId: "6047407b3f57490ea4b0ee68",
    },
    {
      name: "Снайпер",
      genre: "боевик",
      directorId: "6047407b3f57490ea4b0ee68",
    },
  ],
};

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
            <DirectorsQuery title="Режисеры" />
          )}
        </div>
        {/* <div className="main-component__pagination">PAGINATION</div> */}
      </div>
    </div>
  );
};

export default MainComponent;
