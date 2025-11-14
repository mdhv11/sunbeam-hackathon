const express = require('express')
const cors = require('cors')

const app = express

app.request('cors')


app.listen(4000, 'localhost', ()=>{
    console.log("Server is running on port 4000")
})