import React from 'react';
import './Playlist.css';
import { Youtube, Music, Play } from 'react-feather';
import getUrlSource from '../../../utils/getUrlSource';
import { ReactComponent as YaMusic } from '../../../assets/img/ya-music-icon-black.svg';
import { PlaylistInterface } from '../../../types/types';

function Playlist(props: { playlist: PlaylistInterface }) {
  const { playlist } = props

  function getIcon(src: string) {
    switch (src) {
      case 'youtube.com': return (<Youtube size={36} strokeWidth="1px" />)
      case 'music.yandex.ru': return (<YaMusic className="ya-music-icon" />)
      default: return (<Music size={36} strokeWidth="1px" />)
    }
  }

  return (
    <li className="playlist" >
      {getIcon(getUrlSource(playlist.url))}
      <div>
        <h3 className="ticker">{playlist.name}</h3>
        <div className="playlist-info">
          <p>{playlist.duration}</p>
          <p>{getUrlSource(playlist.url)}</p>
        </div>
      </div>
      <a href={playlist.url}><Play size={30} strokeWidth="0.5px" /></a>
    </li>
  );
}

export default Playlist;