require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.ATLAS_URI;

const routes = require('./routes/record');

//setting mongoDB schema to strict mode
mongoose.set("strictQuery", false);

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

//runs only once to display database connectivity
database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})

//routes
app.use('/api', routes)
