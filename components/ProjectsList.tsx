import {default as style} from "./ProjectsList.module.css"
import {useGitHubRepositories} from "../hooks/useGitHubRepositories"
import {LinkPanel} from "./LinkPanel"
import {faBook, faCodeFork} from "@fortawesome/free-solid-svg-icons"


export function ProjectsList() {
    const repos = useGitHubRepositories("Steffo99")

    return <div className={style.projectsList}>
        {repos.map((repo) => <LinkPanel
            icon={repo.fork ? faCodeFork : faBook}
            text={repo.name}
            description={repo.description}
            href={repo.html_url}
            fade={repo.archived}
            extraBtm={repo.stargazers_count == 0 ? null : `${repo.stargazers_count} ★`}/>
        )}
    </div>
}
