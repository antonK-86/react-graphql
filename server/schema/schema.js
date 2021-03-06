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
  GraphQLNonNull  //для объявления обязательных полей
} = graphQL;

const Movies = require("../models/movies")  //экземпляры mongoose схемы
const Directors = require("../models/directors")




/*описание схемы*/
const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    director: {
      type:DirectorType,
      resolve(parent, args) {
       // return directors.find(d=>d.id==parent.id) // для локальных коллекций movies и directors 
       return Directors.findById(parent.directorId) // метод findById предоставляется библиотекой mongoose
      }
    }
  }),
});

const DirectorType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type:  new GraphQLNonNull(GraphQLString) },
    age: { type:  new GraphQLNonNull(GraphQLInt) },
    movies: {
      //для сопоставления с movies
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        //return movies.filter((m) => m.directorId == parent.id);// для локальных коллекций movies и directors 
        return Movies.find({directorId:parent.id})
      },
    },
  }),
});


//Создание запроса мутации
const Mutation = new GraphQLObjectType({
  name : 'Mutation',
  fields: {
    addDirector:{       //добавлениe director
      type:DirectorType,
      args:{
        name:{type: new GraphQLNonNull(GraphQLString)},
        age:{type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve(parent,args){
        const director =new Directors({
          name:args.name,
          age:args.age
        })
        return director.save() 
      }
    },
    updateDirector:{       //изменение director
      type:DirectorType,
      args:{
        id:{type:GraphQLID},
        name:{type: new GraphQLNonNull(GraphQLString)},
        age:{type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve(parent,args){
        return Directors.findByIdAndUpdate(args.id, {
          $set: {
            name: args.name,
            age:args.age
          }, 
        }, 
        {new:true}
        )
      }
    },
    deleteDirector:{       //удаление director
      type:DirectorType,
      args:{
        id:{type:GraphQLID},
      },
      resolve(parent,args){
        return Directors.findByIdAndDelete(args.id)
      }
    },
    addMovie:{       //добавлениe movie
      type:MovieType,
      args:{
        name:{type: new GraphQLNonNull(GraphQLString)},
        genre:{type: new GraphQLNonNull(GraphQLString)},
        directorId:{type:GraphQLID}
      },
      resolve(parent,args){
        const movie =new Movies({
          name:args.name,
          genre:args.genre,
          directorId:args.directorId
        })
        return movie.save() 
      }
    },
    updateMovie:{       //изменение movie
      type:MovieType,
      args:{
        id:{type:GraphQLID},
        name:{type: new GraphQLNonNull(GraphQLString)},
        genre:{type: new GraphQLNonNull(GraphQLInt)},
        directorId:{type:GraphQLID}
      },
      resolve(parent,args){
        return Movie.findByIdAndUpdate(args.id, {
            $set: {
              name: args.name,
              genre:args.genre,
              directorId:args.directorId
            }, 
          }, 
          {new:true}
        )
      }
    },
    deleteMovie:{       //удаление movie
      type:MovieType,
      args:{
        id:{type:GraphQLID},
      },
      resolve(parent,args){
        return Movies.findByIdAndDelete(args.id)
      }
    },
  }
})




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
        //return movies.find((m) => m.id == args.id);// для локальных коллекций movies и directors 
        return Movies.findById(args.id)
      },
    },
    director: {
      type: DirectorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        //return directors.find((d) => d.id == args.id);// для локальных коллекций movies и directors 
        return Directors.findById(args.id)
      },
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        //return movies;// для локальных коллекций movies и directors 
        return Movies.find({})
      },
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve(parent, args) {
        //return directors;// для локальных коллекций movies и directors 
        return Directors.find({})
      },
    },
  },
});

//экспортируем корневой запрос
module.exports = new GraphQLSchema({
  query: Query,
  mutation:Mutation
});
