import '../Focus.css';
import React from 'react';
import { Music, Play } from 'react-feather';

function ProductivityPlaylists() {
  return (
    <div className="playlists-box">
      <h2>PRODUCTIVITY PLAYLISTS</h2>
      <ul className="playlists">
        <li className="playlist">
          <Music size={36} strokeWidth="1px" />
          <div>
            <h3>Fullmetal Alchemist OST lo-fi music</h3>
            <div className="playlist-info">
              <p>40 : 37</p>
              <p>youtube.com</p>
            </div>
          </div>
          <a href="https://youtube.com"><Play size={30} strokeWidth="0.5px" /></a>
        </li>
        <li className="playlist">
          <Music size={36} strokeWidth="1px" />
          <div>
            <h3>Fullmetal Alchemist OST lo-fi music</h3>
            <div className="playlist-info">
              <p>40 : 37</p>
              <p>youtube.com</p>
            </div>
          </div>
          <a href="https://youtube.com"><Play size={30} strokeWidth="0.5px" /></a>
        </li>
      </ul>
      <div className="show-more">
        <hr />
        <p>+ more</p>
      </div>
    </div>
  );
}

export default ProductivityPlaylists;