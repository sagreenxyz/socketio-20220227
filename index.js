const express = require('express');
const app = express(); // function handler to supply to an HTTP server
const http = require('http');
const server = http.createServer(app); // supplying that function handler to the HTTP server

app.get('/', (req, res) => { // route handler for home page
    res.sendFile(__dirname + '/index.html');
});

server.listen(3001, () => {
    console.log('listening on *:3001');
});

