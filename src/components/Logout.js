function Logout({ onLogout }) {
    async function handleLogout() {
        try {
            const response = await fetch('/logout', {
                method: 'POST',
            })
            if (response.ok) {
                onLogout()
            } else {
                onLogout(response.statusText)
            }
        } catch (error) {
            onLogout(error)
        }
    }

    return <div>
        <h1>Logout</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
}

export default Logout
