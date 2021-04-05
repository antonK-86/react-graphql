/* react-graphql */ 
Функционал:
M E R N
GraphQl
Apollo

Приложение:
Вывод таблицы с коллекциями из базы (MongoDB) - режисерами и фильмами. Данные можно добавлять, изменять, удалять.
Таблица сортируемая по возрастанию, убыванию.
Предусмотрен постраничный вывод данных.
Сервер размещен на Heroku.


Запросы в GraphiQL

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

/**************/
query() {
    movies {
        name
        genre
    }
}

/**************/
mutation($name:String, $age:Int) {
  addDirector(name:$name, age:$age){
    name
    age
  }
}

Query Variables
{
  "name":"TEST",
  "age":100
}

/*****************/
mutation($name:String, $age:Int) {
  updateDirector(name:$name, age:$age, id:$id){
    name
    age
  }
}

Query Variables
{
  "id":"60436d034a653401ec492d1b"
  "name":"TESTtoTest",
  "age":10
}

/**********************/

mutation($name:String, $genre:String, $directorId:ID) {
  addMovie(name:$name, genre:$genre, directorId:$directorId){
    name
    genre
    directorId
  }
}

Query Variables
{
  "name":"TEST",
  "genre":"genre test",
  "directorId": "32412341234123dfwfdqw"
}

/****************************/

mutation($id: ID, $name: String!, $genre: String!, $directorId: ID){
  updateMovie(id:$id, name:$name, genre:$genre, directorId:$directorId){
    id
    name
    genre
    director {
      name
    }
  }
}
Query Variables
{
  "id":"6058a5710231e6156c42bf29",
  "name": "Test1",
  "genre": "Test2",
  "directorId":  "6047408c3f57490ea4b0ee69"
}
