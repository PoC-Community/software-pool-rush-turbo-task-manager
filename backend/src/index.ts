import express from 'express'
import cors from 'cors'
import connectToDatabase from './database'

import home from './endpoints/home'
import register from './endpoints/register'
import login from './endpoints/login'

const app = express()
const port = 4000

app.use(cors())
app.use(express.json());
connectToDatabase()

app.get('/', home)
app.post('/register', register)
app.post('/login', login)

app.listen(port, () => {
    console.log(`App is listening on port: ${port} 🌵`)
})
