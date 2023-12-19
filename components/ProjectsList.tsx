import {default as style} from "./ProjectsList.module.css"
import {LinkPanel} from "./LinkPanel"
import {faBook, faCodeFork} from "@fortawesome/free-solid-svg-icons"


export type ProjectsListProps = {
    repos: any[]
}


export function ProjectsList({repos}: ProjectsListProps) {
    return (
        <div className={style.projectsList}>
            {repos.map((repo) => <LinkPanel
                icon={repo.fork ? faCodeFork : faBook}
                text={repo.name}
                description={repo.description}
                href={repo.html_url}
                fade={repo.archived}
                extraBtm={repo.stargazers_count == 0 ? null : `${repo.stargazers_count} ★`}/>
            )}
            <noscript>
                The list of projects cannot be loaded, as JavaScript is disabled.
            </noscript>
        </div>
    )
}
