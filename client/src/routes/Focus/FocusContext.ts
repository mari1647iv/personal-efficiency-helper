import { createContext } from "react";
import { PlaylistInterface } from "../../types/types";

export interface FocusContextValue {
  playlists: PlaylistInterface[] | undefined,
  setPlaylists: (value: PlaylistInterface[] | undefined) => void,
  isPlaylistForm: boolean,
  togglePlaylistForm: () => void
}

export const FocusContext = createContext<FocusContextValue | null>(null);