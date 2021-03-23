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
  mutation addMovie($name: String!, $genre: String!, $directorId: ID) {
    addMovie(name: $name, genre:$genre, directorId:$directorId) {
      id
      name
    }
  }
`;

export const DeleteDirector = gql`
  mutation deleteDirector($id: ID!) {
    deleteDirector(id: $id) {
      id
    }
  }
`;

export const DeleteMovie = gql`
  mutation deleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      id
    }
  }
`;

export const GetDirector = gql`
query GetDirector($id: ID!) {
  director(id: $id) {
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

export const GetMovie = gql`
query GetMovie($id: ID) {
  movie(id: $id) {
    id
    name
    genre
    director {
      id
      name
    }
  }
}
`;

export const UpdateMovie= gql`
mutation UpdateMovie($id:ID,$name: String!, $genre: String!, $directorId: ID) {
  updateMovie(id:$id, name: $name, genre: $genre,directorId:$directorId){
   name
  }
}
`;
