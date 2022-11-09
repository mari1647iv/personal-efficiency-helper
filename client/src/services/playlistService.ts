import axios from 'axios';
import { PlaylistInterface } from '../types/types';

class PlaylistService {
  API_ENDPOINT = 'http://localhost:3002'

  async getPlaylists() {
    let resp = await axios.get("http://localhost:3002/playlists")
    console.log(resp)
    const data: (PlaylistInterface[] | undefined) = resp.data
    console.log(data)
    return data
  }

  async getPlaylistById(id: number) {
    let resp = await axios.get("http://localhost:3002/playlists")
    const data: (PlaylistInterface[] | undefined) = resp.data
    console.log(data)
    return !!data ? data.find((element) => {
      return element.id === id
    }) : data
  }
}

const playlistService = new PlaylistService()

export default playlistService