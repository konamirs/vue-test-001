const express = require('express')
const { Authentication } = require('./routes')
const { ConnectDB } = require('./config/db')
const morgan = require('morgan')
const { errorConverter, errorHandler } = require('./middlewares/error')
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

const port = 3001
ConnectDB()

app.get('/', (req, res) => {
  res.send('kry')
})
//route
app.use('/api/v1',Authentication)

//send back a 404 error for any unknown api request
app.use((req, res, next)=>{
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'))
})

//convert error to apiError, if needed
app.use(errorConverter)

//handle error
app.use(errorHandler)

app.listen(port, ()=>{
  console.log(`app listen in localhost: ${port}`)
})