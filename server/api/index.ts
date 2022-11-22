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
  } catch (err: any) {
    console.error(`Error in getting playlists from db: ${err}`)
    res.status(500).json({ ...err, message: err.toString() })
  }
});

app.post('/playlists', async (req, res) => {
  try {
    const { name, url, duration } = req.body
    await pool.query("INSERT INTO playlists (name, url, duration) VALUES($1, $2, $3)", [name, url, duration])
    try {
      const playlists = await pool.query("SELECT * FROM playlists")
      res.status(200).json(playlists.rows)
    } catch (getError: any) {
      console.error(`Error in getting playlists from db: ${getError}`)
      res.status(500).json({ ...getError, message: getError.toString() })
    }
  } catch (postError: any) {
    console.error(`Error in creating new playlist in db: ${postError}`)
    res.status(500).json({ ...postError, message: postError.toString() })
  }
})

app.delete('/playlists/:id', async (req, res) => {
  const id = parseInt(req.params.id)

  try {
    await pool.query("DELETE FROM playlists WHERE id = $1", [id])
    res.status(200).json(`Playlist with id=${id} deleted`)
  } catch (err: any) {
    console.error(`Error in deliting playlist from db: ${err}`)
    res.status(500).json({ ...err, message: err.toString() })
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