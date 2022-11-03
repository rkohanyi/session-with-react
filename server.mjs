import express from 'express'
import session from 'express-session'

const app = express()
app.use(express.json())
app.use(session({
    secret: 'keyboard cat'
}))

app.get('/no-login-needed', (req, res) => {
    res.send({
        message: 'Hello, World!',
    })
})

app.get('/login-needed', (req, res) => {
    if (!req.session.username) {
        res.send(401)
    } else {
        res.json({
            message: `Only ${req.session.username} can see this!`
        })
    }
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    if (username === 'joe' && password === 'joe') {
        req.session.username = username
        res.send(200)
    } else {
        res.send(401)
    }
})

app.post('/logout', (req, res) => {
    if (req.session.username) {
        req.session.destroy()
        res.send(200)
    } else {
        res.send(401)
    }
})

app.listen(5000, () => console.log('http://localhost:5000'))
