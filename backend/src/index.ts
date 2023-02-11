import express from 'express'
import connectToDatabase from './database'

import home from './endpoints/home'
import register from './endpoints/register'

const app = express()
const port = 4000

app.use(express.json());
connectToDatabase()

app.get('/', home)
app.post('/register', register)

app.listen(port, () => {
    console.log(`App is listening on port: ${port} 🌵`)
})
