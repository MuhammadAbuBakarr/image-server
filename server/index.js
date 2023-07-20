const scrapper = require("linkedin-catcher");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;
require("./database/connection");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use(require("./routes/routes"));
app.use(require("./routes/userRouter"));

app.listen(port, () => {
 console.log(`Server is running on port ${process.env.PORT}`);
});
