import axios from 'axios';
import { PlaylistDataInterface, PlaylistInterface } from '../types/types';

class PlaylistService {
  API_ENDPOINT = 'http://localhost:3002'

  async getPlaylists() {
    let resp = await axios.get(`${this.API_ENDPOINT}/playlists`)
    console.log(resp)
    const data: (PlaylistInterface[] | undefined) = resp.data
    console.log(data)
    return data
  }

  async getPlaylistById(id: number) {
    let resp = await axios.get(`${this.API_ENDPOINT}/playlists`)
    const data: (PlaylistInterface[] | undefined) = resp.data
    console.log(data)
    return !!data ? data.find((element) => {
      return element._id === id
    }) : data
  }

  async addPlaylist(playlistData: PlaylistDataInterface) {
    let resp = await axios.post(`${this.API_ENDPOINT}/playlists`, playlistData)
    return resp.data
  }

  async deletePlaylist(playlistID: number) {
    let resp = await axios.delete(`${this.API_ENDPOINT}/playlists/${playlistID}`)
    return resp.data
  }
}

const playlistService = new PlaylistService()

export default playlistService