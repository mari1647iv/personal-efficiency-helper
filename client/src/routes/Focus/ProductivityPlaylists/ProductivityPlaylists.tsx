import './ProductivityPlaylists.css';
import React, { useState, useEffect } from 'react';
import playlistService from '../../../services/playlistService';
import Playlist from "./Playlist";
import { PlaylistInterface } from '../../../types/types';

function ProductivityPlaylists() {
  const [playlists, setPlaylists] = useState<PlaylistInterface[] | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [isPartiallyHidden, setIsPartiallyHidden] = useState(true)

  useEffect(() => {
    async function fetchPlaylists() {
      const data = await playlistService.getPlaylists()
      setPlaylists(data)
    }
    setLoading(true)
    fetchPlaylists()
    setLoading(false)
  }, [])

  function showHide() {
    setIsPartiallyHidden(!isPartiallyHidden)
  }

  return (
    <div className="playlists-box">
      <h2>PRODUCTIVITY PLAYLISTS</h2>
      {!loading && !!playlists && (
        <ul className="playlists">
          {playlists.slice(0, isPartiallyHidden ? 2 : undefined).map((playlist) => (
            <Playlist playlist={playlist} key={playlist.id} />
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