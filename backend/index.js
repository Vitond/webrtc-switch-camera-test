const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on("message", message => {
    console.log('MESSAGE')
    socket.broadcast.emit("message", message);
  })
  socket.on("disconnect", () => {
    console.log('a user disconnected');
  })
});

server.listen(3050, () => {
  console.log('listening on *:3050');
});