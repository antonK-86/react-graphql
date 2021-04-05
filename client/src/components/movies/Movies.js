import React, { useState } from "react";
import useSortableData from "../hooks/useSortableData";
import EditBtn from "../buttons/EditBtn";
import AddMovieForm from "../modals/AddMovieForm";
import { DeleteMovie } from "../modals/queries";
import { useMutation } from '@apollo/client';
import { GetMovies } from "./MoviesQuery";
import DeleteElement from "../modals/deleteElement/delElement";
import QueryGetMovie from "../modals/editElement/QuerieGetMovie";

const Movies = (props) => {
  const data = props.data;
  const { sortedItems, requestSort } = useSortableData(data);

  //для отслеживания открытия модального окна(формы) добавления фильма
  const [isAddMovie, setIsAddMovie] = useState(false);
  const [isEditMovie, setIsEditMovie] = useState(false);
  const [isDelMovie, setIsDelMovie] = useState(false);

  //для получения id элемента для изменения и удаления
  const [id, setId] = useState(null);

  const [deleteMovie] = useMutation(DeleteMovie);

  const openModalAdd = (value) => {
    setIsAddMovie(value);
  };

  const openModalEdit = (value,id) => {
    setIsEditMovie(value);
    setId(id);
  };

  const openDelConfirm = (value, id) => {
    setIsDelMovie(value);
    setId(id);
  };

  const handleDelElement = () => {
    deleteMovie({
      variables: { id },
      refetchQueries: [{ query: GetMovies }],
    }); // refetchQueries - для получения новых данных и их отрисовка
    setIsDelMovie(false);
  };

  return (
    <div className="content__table-data">
      <table>
        <caption>{props.title}</caption>
        <thead>
          <tr>
            <th className="th7">№</th>
            <th className="cursor" onClick={() => requestSort("name")}>Название</th>
            <th className="th20 cursor" onClick={() => requestSort("genre")}>Жанр</th>
            <th className="cursor" onClick={() => requestSort("directorId")}>Режисер</th>
            <th className="th10"></th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((movie, index) => (
            <tr key={movie.id}>
              <td>{index + 1}</td>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.director && movie.director.name}</td> 
              <td>
                <EditBtn openDelElemConfirm={openDelConfirm} openModalEdit={openModalEdit} id={movie.id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btn-add" onClick={() => openModalAdd(true)}>
        +
      </div>
      {isAddMovie ? <AddMovieForm openModalAdd={openModalAdd} /> : null}
      {isEditMovie ? <QueryGetMovie openModalEdit={openModalEdit} id={id}/> : null}
      {isDelMovie ? <DeleteElement openDelConfirm={openDelConfirm} handleDelElement={handleDelElement}/> : null}
    </div>
  );
};

export default Movies;


