import { gql } from '@apollo/client';

export const AddDirector = gql`
  mutation addDirector($name: String!, $age: Int!) {
    addDirector(name: $name, age:$age) {
      id
      name
    }
  }
`;

export const AddMovie = gql`
  mutation addMovie($name: String!, $genre: String!) {
    addMovie(name: $name, genre:$genre) {
      id
      name
    }
  }
`;