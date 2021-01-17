const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const port  = process.env.PORT || 5000;
require('dotenv').config();
const uri = process.env.mongosecret;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;


var cors = require('cors')

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  
  const root = path.join(__dirname, 'client', 'build');
  app.use(express.static(root));
  app.get("/", (req, res) => {
    res.sendFile(path.join( __dirname, 'client', 'build', 'index.html'));
  })
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const dataRouter = require('./routes/data');
app.use('/data', dataRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



module.exports = app;