import React from "react";
import { useQuery, gql } from "@apollo/client";
import Directors from "./Directors";
import EditDirector from "../modals/editElement/EditDirector";
import { GetDirector } from "../modals/queries";

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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Directors title={props.title} data={data.directors} />
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
