import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React from 'react'
import type {NextPage} from "next"
import {default as Link} from "next/link"
import {faReddit, faMastodon, faGithub, faDiscord, faTelegram, faSteam, faItchIo, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faBorderAll, faEnvelope, faPizzaSlice, faGamepad, faBook, faBox, faFilm, faMusic} from "@fortawesome/free-solid-svg-icons"
import {LinkPanel} from "../components/LinkPanel"


const Index: NextPage = () => {
    return <>
        <div className={"chapter-0"}>
            <section className={"panel box todo"} style={{maxWidth: "488px"}}>
                <h3>
                    Under construction
                </h3>
                <p>
                    This website is currently being recreated from scratch, therefore much of its content is missing!
                </p>
            </section>
        </div>
        <div className={"chapter-0"}>
            <section className={"panel box todo"} style={{maxWidth: "488px"}}>
                <h3>
                    About me
                </h3>
                <p>
                    I'm <dfn>Stefano Pigozzi</dfn>, a Computer Science graduate and Master's student at <Link href={"https://www.unimore.it/"}>Unimore</Link>!
                </p>
            </section>
        </div>
        <div className={"chapter-0"}>
            <section className={"panel box todo"}>
                <h3>
                    My projects
                </h3>
                <p>
                    One of the things I enjoy doing in my free time is developing software to solve problems I encounter in my life, and then publishing the result on the Internet, allowing others to benefit from my solutions and contributing to the open source community.
                </p>
            </section>
        </div>
        <div className={"chapter-0"}>
            <section className={"panel box todo"}>
                <h3>
                    My posts
                </h3>
                <p>
                    Very rarely, I write something interesting and put it here.
                </p>
                <div className={"panel fade"}>
                    <p>
                        Guess what? Nothing has been posted here yet.
                    </p>
                </div>
            </section>
            <section className={"panel box todo"}>
                <h3>
                    My ratings
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
        </div>
        <div className={"chapter-0"}>
            <section className={"panel box"} id={"panel-internet"}>
                <h3>
                    Me on the Internet
                </h3>
                <p>
                    You can find me in many places on the web, but these are the ones I'm most active on:
                </p>
                <div className={"chapter-2"}>
                    <LinkPanel me href={"https://github.com/Steffo99"} icon={faGithub} text={"Steffo99"}/>
                    <LinkPanel me href={"https://old.reddit.com/user/steffo99"} icon={faReddit} text={"/u/Steffo99"}/>
                    <LinkPanel me href={"https://steamcommunity.com/profiles/76561198034314260/"} icon={faSteam} text={"Steffo"}/>
                    <LinkPanel me href={"https://steffo.itch.io/"} icon={faItchIo} text={"Steffo"}/>
                    <LinkPanel me href={"https://fosstodon.org/@steffo"} icon={faMastodon} text={"@steffo@fosstodon.org"}/>
                    <LinkPanel me href={"https://twitter.com/CaptSteffo/"} icon={faTwitter} text={"@CaptSteffo"}/>
                </div>
                <p>
                    You can send me messages on the following ways:
                </p>
                <div className={"chapter-2"}>
                    <LinkPanel me href={"mailto:me@steffo.eu"} icon={faEnvelope} text={"me@steffo.eu"}/>
                    <LinkPanel me href={"https://t.me/Steffo"} icon={faTelegram} text={"@Steffo"}/>
                    <LinkPanel me href={"https://discord.com/users/77703771181817856"} icon={faDiscord} text={"Steffo#4036"}/>
                    <LinkPanel me href={"https://matrix.to/@steffo:ryg.one"} icon={faBorderAll} text={"@steffo:ryg.one"}/>
                </div>
                <p style={{fontSize: "x-small"}} className={"float-bottom"}>
                    Please <em>do not</em> send me chat messages about <i>Greed</i>, open an issue or you'll end up in my Hall of Shame!
                </p>
            </section>
            <section className={"panel box todo"}>
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
