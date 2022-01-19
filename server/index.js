const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

const Router1 = require('./Routes/Router1');

const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Home Page ");
})
app.use(Router1);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})