const express = require('express')
const cors = require('cors')
const authorization = require("./routes/authorization");

const userRouter = require('./routes/users');

const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(authorization)

//routes
app.use('/users', userRouter)


app.listen(4000, 'localhost', ()=>{
    console.log("Server is running on port 4000")
})