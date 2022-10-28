import { useState } from "react"

function Login() {
    const [username, setUsername] = useState('joe')
    const [password, setPassword] = useState('joe')

    async function handleLogin() {
        await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        })
        alert('Successful login!')
    }

    return <>
        Username: <input onChange={(e) => setUsername(e.target.value)} value={username} />
        <br />
        Password: <input onChange={(e) => setPassword(e.target.value)} value={password} />
        <br />
        <button onClick={handleLogin}>Login</button>
    </>
}

export default Login
