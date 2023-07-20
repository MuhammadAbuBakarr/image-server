const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose
 .connect(DB, {})
 .then(() => {
  console.log("Database Connects");
 })
 .catch((err) => {
  console.log(err);
 });
