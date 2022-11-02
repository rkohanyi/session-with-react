import express from 'express'
import session from 'express-session'

var app = express()

//app.set('trust proxy', 1) // trust first proxy

app.use(express.json())
app.use((req, res, next) => {
    console.log('REQ', req.url);
    next();
})
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

app.get('/no-need-for-login', (req, res) => {
    res.send('<h1>Everyone can see this</h1>')
})

app.get('/login-needed', (req, res) => {
    if (!req.session.username) {
        res.send(401)
    } else {
        res.send(`<h1>Only logged in user (${req.session.username}) can see this</h1>`)
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

app.listen(5000, () => console.log('http://localhost:5000'))
