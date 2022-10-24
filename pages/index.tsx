import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React from 'react'
import type {NextPage} from "next"
import {default as Link} from "next/link"
import {faRedditAlien, faMastodon, faGithub, faDiscord, faTelegram, faSteam, faItchIo, faTwitter, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons"
import {faBorderAll, faEnvelope, faGlobe, faPlus, faFileCode, faBagShopping} from "@fortawesome/free-solid-svg-icons"
import {LinkPanel} from "../components/LinkPanel"


const Index: NextPage = () => {
    return <>
        <div className={"chapter-1"}>
            <section className={"panel box"}>
                <h3>
                    About me
                </h3>
                <p>
                    I'm <dfn>Stefano Pigozzi</dfn>, a Computer Science graduate and Master's student at <Link href={"https://www.unimore.it/"}>Unimore</Link>!
                </p>
                <p>
                    When I'm not studying, I <b>contribute to open source</b>, <b>play video games</b>, and <b>eat tons of gelato</b>!
                </p>
                <p>
                    I'm also somewhat interested in the <b>social mechanisms of the Internet</b>, specifically in how platforms influence how people interact with each other online.
                </p>
            </section>
        </div>
        <div className={"chapter-2"}>
            <section className={"panel box"} id={"panel-internet"}>
                <h3>
                    Me on the Internet
                </h3>
                <p>
                    You can find me in many places around the Internet:
                </p>
                <div className={"chapter-2"}>
                    <LinkPanel me href={"https://github.com/Steffo99"} icon={faGithub} text={"Steffo99"}/>
                    <LinkPanel me href={"https://old.reddit.com/user/steffo99"} icon={faRedditAlien} text={<span><small>/u/</small>Steffo99</span>}/>
                    <LinkPanel me href={"https://fosstodon.org/@steffo"} icon={faMastodon} text={<span>@steffo<small>@fosstodon.org</small></span>}/>
                    <LinkPanel me href={"https://twitter.com/CaptSteffo/"} icon={faTwitter} text={"@CaptSteffo"}/>
                    <LinkPanel me href={"https://stackoverflow.com/users/4334568/steffo"} icon={faStackOverflow} text={"Steffo"}/>
                    <LinkPanel me href={"https://www.linkedin.com/in/steffo45/"} icon={faLinkedin} text={"Stefano Pigozzi"}/>
                    <LinkPanel me href={"https://steamcommunity.com/profiles/76561198034314260/"} icon={faSteam} text={"Steffo"}/>
                    <LinkPanel me href={"https://steffo.itch.io/"} icon={faItchIo} text={"Steffo"}/>
                </div>
                <p>
                    You may message me on any of the following messengers:
                </p>
                <div className={"chapter-2"}>
                    <LinkPanel me href={"mailto:me@steffo.eu"} icon={faEnvelope} text={"me@steffo.eu"}/>
                    <LinkPanel me href={"https://t.me/Steffo"} icon={faTelegram} text={"@Steffo"}/>
                    <LinkPanel me href={"https://discord.com/users/77703771181817856"} icon={faDiscord} text={<span>Steffo<small>#4036</small></span>}/>
                    <LinkPanel me href={"https://matrix.to/@steffo:ryg.one"} icon={faBorderAll} text={<span>@steffo<small>:ryg.one</small></span>}/>
                </div>
                <small style={{fontSize: "x-small"}} className={"float-bottom"}>
                    Please <em>do not</em> send me chat messages about <i>Greed</i>, <Link href={"https://github.com/Steffo99/greed/issues/new/choose"}>open an issue</Link> instead!
                </small>
            </section>
            <section className={"panel box"}>
                <h3>
                    My projects
                </h3>
                <p>
                    You might be interested in one of my released projects:
                </p>
                <div className={"chapter-3"}>
                    <LinkPanel href={"https://github.com/Steffo99/greed"} icon={faFileCode} text={"Greed"}/>
                    <LinkPanel href={"https://github.com/Steffo99/sophon"} icon={faFileCode} text={"Sophon"}/>
                    <LinkPanel href={"https://gh.steffo.eu/bluelib/examples/index.html"} icon={faGlobe} text={"Bluelib"}/>
                    <LinkPanel href={"https://marketplace.visualstudio.com/items?itemName=steffo.steffula-code"} icon={faBagShopping} text={"Steffula Code"}/>
                    <LinkPanel href={"https://github.com/Steffo99/steffula-ultra"} icon={faFileCode} text={"Steffula Ultra"}/>
                    <LinkPanel href={"https://uni.steffo.eu/"} icon={faGlobe} text={"Unisteffo"}/>
                    <LinkPanel href={"https://github.com/RYGhub/revenants-brooch"} icon={faFileCode} text={<span style={{fontSize: "small"}}>Revenant's Brooch</span>}/>
                    <LinkPanel href={"https://hub.ryg.one/bobbot/"} icon={faDiscord} text={"Bob Bot"}/>
                    <LinkPanel href={"https://github.com/Steffo99/cfig"} icon={faFileCode} text={"cfig"}/>
                    <LinkPanel href={"https://github.com/Steffo99/threadkiller"} icon={faFileCode} text={"Threadkiller"}/>
                    <LinkPanel href={"https://github.com/Steffo99/actions-semver"} icon={faFileCode} text={"actions-semver"}/>
                    <LinkPanel href={"https://github.com/Steffo99/template-poetry"} icon={faFileCode} text={<span style={{fontSize: "small"}}>template-poetry</span>}/>
                    <LinkPanel href={"https://github.com/Steffo99/lokiunimore"} icon={faFileCode} text={"Loki"}/>
                    <LinkPanel href={"https://t.me/patchedporobot"} icon={faTelegram} text={<span style={{fontSize: "small"}}>Patched Porobot</span>}/>
                    <LinkPanel href={"https://github.com/Steffo99/io-beep-boop"} icon={faFileCode} text={"Io Beep Boop"}/>
                    <LinkPanel href={"https://addons.mozilla.org/en-US/firefox/addon/tidebringer/"} icon={faBagShopping} text={"Tidebringer"}/>
                    <LinkPanel href={"https://steamcommunity.com/sharedfiles/filedetails/?id=2572658701"} icon={faSteam} text={"Starting Perk"}/>
                    <LinkPanel href={"https://github.com/Steffo99/lihzahrd"} icon={faFileCode} text={"lihzahrd"}/>
                    <LinkPanel href={"https://github.com/Steffo99/flyingsnake"} icon={faFileCode} text={"flyingsnake"}/>
                    <LinkPanel href={"https://gh.steffo.eu/trivia/"} icon={faGlobe} text={"Trivia"}/>
                    <LinkPanel href={"https://github.com/Steffo99/steamleaderboards"} icon={faFileCode} text={<span style={{fontSize: "small"}}>steamleaderboards</span>}/>
                    <LinkPanel href={"https://github.com/Steffo99/estus"} icon={faFileCode} text={"Estus"}/>
                </div>
                <small style={{fontSize: "x-small"}} className={"float-bottom"}>
                    There are more on <Link href={"https://github.com/Steffo99?tab=repositories"}>my GitHub profile</Link>!
                </small>
            </section>
            <section className={"panel box"}>
                <h3>
                    Friends
                </h3>
                <p>
                    You can check out my friends' websites here (in alphanumeric order):
                </p>
                <div className={"chapter-3"}>
                    <LinkPanel icon={faGlobe} text={"Gimbaro"} href={"https://gimbaro.dev/"}/>
                    <LinkPanel icon={faGlobe} text={"Ichicoro"} href={"https://marte.dev/"}/>
                    <LinkPanel icon={faGlobe} text={"Nemesis"} href={"https://www.fermitech.info/"}/>
                    <LinkPanel icon={faGlobe} text={"SnowyCoder"} href={"https://rossilorenzo.dev/"}/>
                    <div className={"panel fade"}>
                        <span><FontAwesomeIcon icon={faPlus}/> And more!</span>
                    </div>
                </div>
                <small style={{fontSize: "x-small"}} className={"float-bottom"}>
                    Hey friends, please make a small personal website, so I can add you here! <span aria-hidden>:D</span>
                </small>
            </section>
        </div>
    </>
}

export default Index;
