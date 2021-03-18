import React, { useState } from "react";
import useSortableData from "../hooks/useSortableData";
import EditBtn from "../buttons/EditBtn";
import AddMovieForm from "../modals/AddMovieForm";

const Movies = (props) => {
  const data = props.data;
  const { sortedItems, requestSort } = useSortableData(data);

   //для отслеживания открытия модального окна(формы) добавления фильма
  const [isAddMovie, setIsAddMovie] = useState(false);
  const [isEditMovie, setIsEditMovie] = useState(false);

  const openModalAdd = (value) => {
    setIsAddMovie(value);
  };

  return (
    <div className="content__table-data">
      <table>
        <caption>{props.title}</caption>
        <thead>
          <tr>
            <th>№</th>
            <th onClick={() => requestSort("name")}>Название</th>
            <th onClick={() => requestSort("genre")}>Жанр</th>
            <th onClick={() => requestSort("directorId")}>Режисер</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((movie, index) => (
            <tr key={movie.id}>
              <td>{index + 1}</td>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{""}</td>
              <td>
                <EditBtn />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btn-add" onClick={() => openModalAdd(true)}>
        +
      </div>
      {isAddMovie ? <AddMovieForm openModalAdd={openModalAdd} /> : null}
    </div>
  );
};

export default Movies;
