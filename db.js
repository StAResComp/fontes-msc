var mongoose = require("mongoose")
var mongoDB = "mongodb+srv://ycby:jiMiYB6xRikGpiJ@cluster0.87w15.gcp.mongodb.net/fontes?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "mongoDB connection error: "));

module.exports = db;
