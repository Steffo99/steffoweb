import * as React from "react"
import * as ReactDOM from "react-dom"
import {Anchor} from "@steffo/bluelib-react"
import Style from "./MoreProjects.module.css"


export function MoreProjects({user}) {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)

    const fetchData = React.useCallback(
        () => {
            fetch(`https://api.github.com/users/${user}`)
            .then(r => r.json())
            .then(d => setData(d))
            .catch(e => setError(e))
        },
        [user, setData, setError]
    )

    React.useEffect(
        () => {
            fetchData()
        },
        [fetchData]
    )

    const contents = React.useMemo(
        () => {
            if(data === null) return "Loading..."
            else if(error !== null) return "Error: {error}"
            return `...and ${data["public_repos"]} more!`
        },
        [data, error]
    )

    return (
        <div className={Style.More}>
            <Anchor href={"https://github.com/Steffo99?tab=repositories"}>{contents}</Anchor>
        </div>
    )
}
