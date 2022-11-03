import { useEffect, useState } from "react"

function NoLoginNeeded() {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function getData() {
            const response = await fetch('/no-login-needed')
            setData(await response.json())
        }
        getData()
    }, [])

    if (data) {
        return <div>
            <h1>NoLoginNeeded</h1>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    }
    return <div>
        <h1>NoLoginNeeded</h1>
        <p>Loading...</p>
    </div>
}

export default NoLoginNeeded
