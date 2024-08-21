const express = require('express')
const { Authentication } = require('./routes')
const { ConnectDB } = require('./config/db')
const morgan = require('morgan')

const app = express()

//middlewares
app.use(morgan('dev'))

const port = 3001
ConnectDB()

app.get('/', (req, res) => {
  res.send('kry')
})
//route
app.use('/api/v1',Authentication)

app.listen(port, ()=>{
  console.log(`app listen in localhost: ${port}`)
})