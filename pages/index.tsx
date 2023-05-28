import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useRouter} from "next/router"
import React from 'react'
import type {NextPage} from "next"
import {default as Link} from "next/link"
import {faMastodon, faGithub, faDiscord, faSteam, faItchIo, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons"
import {faBorderAll, faEnvelope, faGlobe, faUser, faPlus, faCashRegister, faShieldAlt, faDiagramProject, faPaintRoller, faBookAtlas, faGamepad, faPaintbrush, faCog, faFloppyDisk, faScissors} from "@fortawesome/free-solid-svg-icons"
import {LinkPanel} from "../components/LinkPanel"
import {useKonamiCode} from "../hooks/useKonamiCode"


const Index: NextPage = () => {
    const router = useRouter()

    useKonamiCode(() => router.push("/garasauto"))

    return <>
        <div className={"chapter-1"}>
            <section className={"panel box"} id={"panel-about"}>
                <h3>
                    About me
                </h3>
                <p>
                    I'm <dfn>Stefano Pigozzi</dfn>, an Italian Computer Science graduate and <b>Master's student</b> at <Link href={"https://www.unimore.it/"}>Unimore</Link>!
                </p>
                <p>
                    I'm interested in improving the interactions between people via technology.
                </p>
                <p>
                    For that reason, I enjoy using, exploring, studying and developing:
                </p>
                <ul>
                    <li>social applications;</li>
                    <li>chat applications and automations;</li>
                    <li>multiplayer videogames;</li>
                    <li>game tournaments;</li>
                    <li>websites;</li>
                    <li>online communities;</li>
                    <li>and Internet protocols in general!</li>
                </ul>
                <p>
                    I'm also an advocate of the <a href={"https://fsfe.org/freesoftware/freesoftware.en.html"}>free software movement</a>, and try to release everything I make under a free software license.
                </p>
            </section>
        </div>
        <div className={"chapter-2"}>
            <section className={"panel box"} id={"panel-projects"}>
                <h3>
                    My projects
                </h3>
                <p>
                    Often, while experimenting with a new technology, I notice something that can be improved, and I try to come up with a solution to it.
                </p>
                <p>
                    Over time, I've created lots of small projects, some which have succeeded, and some which have unfortunately failed <small>(or have been abandoned due to a lack of time)</small>.
                </p>
                <hr className={"float-bottom"}/>
                <p>
                    Here's a small sample of what I've worked on:
                </p>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://bluelib.steffo.eu/examples/index.html"}
                        icon={faPaintRoller}
                        text={"Bluelib"}
                        description={"Customizable web stylesheet"}
                    />
                    <LinkPanel
                        href={"https://github.com/Steffo99/greed"}
                        icon={faCashRegister}
                        text={"Greed"}
                        description={"Telegram store bot"}
                    />
                </div>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://github.com/Steffo99/greed"}
                        icon={faBookAtlas}
                        text={"Sophon"}
                        description={"Research hub for universities"}
                    />
                    <LinkPanel
                        href={"https://steffo.itch.io/pineapple-surf"}
                        icon={faGamepad}
                        text={"Pineapple Surf"}
                        description={"Game jam prototype"}
                    />
                </div>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://marketplace.visualstudio.com/items?itemName=steffo.steffula-code"}
                        icon={faPaintbrush}
                        text={"Steffula Code"}
                        description={"Color theme for the VSCode editor"}
                    />
                    <LinkPanel
                        href={"https://steffo.itch.io/pineapple-surf"}
                        icon={faCog}
                        text={"Micronfig"}
                        description={"12-factor app config for Rust"}
                    />
                </div>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://github.com/Steffo99/backup-duplicity"}
                        icon={faFloppyDisk}
                        text={"docker-backup-duplicity"}
                        description={"Pluggable Docker-based backups"}
                    />
                    <LinkPanel
                        href={"https://steffo.itch.io/pineapple-surf"}
                        icon={faScissors}
                        text={"actions-semver"}
                        description={"GH Action for semver parsing"}
                    />
                </div>
                <hr/>
                <p>
                    If you're interested in seeing more, you can:
                </p>
                <div className={"group-lp"}>
                    <LinkPanel
                        fade
                        icon={faDiagramProject}
                        text={"Visit my Projects page"}
                        description={"There are many more projects there!"}
                    />
                </div>
            </section>
            <section className={"panel box"} id={"panel-internet"}>
                <h3>
                    Me on the Internet
                </h3>
                <p>
                    I sign up to basically any website I stumble upon to explore and study its functions, mechanisms, culture and community, so don't be surprised if you see me somewhere!
                </p>
                <hr/>
                <p>
                    Apart from experimentation, I'm currently the most active on the Fediverse, in particular on:
                </p>
                <LinkPanel href={"/projects"} icon={faMastodon} text={"Mastodon"} description={"@steffo@fosstodon.org"}/>
                <hr/>
                <p>
                    Other services I often use are:
                </p>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://github.com/Steffo99"}
                        icon={faGithub}
                        text={"GitHub"}
                        description={"Steffo99"}
                    />
                    <LinkPanel
                        href={"https://stackoverflow.com/users/4334568/steffo"}
                        icon={faStackOverflow}
                        text={"Stack Overflow"}
                        description={"Steffo"}
                    />
                </div>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://www.linkedin.com/in/steffo45/"}
                        icon={faBorderAll}
                        text={"Matrix"}
                        description={"@steffo:ryg.one"}
                    />
                    <LinkPanel
                        href={"https://discord.com/users/77703771181817856"}
                        icon={faDiscord}
                        text={"Discord"}
                        description={"Steffo#4036"}
                    />
                </div>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://www.linkedin.com/in/steffo45/"}
                        icon={faLinkedin}
                        text={"Linkedin"}
                        description={"Stefano Pigozzi"}
                    />
                    <LinkPanel
                        href={"mailto:me@steffo.eu"}
                        icon={faEnvelope}
                        text={"Email"}
                        description={"me@steffo.eu"}
                    />
                </div>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://steamcommunity.com/profiles/76561198034314260/"}
                        icon={faSteam}
                        text={"Steam"}
                        description={"[U:1:74048532]"}
                    />
                    <LinkPanel
                        href={"https://steffo.itch.io/"}
                        icon={faItchIo}
                        text={"Itch.io"}
                        description={"Steffo"}
                    />
                </div>
                <hr/>
                <p>
                    If you want to find me on some other service, please:
                </p>
                <LinkPanel
                    fade
                    icon={faUser}
                    text={"Visit my Accounts page"}
                    description={"I've started keeping track only recently..."}
                />
            </section>
        </div>
        <div className={"chapter-2"}>
            <section className={"panel box"} id={"panel-friends"}>
                <h3>
                    My friends
                </h3>
                <p>
                    I think that everyone should have their tiny, personal website!
                </p>
                <p>
                    You can check out my friends' websites here:
                </p>
                <div className={"chapter-3"}>
                    <LinkPanel icon={faGlobe} text={"Gimbaro"} href={"https://gimbaro.dev/"}/>
                    <LinkPanel icon={faGlobe} text={"Ichicoro"} href={"https://marte.dev/"}/>
                    <LinkPanel icon={faGlobe} text={"Malbyx"} href={"https://about.malbyx.tk/"}/>
                    <LinkPanel icon={faGlobe} text={"Nemesis"} href={"https://www.fermitech.info/"}/>
                    <LinkPanel icon={faGlobe} text={"SnowyCoder"} href={"https://rossilorenzo.dev/"}/>
                    <LinkPanel icon={faGlobe} text={"Proto"} href={"https://fabiodesim.one/"}/>
                    <LinkPanel icon={faGlobe} text={"Viktya"} href={"https://viktya.github.io/"}/>
                    <div className={"panel fade"}>
                        <span><FontAwesomeIcon icon={faPlus}/> And more!</span>
                    </div>
                </div>
                <small style={{fontSize: "x-small"}} className={"float-bottom"}>
                    Hey friends, please make a small personal website, so I can add you here! <span aria-hidden>:D</span>
                </small>
            </section>
            <section className={"panel box home-ad"} id={"panel-adblocker"}>
                <h3>
                    Fake advertisement
                </h3>
                <p>
                    Hey! You're browsing the Internet without an ad-blocker!
                </p>
                <p>
                    For your safety and better browser performance, you should install:
                </p>
                <div className={"chapter-1"}>
                    <LinkPanel icon={faShieldAlt} text={"uBlock Origin"} href={"https://ublockorigin.com"}/>
                </div>
                <p>
                    Additionally, if you are technically inclined, consider setting up this on your network:
                </p>
                <div className={"chapter-1"}>
                    <LinkPanel icon={faShieldAlt} text={"Pi-Hole"} href={"https://pi-hole.net"}/>
                </div>
                <small style={{fontSize: "x-small"}} className={"float-bottom"}>
                    I am not affiliated with the developers of this software, but I heavily recommend them to everyone!
                </small>
            </section>
        </div>
    </>
}

export default Index;
