import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React from 'react'
import type {NextPage} from "next"
import {default as Link} from "next/link"
import {faRedditAlien, faMastodon, faGithub, faDiscord, faTelegram, faSteam, faItchIo, faTwitter, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons"
import {faBorderAll, faEnvelope, faPizzaSlice, faGamepad, faBook, faBox, faFilm, faMusic, faGlobe, faPlus} from "@fortawesome/free-solid-svg-icons"
import {LinkPanel} from "../components/LinkPanel"
import {ProjectPanel} from "../components/ProjectPanel"

import {default as imgSteffoweb} from "../public/opengraph.png"
import {default as imgBlank} from "../public/img/projects/blank.png"
import {default as imgBluelib} from "../public/img/projects/bluelib.png"
import {default as imgSophon} from "../public/img/projects/sophon.png"
import {default as imgParticleClash} from "../public/img/projects/particle-clash.png"
import {default as imgTheColdNight} from "../public/img/projects/the-cold-night.png"
import {default as imgLoopingForLoops} from "../public/img/projects/looping-for-loops.png"
import {default as imgKeepEverythingAlive} from "../public/img/projects/keep-everything-alive.png"
import {default as imgGravityFusion} from "../public/img/projects/gravity-fusion.png"
import {default as imgSlimeBloodAndPain} from "../public/img/projects/slime-blood-and-pain.png"
import {default as imgBleachBeach} from "../public/img/projects/bleach-beach.png"
import {default as imgBeatTD} from "../public/img/projects/beat-td.png"


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
                    In my free time, I have developed many open source projects, some of which have gained popularity and are still in use today!
                </p>
                <details className={"details-no-indent details-header panel box"}>
                    <summary>Software</summary>
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
                    </div>
                </details>
                <details className={"details-no-indent details-header panel box"}>
                    <summary>Scientific papers</summary>
                    <div className={"chapter-4"}>
                        <ProjectPanel
                            src={imgSophon}
                            href={"https://dl.acm.org/doi/fullHtml/10.1145/3491418.3535163"}
                            name={"Sophon: an Extensible Platform for Collaborative Research"}
                            description={<span><cite>Stefano Pigozzi</cite>, <cite>Francesco Faenza</cite>, <cite>Claudia Canali</cite></span>}
                        />
                    </div>
                </details>
                <details className={"details-no-indent details-header panel box"}>
                    <summary>Game jam entries</summary>
                    <div className={"chapter-4"}>
                        <ProjectPanel
                            src={imgParticleClash}
                            href={"https://steffo.itch.io/particle-clash"}
                            name={"Particle Clash"}
                            description={<span><abbr title={"Ludum Dare 51"}>LD51</abbr>: Match-4 particle collider</span>}
                        />
                        <ProjectPanel
                            src={imgTheColdNight}
                            href={"https://steffo.itch.io/the-cold-night"}
                            name={"The Cold Night"}
                            description={<span><abbr title={"Ludum Dare 50"}>LD50</abbr>: Top-down snowman melter</span>}
                        />
                        <ProjectPanel
                            src={imgLoopingForLoops}
                            href={"https://steffo.itch.io/the-cold-night"}
                            name={"Looping for lööps"}
                            description={<span><abbr title={"Ludum Dare 47"}>LD47</abbr>: Fruit-looping platformer</span>}
                        />
                        <ProjectPanel
                            src={imgKeepEverythingAlive}
                            href={"https://steffo.itch.io/keep-everything-alive"}
                            name={"Keep Everything Alive"}
                            description={<span><abbr title={"Ludum Dare 46"}>LD46</abbr>: Lively microgame collection</span>}
                        />
                        <ProjectPanel
                            src={imgGravityFusion}
                            href={"https://steffo.itch.io/gravity-fusion"}
                            name={"Gravity Fusion"}
                            description={<span><abbr title={"Ludum Dare 45"}>LD45</abbr>: Colorful incremental game</span>}
                        />
                        <ProjectPanel
                            src={imgSlimeBloodAndPain}
                            href={"https://steffo.itch.io/slime-blood-and-pain"}
                            name={"Slime, Blood and Pain"}
                            description={<span><abbr title={"Ludum Dare 44"}>LD44</abbr>: Infinite dungeon crawler</span>}
                        />
                        <ProjectPanel
                            src={imgBleachBeach}
                            href={"https://steffo.itch.io/bleach-beach"}
                            name={"Bleach Beach"}
                            description={<span><abbr title={"Ludum Dare 42"}>LD42</abbr>: Wonky physics-based spear fishing simulator</span>}
                        />
                        <ProjectPanel
                            src={imgBeatTD}
                            href={"https://steffo.itch.io/beat-td"}
                            name={"Beat TD"}
                            description={<span><abbr title={"Ludum Dare 41"}>LD41</abbr>: Rhythm-based tower-defense</span>}
                        />
                    </div>
                </details>
                <details className={"details-no-indent details-header panel box"}>
                    <summary>Notes</summary>
                    <div className={"chapter-4"}>
                        <ProjectPanel
                            src={imgBlank}
                            href={"https://example.org"}
                            name={"Placeholder"}
                            description={<span>There's nothing here yet.</span>}
                        />
                        <ProjectPanel
                            src={imgBlank}
                            href={"https://example.org"}
                            name={"Placeholder"}
                            description={<span>There's nothing here yet.</span>}
                        />
                        <ProjectPanel
                            src={imgBlank}
                            href={"https://example.org"}
                            name={"Placeholder"}
                            description={<span>There's nothing here yet.</span>}
                        />
                        <ProjectPanel
                            src={imgBlank}
                            href={"https://example.org"}
                            name={"Placeholder"}
                            description={<span>There's nothing here yet.</span>}
                        />
                    </div>
                </details>
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
                    Friends
                </h3>
                <p>
                    You can check out my friends' websites here (in alphanumeric order):
                </p>
                <div className={"chapter-3"}>
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
