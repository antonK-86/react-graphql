import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Directors from "./Directors";
import EditDirector from "../modals/editElement/EditDirector";
import { GetDirector } from "../modals/queries";
import Pagination from "../pagination/Pagination";

export const GetDirectors = gql`
  query GetDirectors {
    directors {
      id
      name
      age
      movies {
        id
        name
      }
    }
  }
`;

export const GetDirectorsQuery = (props) => {
  const { loading, error, data } = useQuery(GetDirectors);
  const [activePage,setActivePage] = useState(1) 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const allItemsCount = data.directors.length;
  const onPageItemsCount = 4;
  const pagesCount = Math.ceil(allItemsCount/onPageItemsCount) 
  const start = activePage - 1

  const changePageHandler = (page)=>{
    setActivePage(page);
  }

  const directorsList = data.directors.filter((item,index)=>{
    if(index < onPageItemsCount*activePage && index>=onPageItemsCount*start) {
      return item
    }
    return null
  }) //список выводимых режисеров

  return (
    <>
      <Directors title={props.title} data={directorsList} />
      <div className="main-component__pagination">
        <Pagination pagesCount={pagesCount} changePageHandler={changePageHandler} activePage={activePage}/>
      </div>
    </>
  );
};

export const GetDirectorQuery = ({openModalEdit,directorId}) => {
  const { loading, error, data } = useQuery(GetDirector,{variables:{id:directorId}});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <EditDirector data={data.director} openModalEdit={openModalEdit}/>
    </>
  );
};
