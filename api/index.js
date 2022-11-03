const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3002;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/playlists', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(require('./mocks/playlists/success.json'));
});

app.post('/playlists', (req, res) => {
  let jsonData = require('./mocks/playlists/success.json')
  let playlists = jsonData.data.playlists
  playlists.push(req.body)
  res.header("Access-Control-Allow-Origin", "*");
  res.send(playlists)
})

app.delete('/playlists', (req, res) => {
  let jsonData = require('./mocks/playlists/success.json')
  let playlists = jsonData.data.playlists
  let deleted = playlists.find((playlist) => { return playlist.id === req.body.id })
  jsonData.data.playlists = playlists.filter((playlist) => { return playlist.id !== req.body.id })
  res.header("Access-Control-Allow-Origin", "*");
  res.send(deleted)
})

app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
})

// app.post('/login', (req, res) => {
//   if (req.body.login === 'error' || req.body.password === 'error') {
//     return res.status(401).send({ message: 'Unauthorized Error' });
//   }

//   res.send(require('./mocks/user/login/success.json'));
//   return null;
// });