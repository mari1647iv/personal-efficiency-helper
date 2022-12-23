import pool from "../../db/database";
import {
  insertPlaylists,
  dropPlaylistsTable,
  createPlaylistsTable,
} from '../queries/playlists.queries';
import {
  insertTodos,
  dropTodosTable,
  createTodosTable,
} from '../queries/todos.queries';

export const executeQueryArray = async (arr: any) => new Promise<void>(resolve => {
  const stop = arr.length;
  arr.forEach(async (q: string, index: number) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([dropPlaylistsTable, dropTodosTable]);
export const createTables = () => executeQueryArray([createPlaylistsTable, createTodosTable]);
export const insertIntoTables = () => executeQueryArray([insertPlaylists, insertTodos]);