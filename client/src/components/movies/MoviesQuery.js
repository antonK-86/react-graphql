import React from "react";
import { useQuery, gql } from "@apollo/client";
import Movies from "./Movies";

const GetMovies = gql`
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Movies title={props.title} data={data.movies} />
    </>
  );
};

export default MoviesQuery;
