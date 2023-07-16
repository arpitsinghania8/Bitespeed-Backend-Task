const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const identifyRouter = require('./src/routes/identify.routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/identify', identifyRouter);

app.get('/', (req, res) => {
  res.send('Hello Bitespeed!')
});

app.listen(port, () => {
  console.log(`backend app listening on port ${port}`)
});