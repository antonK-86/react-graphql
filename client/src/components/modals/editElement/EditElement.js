import React, {useState } from "react";
import "../AddElementForm.css";
import close from "../../assets/img/close.png";
import { useMutation} from "@apollo/client";
import { UpdateMovie} from "../queries";
import { GetMovies } from "../../movies/MoviesQuery";
import {SelectDirector} from "../AddMovieForm"


const EditElement = ({dataMovie, attr}) => {

  const id = attr.id;
  const [name, setName] = useState(dataMovie.name);
  const [genre, setGenre] = useState(dataMovie.genre);

  const [directorId, setDirectorId] = useState(null);

  const [updateMovie] = useMutation(UpdateMovie);

  const closeModal = () => {
    attr.openModalEdit(false);
  };

  const handleChange=(e)=>{
    setDirectorId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie({
      variables: { id, name, genre, directorId },
      refetchQueries: [{ query: GetMovies }],
    }); // refetchQueries - для получения новых данных и их отрисовка
    attr.openModalEdit(false);
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
            <SelectDirector handleChange={handleChange} movieDirector ={dataMovie.director ? dataMovie.director : null}/> 
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

export default EditElement;
