CREATE DATABASE pef-db;

CREATE TABLE playlists (
  _id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  duration VARCHAR(15) NOT NULL
);

INSERT INTO playlists (name, url, duration)
  VALUES ('Lo-Fi для работы и учёбы', 'https://music.yandex.ru/users/music-blog/playlists/2620', '2 : 22 : 00'), ('Lo-Fi & OSTs playlist', 'https://www.youtube.com/watch?v=CZPul4k9bUU&list=PL3Rp4H5bk4_qV2ZjUrc-C8BZhv9UdZL5F', '23 : 20 : 17'), ('c o f f e e ☕️ [morning lofi mix to listen while drink coffee]', 'https://www.youtube.com/watch?v=JCaR6hHnM3U&list=PL3Rp4H5bk4_qV2ZjUrc-C8BZhv9UdZL5F&index=22&t=251s', '1 : 09 : 07'), ('Fullmetal Alchemist Beautiful Music | Best Anime OST', 'https://www.youtube.com/watch?v=CZPul4k9bUU&list=PL3Rp4H5bk4_qV2ZjUrc-C8BZhv9UdZL5F&index=1&t=5s', '24 : 31'), ('Прогулка наедине с собой', 'https://music.yandex.ru/users/music-blog/playlists/1687', '2 : 57 : 00'), ('FullMetal Alchemist Brotherhood - lofi hip hop mix 1 HOUR EDITION', 'https://www.youtube.com/watch?v=O4y5ScLPQ0Q&list=PL3Rp4H5bk4_qV2ZjUrc-C8BZhv9UdZL5F&index=6&t=927s' '59 : 58');

SELECT * FROM playlists;

SELECT * FROM playlists WHERE _id = 2;

UPDATE playlists
SET name = "Updated Name"
WHERE _id = 2;

DELETE FROM playlists WHERE _id = 2;