//для взаимодействия с БД
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//сщздаем схему взаимодействия mongoose
const moviesSchema = new Schema({
  name: String,
  genre: String,
  directorId: Number,
});

module.exports = mongoose.model("Movies", moviesSchema);
