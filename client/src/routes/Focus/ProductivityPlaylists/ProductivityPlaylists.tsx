import './ProductivityPlaylists.css';
import React, { useState, useContext } from 'react';
import Playlist from "./Playlist";
import { Plus } from 'react-feather';
import Button from '../../../components/Button/Button';
import { FocusContext } from '../FocusContext';

function ProductivityPlaylists() {
  const [isPartiallyHidden, setIsPartiallyHidden] = useState(true)
  const { playlists, togglePlaylistForm } = useContext(FocusContext)!;

  function showHide() {
    setIsPartiallyHidden(!isPartiallyHidden)
  }

  return (
    <div className="playlists-box">
      <div className="playlists-header">
        <h2>PRODUCTIVITY PLAYLISTS</h2>
        <Button variant="icon" onClick={() => togglePlaylistForm()}>
          <Plus size={40} strokeWidth="1px" />
        </Button>
      </div>
      {!!playlists && (
        <ul className="playlists">
          {playlists.slice(0, isPartiallyHidden ? 2 : undefined).map((playlist) => (
            <Playlist playlist={playlist} key={playlist._id} />
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