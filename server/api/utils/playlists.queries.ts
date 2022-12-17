export const createPlaylistsTable = `
  DROP TABLE IF EXISTS playlists;
  CREATE TABLE IF NOT EXISTS playlists (
    _id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    duration VARCHAR(15) NOT NULL
  );
`;

export const insertPlaylists = `
  INSERT INTO playlists (name, url, duration)
  VALUES 
         ('Lo-Fi для работы и учёбы', 'https://music.yandex.ru/users/music-blog/playlists/2620', '2 : 22 : 00'),
         ('c o f f e e ☕️ [morning lofi mix to listen while drink coffee]', 'https://www.youtube.com/watch?v=JCaR6hHnM3U&list=PL3Rp4H5bk4_qV2ZjUrc-C8BZhv9UdZL5F&index=22&t=251s', '1 : 09 : 07'),
         ('Прогулка наедине с собой', 'https://music.yandex.ru/users/music-blog/playlists/1687', '2 : 57 : 00');
`;

export const dropPlaylistsTable = 'DROP TABLE playlists';
