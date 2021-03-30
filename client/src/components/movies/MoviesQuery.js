import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Movies from "./Movies";
import Pagination from "../pagination/Pagination";

export const GetMovies = gql`
  query GetMovies {
    movies {
      id
      name
      genre
      director {
        id
        name
        age
      }
    }
  }
`;

const MoviesQuery = (props) => {
  const { loading, error, data } = useQuery(GetMovies);
  const [activePage,setActivePage] = useState(1) 
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const allItemsCount = data.movies.length;
  const onPageItemsCount = 10;
  const pagesCount = Math.ceil(allItemsCount/onPageItemsCount) 
  const start = activePage - 1

  const changePageHandler = (page)=>{
    setActivePage(page);
  }

  const moviesList = data.movies.filter((item,index)=>{
    if(index < onPageItemsCount*activePage && index>=onPageItemsCount*start) return item
    return null
  }) //список выводимых фильмов
  
  return (
    <>
      <Movies title={props.title} data={moviesList} />
      <div className="main-component__pagination">
        <Pagination pagesCount={pagesCount} changePageHandler={changePageHandler} activePage={activePage}/>
      </div>
    </>
  );
};

export default MoviesQuery;
