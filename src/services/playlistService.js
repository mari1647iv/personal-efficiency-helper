import axios from 'axios';

class PlaylistService {
  API_ENDPOINT = 'http://localhost:3002'

  PLAYLISTS = [
    {
      id: 0,
      name: 'Lo-Fi для работы и учёбы',
      url: 'https://music.yandex.ru/users/music-blog/playlists/2620',
      duration: '2:22:00'
    },
    {
      id: 1,
      name: 'Lo-Fi & OSTs playlist',
      url: 'https://www.youtube.com/watch?v=CZPul4k9bUU&list=PL3Rp4H5bk4_qV2ZjUrc-C8BZhv9UdZL5F',
      duration: '23:20:17'
    },
    {
      id: 2,
      name: 'c o f f e e ☕️ [morning lofi mix to listen while drink coffee]',
      url: 'https://www.youtube.com/watch?v=JCaR6hHnM3U&list=PL3Rp4H5bk4_qV2ZjUrc-C8BZhv9UdZL5F&index=22&t=251s',
      duration: '1:09:07'
    },
    {
      id: 3,
      name: 'Fullmetal Alchemist Beautiful Music | Best Anime OST',
      url: 'https://www.youtube.com/watch?v=CZPul4k9bUU&list=PL3Rp4H5bk4_qV2ZjUrc-C8BZhv9UdZL5F&index=1&t=5s',
      duration: '24:31'
    },
    {
      id: 4,
      name: 'Прогулка наедине с собой',
      url: 'https://music.yandex.ru/users/music-blog/playlists/1687',
      duration: '2:57:00'
    },
    {
      id: 5,
      name: 'FullMetal Alchemist Brotherhood - lofi hip hop mix 1 HOUR EDITION',
      url: 'https://www.youtube.com/watch?v=O4y5ScLPQ0Q&list=PL3Rp4H5bk4_qV2ZjUrc-C8BZhv9UdZL5F&index=6&t=927s',
      duration: '59:58'
    }
  ]

  async getPlaylists() {
    let resp = await axios.get("http://localhost:3002/playlists")
    const data = resp.data.data.playlists
    console.log(data)
    return data
  }

  getPlaylistById(id) {
    return this.PLAYLISTS.find((element) => {
      return element.id === id
    })
  }
}

const playlistService = new PlaylistService()

export default playlistService