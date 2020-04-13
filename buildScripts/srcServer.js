import express from 'express';
import { join } from 'path';
import open from 'open';
import webpack from 'webpack'
import config from '../webpack.config.dev.js'
const app = express()
const compiler = webpack(config)

const port = 5000;
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../src/index.html'))
})

app.listen(5000, (err) => {
    if (err) { throw err }
    console.log(`Running on port: ${port}`)
    open('http://localhost:' + port)


})