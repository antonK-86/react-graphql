# react-graphql

Запрос в GraphiQL

query ($id: ID) {
  movie(id: $id) {
    id
    name
    genre
    director {
      name
      age
      id
    }
  }
}

Query Variables
{
    "id": "603fd5fce930951367a8b2f4"
}


query() {
    movies {
        name
        genre
    }
}

