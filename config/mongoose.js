/* --------- IMPORTING PACKAGE --------- */
const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb+srv://priyamprakash99:J2oCI3E7agErBq7b@cluster0.iajzcfs.mongodb.net/?retryWrites=true&w=majority");

// setting it to db
const db = mongoose.connection;

/** --------- CHECKING CONNECTION --------- **/
// if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

/** --------- EXPORTING DB --------- **/
module.exports = db;