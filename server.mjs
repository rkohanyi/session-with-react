import express from 'express'
import session from 'express-session'
import path from 'path'
import { fileURLToPath } from 'url';

// In my current node version (14.18.1) __dirname is not yet available.
// I'll upgrade it soon.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.json())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  // https://github.com/expressjs/session#saveuninitialized
  saveUninitialized: false,
  // https://github.com/expressjs/session/issues/837
  cookie: { secure: false }
}))

// HTML, JS, JPG, etc file requests will be served using
// the build folder. 
app.use(express.static(path.join(__dirname, "build")));

// The landing page will be served by the static middleware.
// app.get('/', (req, res) => { })

app.get('/no-need-for-login', (req, res) => {
    res.send('<h1>Everyone can see this</h1>')
})

app.get('/login-needed', (req, res) => {
    if (!req.session.username) {
        res.status(401).send('Login needed')
    } else {
        res.send(`<h1>Only logged in user (${req.session.username}) can see this</h1>`)
    }
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    if (username === 'joe' && password === 'joe') {
        // This session change triggers the session creation
        req.session.username = username
        res.status(200).send('ok')
    } else {
        res.status(401).send('Wrong username or password')
    }
})

app.delete('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy()
        res.status(200).send('ok')
    }
    res.end()
})

app.listen(5000, () => console.log('http://localhost:5000'))
