import React, { useState } from "react";
import "../AddElementForm.css";
import close from "../../assets/img/close.png";
import { useMutation } from "@apollo/client";
import { UpdateDirector } from "../queries";
import { GetDirectors } from "../../directors/DirectorsQuery";

const EditDirector = ({ data, openModalEdit }) => {
  const directorId = data.id
  const nameDirector = data.name;
  const ageDirector = data.age;

  const [name, setName] = useState(nameDirector);
  const [age, setAge] = useState(ageDirector);

  const [updateDirector] = useMutation(UpdateDirector);

  const closeModal = () => {
    openModalEdit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDirector({
      variables: { id:directorId, name, age },
      refetchQueries: [{ query: GetDirectors }],
    }); // refetchQueries - для получения новых данных и их отрисовка
    openModalEdit(false);
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
            <label>Age</label>
            <input
              type="text"
              placeholder="Genre"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </div>
          <button type="submit" className="pressed-button">
            Update
          </button>
        </form>
        <div className="close" onClick={closeModal}>
          <img src={close} width="24px" height="24px" alt="img"/>
        </div>
      </div>
    </div>
  );
};

export default EditDirector;
