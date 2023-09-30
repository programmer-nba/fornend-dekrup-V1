require("dotenv").config();
const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join('../dist', '')));

app.get('/', (req, res) => {
  res.sendFile(path.join('../', 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API Runing PORT ${port}`);
});