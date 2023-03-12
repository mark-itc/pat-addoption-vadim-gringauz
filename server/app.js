require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { initDB } = require('./models/init')
const port = process.env.PORT

initDB()
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: process.env.CLIENT, credentials: true }))

const userRoute = require('./routes/userRouter')
const petRoute = require('./routes/petRouter')
const adminRoute = require('./routes/adminRouter')

app.use('/user', userRoute)
app.use('/pet', petRoute)
app.use('/admin', adminRoute)

app.listen(port, () => {
  console.log(`🟢 Server is running on port ${port}`)
})
