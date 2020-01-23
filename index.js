const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

dotenv.config()


mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db')
)

const authRoute = require('./routes/auth')
const postsRoute = require('./routes/posts')

app.use(cors())
app.use(express.json())

app.use('/api/user', authRoute)
app.use('/api/posts', postsRoute)

app.listen(3000, () => console.log('server up and running'))