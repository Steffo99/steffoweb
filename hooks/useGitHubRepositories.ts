import React from "react"


export function useGitHubRepositories(user: string) {
    const [data, setData] = React.useState<any[]>([])

    const fetchData = React.useCallback(
        async () => {
            setData([])
            let page = 1;
            let count = 100;
            while(count == 100) {
                const resp = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&page=${page}&sort=pushed&direction=desc`)
                const data = await resp.json()
                count = data.length
                page += 1
                setData((old) => [...old, ...data])
            }
        },
        []
    )

    React.useEffect(
        () => {
            // noinspection JSIgnoredPromiseFromCall
            fetchData()
        },
        [fetchData]
    )

    return data
}