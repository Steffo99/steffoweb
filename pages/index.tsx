import React from 'react'
import type {NextPage} from "next"
import {default as Link} from "next/link"
import {faRedditAlien, faMastodon, faGithub, faDiscord, faTelegram, faSteam, faItchIo, faTwitter, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons"
import {faBorderAll, faEnvelope, faPizzaSlice, faGamepad, faBook, faBox, faFilm, faMusic} from "@fortawesome/free-solid-svg-icons"
import {LinkPanel} from "../components/LinkPanel"
import {ProjectPanel} from "../components/ProjectPanel"

import {default as imgSteffoweb} from "../public/opengraph.png"
import {default as imgBlank} from "../public/img/projects/blank.png"
import {default as imgBluelib} from "../public/img/projects/bluelib.png"
import {default as imgSophon} from "../public/img/projects/sophon.png"
import {default as imgParticleClash} from "../public/img/projects/particle-clash.png"


const Index: NextPage = () => {
    return <>
        <div className={"chapter-1"}>
            <section className={"panel box"} style={{maxWidth: "488px"}}>
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
        <div className={"chapter-1"}>
            <section className={"panel box todo"}>
                <h3>
                    My projects
                </h3>
                <p>
                    I should write an intro sentence here
                </p>
                <div className={"chapter-4"}>
                    <ProjectPanel
                        src={imgSteffoweb}
                        href={"https://github.com/Steffo99/steffoweb"}
                        name={"Steffoweb"}
                        description={<span>This very website!</span>}
                    />
                    <ProjectPanel
                        src={imgBluelib}
                        href={"https://github.com/Steffo99/bluelib"}
                        name={"Bluelib"}
                        description={<span>Customizable, flexible and modular CSS library</span>}
                    />
                    <ProjectPanel
                        src={imgSophon}
                        href={"https://github.com/Steffo99/sophon"}
                        name={"Sophon"}
                        description={<span>Research hub for universities</span>}
                    />
                    <ProjectPanel
                        src={imgParticleClash}
                        href={"https://github.com/Steffo99/particle-clash"}
                        name={"Particle Clash"}
                        description={<span>Match-4 game for two players about particles about to collide</span>}
                    />
                </div>
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
                    My posts
                </h3>
                <p>
                    Very rarely, I may write something interesting and put it here.
                </p>
                <div className={"chapter-1"}>
                    <div className={"panel fade"}>
                        <p>
                            Nothing has been posted here yet.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <div className={"chapter-2"}>
            <section className={"panel box todo"}>
                <h3>
                    My recommendations
                </h3>
                <p>
                    I have fun rating and comparing things based on my personal tastes!
                </p>
                <div className={"chapter-3"}>
                    <LinkPanel fade icon={faGamepad} text={"Videogames"}/>
                    <LinkPanel fade icon={faFilm} text={"Movies"}/>
                    <LinkPanel fade icon={faBox} text={"Anime"}/>
                    <LinkPanel fade icon={faMusic} text={"Music"}/>
                    <LinkPanel fade icon={faBook} text={"Books"}/>
                    <LinkPanel fade icon={faPizzaSlice} text={"Pizzerie"}/>
                </div>
                <p style={{fontSize: "x-small"}} className={"float-bottom"}>
                    I am by no means a critic, so don't pay this too much attention unless you're interested in what I like...
                </p>
            </section>
            <section className={"panel box"}>
                <h3>
                    Friends with a website
                </h3>
                <p>
                    You can check out my friends' websites here:
                </p>
                <div className={"panel fade"}>
                    <p>
                        This section was just created: if you know me, please tell me your website so I can add it here! :D
                    </p>
                </div>
            </section>
        </div>
    </>
}

export default Index;
