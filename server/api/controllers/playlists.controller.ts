import pool from "../../db/database";
import { Request, Response } from "express";
import {
  getPlaylistsQuery,
  insertPlaylistQuery,
  deletePlaylistQuery,
} from "../queries/playlists.queries"

const getPlaylists = async (req: Request, res: Response) => {
  try {
    const playlists = await pool.query(getPlaylistsQuery)
    res.status(200).json(playlists.rows)
  } catch (err: any) {
    console.error(`Error in getting playlists from db: ${err}`)
    res.status(500).json({ ...err, message: err.toString() })
  }
}

const createPlaylist = async (req: Request, res: Response) => {
  try {
    const { name, url, duration } = req.body
    await pool.query(insertPlaylistQuery, [name, url, duration])
    try {
      const playlists = await pool.query(getPlaylistsQuery)
      res.status(200).json(playlists.rows)
    } catch (getError: any) {
      console.error(`Error in getting playlists from db: ${getError}`)
      res.status(500).json({ ...getError, message: getError.toString() })
    }
  } catch (postError: any) {
    console.error(`Error in creating new playlist in db: ${postError}`)
    res.status(500).json({ ...postError, message: postError.toString() })
  }
}

const deletePlaylist = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  try {
    await pool.query(deletePlaylistQuery, [id])
    res.status(200).json(`Playlist with id=${id} deleted`)
  } catch (err: any) {
    console.error(`Error in deliting playlist from db: ${err}`)
    res.status(500).json({ ...err, message: err.toString() })
  }
}

module.exports = {
  getPlaylists,
  createPlaylist,
  deletePlaylist,
}