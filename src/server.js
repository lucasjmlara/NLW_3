const express = require('express');
const path = require('path')
const server = express();

server
.use(express.static('public'))
.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname,'views', 'index.html'))
})

server.listen(5500);