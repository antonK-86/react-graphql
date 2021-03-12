import React, { useState } from "react";
import useSortableData from "../hooks/useSortableData";
import btnEdit from "../assets/img/btnedit.png";
import AddMovie from "../modals/AddMovie";

const Movies = (props) => {
  const data = props.data;

  const { sortedItems, requestSort } = useSortableData(data);

  const [isAddMovie, setIsAddMovie] = useState(false);
  const [isEditMovie, setIsEditMovie] = useState(false);

  const openModalAdd = (val) => {
    setIsAddMovie(val);
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
            <tr key={movie.name}>
              <td>{index + 1}</td>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.directorId}</td>
              <td>
                <img
                  className="btn-edit"
                  src={btnEdit}
                  width="32px"
                  height="32px"
                />
                <div className="prompt-on-btn">
                    <div  className="prompt-on-btn_edit">Изменить</div>
                    <div  className="prompt-on-btn_edit">Удалить</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btn-add" onClick={() => openModalAdd(true)}>
        +
      </div>
      {isAddMovie ? <AddMovie openModalAdd={openModalAdd} /> : null}
    </div>
  );
};

export default Movies;
