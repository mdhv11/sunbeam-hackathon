const express = require('express')
const cors = require('cors')
const authorization = require("./routes/authorization");

const userRouter = require('./routes/users');
const reviewRouter = require('./routes/reviews');
const shareRouter = require('./routes/share');

const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(authorization)

//routes
app.use('/', userRouter)
app.use('/reviews', reviewRouter)
app.use('/share', shareRouter)


app.listen(4000, 'localhost', ()=>{
    console.log("Server is running on port 4000")
})