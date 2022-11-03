import { useState } from "react"

function Login({onLogin}) {
    const [username, setUsername] = useState('joe')
    const [password, setPassword] = useState('joe')

    async function handleLogin() {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password,
                })
            })
            if (response.ok) {
                onLogin()
            } else {
                onLogin(response.statusText)
            }
        } catch (error) {
            onLogin(error)
        }
    }

    return <div>
        <h1>Login</h1>
        Username: <input onChange={(e) => setUsername(e.target.value)} value={username} />
        <br />
        Password: <input onChange={(e) => setPassword(e.target.value)} value={password} />
        <br />
        <button onClick={handleLogin}>Login</button>
    </div>
}

export default Login
