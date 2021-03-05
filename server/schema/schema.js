//тестовые данные
const movies = [
  //коллекция
  { id: 1, name: "Record", genre: "Crime", directorId: 2 },
  { id: 2, name: "Destr", genre: "Trash", directorId: 2 },
  { id: 3, name: "Springs", genre: "Melo", directorId: 4 },
  { id: 4, name: "Lovers", genre: "Ero", directorId: 3 },
  { id: 5, name: "Alien", genre: "Trash", directorId: 2 },
  { id: 6, name: "Simps", genre: "Comedy", directorId: 4 },
  { id: 7, name: "Night", genre: "Fear", directorId: 1 },
];

const directors = [
  //коллекция, относится к movies
  { id: 1, name: "Viktor", age: "89" },
  { id: 2, name: "Klop", age: "34" },
  { id: 3, name: "Bykov", age: "50" },
  { id: 4, name: "Drey", age: "65" },
];

const graphQL = require("graphql");
//console.log(graphQL);
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphQL;

/*описание схемы*/
const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const DirectorType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: {
      //для сопоставления с movies
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return movies.filter((m) => m.directorId == parent.id);
      },
    },
  }),
});

//создаем корневой запрос, внутри описываем все подзапросы
//напр. подзапрос movie, описавыем что он должен содержать

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    movie: {
      type: MovieType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        //логика того, какие данные должны возвращаться
        return movies.find((m) => m.id == args.id);
      },
    },
    director: {
      type: DirectorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return directors.find((d) => d.id == args.id);
      },
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return movies;
      },
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve(parent, args) {
        return directors;
      },
    },
  },
});

//экспортируем корневой запрос
module.exports = new GraphQLSchema({
  query: Query,
});
