import React from "react"


export function useGitHubRepositories(user: string) {
    const [data, setData] = React.useState<any[]>([])

    const load = React.useCallback(
        async () => {
            if(data.length > 0) return
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
        [data]
    )

    return {data, load}
}