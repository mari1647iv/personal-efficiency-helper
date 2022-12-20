require('dotenv').config()
import express, { Application } from 'express';
const cors = require("cors");
const bodyParser = require("body-parser");
const PlaylistsRouter = require("./routes/playlists.route");

const PORT = 3002;
const corsOptions = {
  origin: 'http://localhost:3000'
}

const app: Application = express();
app.disable("x-powered-by");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions))

app.get('/', (req, resp) => {
  resp.status(200).json({
    title: 'Personal Efficiency Helper API'
  })
})

app.use("/playlists", PlaylistsRouter)

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
})
