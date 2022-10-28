import { useState } from "react"

export default function Login() {
    const [username, setUsername] = useState('joe')
    const [password, setPassword] = useState('joe')

    async function handleLogin() {
        const resp = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        })
        const msg = await resp.text()
        if ( msg === 'ok') {
            alert('Successful login!')
        } else if ( msg == 'Wrong username or password') {
            alert('Unsuccessful login! 😕')
        }
        
    }

    async function handleLogout() {
        const resp = await fetch('/logout', {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify({
            //     username,
            //     password,
            })
        const msg = await resp.text()
        if ( msg === 'ok') {
            alert('Successful logout!')
        } else {
            alert('Cannot log out! 😕')
        }
        
    }

    return <>
        Username: <input onChange={(e) => setUsername(e.target.value)} value={username} />
        <br />
        Password: <input onChange={(e) => setPassword(e.target.value)} value={password} />
        <br />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
    </>
}
