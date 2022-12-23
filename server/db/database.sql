CREATE DATABASE pef-db;

DROP IF EXISTS playlists;
DROP IF EXISTS hacks;
DROP IF EXISTS todos;

CREATE TABLE playlists (
  _id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  duration VARCHAR(15) NOT NULL
);

INSERT INTO playlists (name, url, duration)
  VALUES ('Lo-Fi для работы и учёбы', 'https://music.yandex.ru/users/music-blog/playlists/2620', '2 : 22 : 00'),
         ('c o f f e e ☕️ [morning lofi mix to listen while drink coffee]', 'https://www.youtube.com/watch?v=JCaR6hHnM3U&list=PL3Rp4H5bk4_qV2ZjUrc-C8BZhv9UdZL5F&index=22&t=251s', '1 : 09 : 07'),
         ('Прогулка наедине с собой', 'https://music.yandex.ru/users/music-blog/playlists/1687', '2 : 57 : 00');

SELECT * FROM playlists WHERE rownum <= 100;

SELECT * FROM playlists WHERE _id = 2;

UPDATE playlists
SET name = "Updated Name"
WHERE _id = 2;

DELETE FROM playlists WHERE _id = 2;

CREATE TABLE todos {
  _id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(1023),
  date DATETIME NOT NULL,
  isImportant BOOLEAN NOT NULL,
  state VARCHAR(15) NOT NULL,
  type VARCHAR(15) NOT NULL,
  userpoints NUMBER
};

INSERT INTO todos (name, description, date, isImportant, state, type, userpoints)
  VALUES 
         ('Example ToDo', 'Something about', TO_TIMESTAMP(${Date.now() / 1000}), true, 'in progress', 'ordinary', 2);

SELECT * FROM todos WHERE rownum <= 100;

SELECT * FROM todos WHERE _id = 2;

UPDATE todos 
SET description = "New information"
WHERE _id = 2;

DELETE FROM todos WHERE _id = 2;

CREATE TABLE hacks (
  _id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(1023) NOT NULL
);