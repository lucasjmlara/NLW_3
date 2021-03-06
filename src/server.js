const express = require('express');
const path = require('path')
const pages = require('./pages.js')

const server = express();

server
.use(express.urlencoded({ extended: true}))
.use(express.static('public'))
.set('views', path.join(__dirname,'views'))
.set('view engine', 'hbs')
.get('/', pages.index)
.get('/orfanato', pages.orfanato)
.get('/orfanatos', pages.orfanatos)
.get('/create-orfanato', pages.create_orfanato)
.post('/save-orfanato', pages.saveOrfanato)

server.listen(5500);