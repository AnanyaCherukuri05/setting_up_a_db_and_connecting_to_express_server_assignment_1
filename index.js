const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');
const app = express();
require('dotenv').config();
app.use(express.static('static'));
const port=process.env.PORT || 3010;

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

mongoose.connect(process.env.mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});
app.listen(port, () => {
  try {
    console.log(`Example app listening at http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
