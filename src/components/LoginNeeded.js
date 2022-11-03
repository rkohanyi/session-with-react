import { useEffect, useState } from "react"

function LoginNeeded() {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function getData() {
            const response = await fetch('/login-needed')
            setData(await response.json())
        }
        getData()
    }, [])

    if (data) {
        return <div>
            <h1>LoginNeeded</h1>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    }
    return <div>
        <h1>LoginNeeded</h1>
        <p>Loading...</p>
    </div>
}

export default LoginNeeded
