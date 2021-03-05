const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../schema/schema");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

mongoose.connect(
  "mongodb+srv://antonk:221077ank@cluster1.qk1ky.mongodb.net/films?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const dbConnection = mongoose.connection;

dbConnection.on("error", (err) => console.log("ERROR connect " + err));
dbConnection.once("open", () => console.log("Connect"));

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, (err) =>
  err ? console.log(error) : console.log(`Server started on ${PORT} port`)
);
