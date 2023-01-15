import {useState, useEffect, useContext} from 'react'
import {ThemeContext} from "../context";

export function useFetch(url, method = "GET", body) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!url) {
            console.log("NOT URL")
            return setIsLoading(true)
        }

        async function fetchData() {
            try {
                const options = {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }

                if (method === "POST") {
                    options.body = JSON.stringify(body)
                    options.headers['Content-Type'] = 'application/json'
                }

                console.log(method)
                const response = await fetch(url, options)
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json()
                setData(data)
            } catch (err) {
                setError(err.message)
                console.log(err.message)
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { isLoading, error, data };
}

export function useTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
}

export function useCreateTournament() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const createTournament = async (body) => {
        try {
            setIsLoading(true);
            setError(null);
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            }
            const timeout = setTimeout(() => {
                setIsLoading(false);
                setError("The request timed out. Please try again later.");
            }, 5000); // timeout after 5 seconds
            const response = await fetch(`http://localhost:8080/tournament`, options);
            clearTimeout(timeout);
            const data = await response.json();
            setData(data);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setError(err.message);
        }
        return error;
    };
    return { isLoading, error, data, createTournament };
}
