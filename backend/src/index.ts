import express from 'express'
import cors from 'cors'

import connectToDatabase from './database'
import home from './endpoints/home'
import register from './endpoints/door/register'
import login from './endpoints/door/login'
import create_board from './endpoints/board/create'
import create_task from './endpoints/task/create'
import get_user_data from './endpoints/user/getData'

const app = express()
const port = 4000

app.use(cors())
app.use(express.json());

connectToDatabase()

app.get('/', home)
app.post('/register', register)
app.post('/login', login)
app.post('/create_board', create_board)
app.post('/create_task', create_task)
app.get('/get_user_data', get_user_data)

app.listen(port, () => {
    console.log(`App is listening on port: ${port} 🌵`)
})
