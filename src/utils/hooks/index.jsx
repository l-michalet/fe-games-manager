import {useState, useEffect, useContext} from 'react'
import {ThemeContext} from "../context";

export function useFetch(url) {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) {
            console.log("NOT URL")
            return setLoading(true)
        }

        async function fetchData() {
            try {
                const response = await fetch(url)
                console.log("Response")
                console.log(response)
                const data = await response.json()
                console.log("Data")
                console.log(data)
                setData(data)
            } catch (err) {
                console.log("Error")
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    console.log("useEffect")
    return { isLoading, data, error }
}

export function useTheme() {
    console.log("useTheme")
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
}