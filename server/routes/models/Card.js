const mongoose = require("mongoose");

const CardSchema = mongoose.Schema({
  title: String,
  question: String,
  answer: String
});

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
