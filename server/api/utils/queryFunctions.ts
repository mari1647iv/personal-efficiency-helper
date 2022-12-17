import pool from "../../db/database";
import {
  insertPlaylists,
  dropPlaylistsTable,
  createPlaylistsTable,
} from './playlists.queries';

export const executeQueryArray = async (arr: any) => new Promise<void>(resolve => {
  const stop = arr.length;
  arr.forEach(async (q: string, index: number) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([dropPlaylistsTable]);
export const createTables = () => executeQueryArray([createPlaylistsTable]);
export const insertIntoTables = () => executeQueryArray([insertPlaylists]);