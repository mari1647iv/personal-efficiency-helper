import './ProductivityPlaylists.css';
import React, { useState, useEffect } from 'react';
import playlistService from '../../../services/playlistService';
import Playlist from "./Playlist";

function ProductivityPlaylists() {
  const [playlists, setPlaylists] = useState([])
  const [loading, setLoading] = useState(true)
  const [isPartiallyHidden, setIsPartiallyHidden] = useState(true)

  useEffect(() => {
    setLoading(true)
    let data = playlistService.getPlaylists()
    setPlaylists(data)
    setLoading(false)
  }, [loading, playlists])

  function showHide() {
    setIsPartiallyHidden(!isPartiallyHidden)
  }

  return (
    <div className="playlists-box">
      <h2>PRODUCTIVITY PLAYLISTS</h2>
      {!loading && !!playlists && (
        <ul className="playlists">
          {playlists.slice(0, isPartiallyHidden ? 2 : undefined).map((playlist) => (
            <Playlist playlist={playlist} />
          ))}
        </ul>
      )}
      <div className="show-more" onClick={showHide}>
        <hr />
        <p>{isPartiallyHidden ? "+ more +" : "— less —"}</p>
      </div>
    </div>
  );
}

export default ProductivityPlaylists;