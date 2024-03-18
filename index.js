const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { ExpressPeerServer } = require("peer");


dotenv.config();

const port = process.env.PORT;

const app = express();

const server = app.listen(port);

const peerServer = ExpressPeerServer(server, {
	path: "/peer",
});

app.use("/peerjs", peerServer);

app.use(express.json());
app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('main.ejs');
});

peerServer.on('connection', (client) => {
  console.log(client)
});


