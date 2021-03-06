const express = require("express");
const Router = require("./routes/billRoutes");
const dbConnection = require("./utils/dbConnection");
const cors = require('cors');
require('dotenv').config()

dbConnection();

const app = express();

app.use(cors());
app.use(express.json());

app.use(Router);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running at port 3000");
})