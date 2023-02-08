require('dotenv').config()
const express = require('express')


const app = express()


app.listen(3005, async () => {
    console.log('Server is running on port 3005')
  })