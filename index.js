const express = require('express');
const app = express();
const port = 8080;

const path = require('path');

app.get('/', (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me', (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'not-found.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
