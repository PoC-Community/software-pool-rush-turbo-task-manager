import express from 'express'
import connectToDatabase from './database'
import User from './database/models/user'
const app = express()
const port = 3000

connectToDatabase()

app.get('/', (_, res) => {
    res.send('welcome to the turbo tm api')
})

app.post('/new_user', (_, res) => {
    var user = new User()
    user.name = 'saravenpi'
    user.email = 'hello@coucou.fr'
    user.save(error => {
        if (error) {
            res.json(error)
        } else {
            res.send('user created (i hope so)')
        }
    });
})

app.listen(port, () => {
    console.log(`App is listening on port: ${port} 🌵`)
})
