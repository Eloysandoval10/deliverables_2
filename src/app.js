const express = require('express')
const cors = require('cors')

const moviesRouter = require('./movies/movies.router')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'server ok'})
})

module.exports = app

app.use('/', moviesRouter)

app.listen(() => {
    console.log('server started at port')
})