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

/* 

● Important points to note
o This is web based application.
 User should be able to do registration / login / logout.
 Add 10 movies (fixed) into database.
 Review can be created only for movies in database.
 User can only share/edit his own reviews. He cannot share a review with himself.
 Validate all input fields as appropriate.
 User/review id for new user/review should be auto-generated.
 When a review is deleted by a user, it should also be removed from user shares
*/