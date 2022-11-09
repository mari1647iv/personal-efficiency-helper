import express, { Application } from 'express';
import { PlaylistInterface } from '../types/types';
import pool from "../db/database";
import { describe } from 'node:test';
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require('fs');

const app: Application = express();
const PORT = 3002;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get('/playlists', async (req, res) => {
  try {
    const playlists = await pool.query("SELECT * FROM playlists")
    res.status(200).json(playlists.rows)
  } catch (err) {
    console.error(`Error in getting playlists from db: ${err}`)
  }
});

app.post('/playlists', async (req, res) => {
  try {
    const { name, url, duration } = req.body
    const playlists = await pool.query("INSERT INTO playlists (name, url, duration) VALUES($1, $2, $3) RETURNING *", [name, url, duration])
    res.status(200).json(playlists.rows)
  } catch (err) {
    console.error(`Error in creating new playlist in db: ${err}`)
  }
})

app.delete('/playlists', async (req, res) => {
  try {
    const playlists = await pool.query("INSERT INTO playlists (name, url, duration) VALUES($1, $2, $3) RETURNING *", [req.body.id])
    res.status(200).json(playlists.rows)
  } catch (err) {
    console.error(`Error in deliting playlist from db: ${err}`)
  }
})

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
})

// app.post('/login', (req, res) => {
//   if (req.body.login === 'error' || req.body.password === 'error') {
//     return res.status(401).send({ message: 'Unauthorized Error' });
//   }

//   res.send(require('./mocks/user/login/success.json'));
//   return null;
// });