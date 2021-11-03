const path = require('path')
const express = require('express')

const server = express()

module.exports = server

server.use(express.static(path.join(__dirname, 'public')))

server.get('*', (req, res) => {
    const appPath = path.join(__dirname, 'public', 'index.html')
    res.sendFile(appPath)
})