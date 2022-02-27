require('dotenv').config();

const express = require('express');
const app = express(); // function handler to supply to an HTTP server
const http = require('http');
const server = http.createServer(app); // supplying that function handler to the HTTP server
const {Server} = require('socket.io');
const io = new Server(server); // initialized by passing in server object

app.get('/', (req, res) => { // route handler for home page
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => { // connection handler
    console.log('a user connected');

    socket.on('chat message', (msg) => { // chat message handler
        console.log('message: ' + msg);
        io.emit('chat message', msg); // broadcast the message
    });

    socket.on('disconnect', () => { // disconnect handler
        console.log('user disconnected');
    })
});

server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});

