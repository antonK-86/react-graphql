import React, { useState } from "react";
import "./AddElementForm.css";
import close from "../assets/img/close.png";
import { GetDirectors } from "../directors/DirectorsQuery";
import { useMutation, useQuery } from "@apollo/client";
import { AddMovie } from "./queries";
import { GetMovies } from "../movies/MoviesQuery";

export const SelectDirector = ({handleChange, movieDirector}) => {
  const { loading, error, data } = useQuery(GetDirectors);
  if (loading) return <p>Загружаю...</p>;
  if (error) return <p>Error :(</p>;
  let id = null
  let name = null
  if (movieDirector) {id=movieDirector.id; name=movieDirector.name}
  const items = data.directors;
  return (
    <label>
      <p>Выбирете режисера</p>
      <select name="directors" onChange={handleChange}>
        <option name="null" value={id}>{name}</option>
        {items.map((d) => {
          return <option name={d.name} value={d.id} key={d.id}>{d.name}</option>;
        })}
      </select>
    </label>
  );
};

const AddMovieForm = (props) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [directorId, setDirectorId] = useState(null);

  const [addMovie] = useMutation(AddMovie);

  const closeModal = () => {
    props.openModalAdd(false);
  };

  const handleChange=(e)=>{
    setDirectorId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({
      variables: { name, genre, directorId },
      refetchQueries: [{ query: GetMovies }],
    }); // refetchQueries - для получения новых данных и их отрисовка
    props.openModalAdd(false);
  };

  return (
    <div className="modal">
      <div className="modal-container">
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-form__input-block">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="modal-form__input-block">
            <label>Genre</label>
            <input
              type="text"
              placeholder="Genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className="modal-form__input-block">
            <SelectDirector handleChange={handleChange}/>
          </div>
          <button type="submit" className="pressed-button">
            Add movie
          </button>
        </form>
        <div className="close" onClick={closeModal}>
          <img src={close} width="24px" height="24px" alt="img"/>
        </div>
      </div>
    </div>
  );
};

export default AddMovieForm;
