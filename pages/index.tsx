import React from 'react'
import type {NextPage} from "next"
import {Heading, Chapter, Box, BringAttention as B, Anchor, Form} from "@steffo/bluelib-react";
import {BluelibTheme} from "@steffo/bluelib-react/dist/types"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faDiscord, faGithub, faReddit, faTelegram} from "@fortawesome/free-brands-svg-icons"
import {Project} from "../components/Project"
import {MoreProjects} from "../components/MoreProjects"
import {Account} from "../components/Account"
import {ThemeContext} from '../components/ThemeContext';


type ThemeMap = {
    [fullname: string]: BluelibTheme;
};
const FULL_THEME_NAMES: ThemeMap = {
    "Royal Blue": "royalblue",
    "The Sophonity": "sophon",
    "Sheet of Paper": "paper",
    "Hacker Terminal": "hacker",
    "Gestione Amber": "amber",
}


const Index: NextPage = () => {
    const [_theme, setTheme] = React.useContext(ThemeContext);

    return <>
        <Chapter>
            <Box>
                <Heading level={3}>
                    About me
                </Heading>
                <p>
                    I'm <B>Stefano Pigozzi</B>, a Computer Science student at <Anchor href={"https://www.unimore.it"}>Unimore</Anchor>!
                </p>
                <p>
                    I develop and maintain many <B>open source</B> software projects, such as websites, chat bots, libraries, videogames and mods.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    My software projects
                </Heading>
                <Project user={"Steffo99"} repo={"sophon"} lang={"Multilanguage"}/>
                <Project user={"Steffo99"} repo={"greed"} lang={"Python"}/>
                <Project user={"Steffo99"} repo={"bluelib"} lang={"Less"}/>
                <Project user={"RYGhub"} repo={"bobbot"} lang={"Rust"}/>
                <Project user={"RYGhub"} repo={"impressive-strawberry"} lang={"Python"}/>
                <Project user={"Steffo99"} repo={"flyingsnake"} lang={"Python"}/>
                <Project user={"pds-nest"} repo={"nest"} lang={"JavaScript"}/>
                <Project user={"Steffo99"} repo={"keep-everything-alive"} lang={"C#"}/>
                <MoreProjects user={"Steffo99"} minus={7}/>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Me on the web
                </Heading>
                <Chapter>
                    <Account icon={faReddit} url={"https://www.reddit.com/u/Steffo99/"} name={"/u/Steffo99"}/>
                    <Account icon={faGithub} url={"https://github.com/Steffo99"} name={"Steffo99"}/>
                    <Account icon={faDiscord} url={""} name={"Steffo#4036"}/>
                    <Account icon={faTelegram} url={"https://t.me/Steffo"} name={"Steffo"}/>
                    <Account icon={faEnvelope} url={"mailto:ste.pigozzi@gmail.com"} name={"ste.pigozzi@gmail.com"}/>
                    <Account icon={faEnvelope} url={"mailto:me@steffo.eu"} name={"me@steffo.eu"}/>
                </Chapter>
            </Box>
            <Box>
                <Heading level={3}>
                    Other stuff
                </Heading>
                <Form>
                    <Form.Select label={"Theme"} onChange={event => setTheme(FULL_THEME_NAMES[event.target.value])} options={FULL_THEME_NAMES}/>
                </Form>
            </Box>
        </Chapter>
    </>
}

export default Index;