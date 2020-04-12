const express = require('express')
const path = require('path')
const open = require('open')
const app = express()

const port = 5000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(5000, (err) => {
    if (err) { throw err }
    console.log(`Running on port: ${port}`)
    open('http://localhost:' + port)


})