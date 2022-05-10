const mongoose = require("mongoose");
const {Schema} = mongoose;

const noteSchema = new Schema({
    title: String,
    author: String,
    body: String,
    date: Date,
    important: Boolean
})

module.exports = noteSchema;

