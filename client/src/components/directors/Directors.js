import React, { useState } from "react";
import useSortableData from "../hooks/useSortableData";
import EditBtn from "../buttons/EditBtn";
import AddDirectorForm from "../modals/AddDirectorForm";
import DeleteDirector from "../modals/deleteElement/delDirector";

const Directors = (props) => {
  const data = props.data;

  const { sortedItems, requestSort } = useSortableData(data);

  //для отслеживания открытия модального окна(формы) добавления режисера
  const [isAddDirector, setIsAddDirector] = useState(false); 

  //для отслеживания открытия окна подтверждения удаления режисера
  const [isDelDirector, setIsDelDirector] = useState(true); 

  const openModalAdd = (value) => {
    setIsAddDirector(value);
  };

  const openDelConfirm = (value) => {
    setIsDelDirector(value);
  };

  return (
    <div className="content__table-data">
      <table>
        <caption>{props.title}</caption>
        <thead>
          <tr>
            <th>№</th>
            <th onClick={() => requestSort("name")}>Режисер</th>
            <th onClick={() => requestSort("age")}>Возраст</th>
            <th>Movies</th>
            <th></th>
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
                  <EditBtn openDelDirectorConfirm={openDelConfirm} isMovie={false}/>
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
      {isDelDirector ? <DeleteDirector openDelConfirm={openDelConfirm}/> : null}
    </div>
  );
};

export default Directors;
