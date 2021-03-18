import React from "react";
import { useQuery, gql } from "@apollo/client";
import Directors from "./Directors";

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

const DirectorsQuery = (props) => {
  const { loading, error, data } = useQuery(GetDirectors);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Directors title={props.title} data={data.directors} />
    </>
  );
};

export default DirectorsQuery;
