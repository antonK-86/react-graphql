import React, { useState } from "react";
import useSortableData from "../hooks/useSortableData";
import EditBtn from "../buttons/EditBtn";
import AddDirectorForm from "../modals/AddDirectorForm";
import { DeleteDirector } from "../modals/queries";
import { useMutation } from '@apollo/client';
import { GetDirectorQuery, GetDirectors } from "./DirectorsQuery";
import DeleteElement from "../modals/deleteElement/delElement";

const Directors = (props) => {
  const data = props.data;
  
  const { sortedItems, requestSort } = useSortableData(data);

  //для отслеживания открытия модального окна(формы) добавления режисера
  const [isAddDirector, setIsAddDirector] = useState(false); 

  //для отслеживания открытия модального окна(формы) изменения режисера
  const [isEditDirector, setIsEditDirector] = useState(false);

  //для отслеживания открытия окна подтверждения удаления режисера
  const [isDelDirector, setIsDelDirector] = useState(false); 

  //для получения id элемента для изменения и удаления
  const [directorId,setDirectorId] = useState(null);

  const [deleteDirector] = useMutation(DeleteDirector);

  const openModalAdd = (value) => {
    setIsAddDirector(value);
  };

  const openModalEdit = (value,id) => {
    setIsEditDirector(value);
    setDirectorId(id);
  };

  const openDelConfirm = (value, id) => {
    setIsDelDirector(value);
    setDirectorId(id)
  };

  const handleDelElement = ()=>{
    console.log(directorId);
     deleteDirector({ variables: { id:directorId }, refetchQueries:[{query:GetDirectors}] }); // refetchQueries - для получения новых данных и их отрисовка
     setIsDelDirector(false)
}

  return (
    <div className="content__table-data">
      <table>
        <caption>{props.title}</caption>
        <thead>
          <tr>
            <th className="th7">№</th>
            <th onClick={() => requestSort("name")}>Режисер</th>
            <th className="th20" onClick={() => requestSort("age")}>Возраст</th>
            <th>Movies</th>
            <th className="th10"></th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((director, index) => {
            const directfilms = director.movies.map((m) => <p key={m.id}>{m.name}</p>);
            return (
              <tr key={director.id}>
                <td>{index + 1}</td>
                <td>{director.name}</td>
                <td>{director.age}</td>
                <td>{directfilms}</td>
                <td>
                  <EditBtn openDelElemConfirm={openDelConfirm} openModalEdit={openModalEdit} id={director.id}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="btn-add" onClick={() => openModalAdd(true)}>
        +
      </div>
      {isAddDirector ? <AddDirectorForm openModalAdd={openModalAdd} /> : null}
      {isEditDirector ? <GetDirectorQuery openModalEdit={openModalEdit} directorId={directorId}/> : null}
      {isDelDirector ? <DeleteElement openDelConfirm={openDelConfirm} handleDelElement={handleDelElement}/> : null}
    </div>
  );
};

export default Directors;
