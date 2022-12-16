import express, { Application } from 'express';
const cors = require("cors");
const bodyParser = require("body-parser");
const PlaylistsRouter = require("./routes/playlists.route");

const app: Application = express();
const PORT = 3002;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, resp) => {
  resp.status(200).json({
    title: 'Personal Efficiency Helper API',
    info: 'Build with Node.js, Express, and Postgres',
  })
})

app.use("/playlists", PlaylistsRouter)

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
})
