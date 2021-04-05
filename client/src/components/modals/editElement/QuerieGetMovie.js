import React from "react";
import { useQuery } from "@apollo/client";
import EditElement from "./EditElement";
import { GetMovie } from "../queries";


const QueryGetMovie = (props) => {
  //получаем данные фильма для внесения изменений
  const { loading, data } = useQuery(GetMovie,{variables:{id:props.id}});
  if (loading) return <p>Загружаю...</p>
  return (
    <>
      <EditElement dataMovie={data.movie} attr={props}/>
    </>
  );
};

export default QueryGetMovie;