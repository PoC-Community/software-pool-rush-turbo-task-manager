import express from 'express'
const app = express()
const port = 3000

app.get('/', (_, res) => {
    res.send('welcome to the turbo tm api')
})

app.listen(port, () => {
    console.log(`App is listening on port: ${port} 🌵`)
})
