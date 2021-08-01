
const express = require('express')
const dotenv=require('dotenv')
var cors = require("cors")
const connectDB = require('./config/db')
const userRoutes = require("./routes/userRoutes")
const noteRoutes = require("./routes/noteRoutes")
const errorMiddleware = require('./middlewares/errorMiddleware')

const app = express()
dotenv.config()
connectDB()


app.use(cors())

app.use(express.json());



/*app.get('/api/notes/:id', (req, res) => {
    
    const note = notes.find(el => el._id === req.params.id)
    res.send(note)
})*/


app.use('/api/users', userRoutes)
app.use('/api/notes', noteRoutes)


app.use(errorMiddleware)

const PORT=process.env.PORT || 4000

app.listen(PORT,console.log(`server is runing on port ${PORT}`))