import * as React from "react"
import {Panel, Anchor} from "@steffo/bluelib-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Style from "./Project.module.css"
import { faStar } from "@fortawesome/free-solid-svg-icons"


export function Project({user, repo}) {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)

    const fetchData = React.useCallback(
        () => {
            fetch(`https://api.github.com/repos/${user}/${repo}`)
                .then(r => r.json())
                .then(d => setData(d))
                .catch(e => setError(e))
        },
        [user, repo, setData, setError]
    )

    React.useEffect(
        () => {
            fetchData()
        },
        [fetchData]
    )

    const color = React.useMemo(
        () => {
            if(data === null) {
                return "color-yellow"
            }
            else if(error !== null) {
                return "color-red"
            }
            else {
                return ""
            }
        },
        [data, error]
    )

    const info = React.useMemo(
        () => {
            if(data === null) return (
                <div className={Style.Description}>Loading...</div>
            )
            else if(error !== null) return (
                <div className={Style.Description}>Error: {error}</div>
            )

            return <>
                <div className={Style.Description}>
                    {data["description"]}
                </div>
                <div className={Style.Stars}>
                    <FontAwesomeIcon icon={faStar}/> {data["stargazers_count"]}
                </div>
            </>
        },
        [data, error]
    )

    return (
        <Panel className={Style.Project} bluelibClassNames={color}>
            <div className={Style.Title}>
                <Anchor href={`https://github.com/${user}/${repo}`}>
                    {repo}
                </Anchor>
            </div>
            {info}
        </Panel>
    )
}
