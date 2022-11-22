import './Focus.css';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import TimerBox from './TimerBox/TimerBox';
import ProductivityPlaylists from './ProductivityPlaylists/ProductivityPlaylists';
import { POMODORO_TECHNIQUE } from '../../utils/constants';
import NewPlaylistForm from './NewPlaylistForm/NewPlaylistForm';
import { FocusContext, FocusContextValue } from './FocusContext';
import { PlaylistInterface } from '../../types/types';
import playlistService from '../../services/playlistService';

function Focus() {
  let [isPlaylistForm, setIsPlaylistForm] = useState(false)
  const [playlists, setPlaylists] = useState<PlaylistInterface[] | undefined>(undefined)
  //const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPlaylists() {
      const data = await playlistService.getPlaylists()
      setPlaylists(data)
    }
    //setLoading(true)
    fetchPlaylists()
    //setLoading(false)
  }, [])

  function togglePlaylistForm() {
    setIsPlaylistForm(!isPlaylistForm)
  }

  const value: FocusContextValue = {
    playlists,
    setPlaylists,
    isPlaylistForm,
    togglePlaylistForm
  }

  return (
    <div className="App">
      <FocusContext.Provider value={value}>
        <Header />
        <div className="content-box">
          <main>
            <TimerBox />
          </main>
          <aside>
            <h1>CONCENTRATION<br />TIMER</h1>
            <div className="technique-box">
              <h2>POMODORO TECHNIQUE</h2>
              {POMODORO_TECHNIQUE}
            </div>
            <ProductivityPlaylists />
          </aside>
        </div>

        {isPlaylistForm && (
          <NewPlaylistForm />
        )}
      </FocusContext.Provider>
    </div>
  );
}

export default Focus;