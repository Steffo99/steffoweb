import React from 'react'
import {Bluelib, LayoutThreeCol, Heading, Chapter, Box, BringAttention as B, Anchor, Form} from "@steffo/bluelib-react";
import {Project} from "./components/Project"
import {MoreProjects} from "./components/MoreProjects"
import {faDiscord, faGithub, faReddit, faTelegram} from "@fortawesome/free-brands-svg-icons"
import {Account} from "./components/Account"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"


type Theme = "paper" | "royalblue" | "hacker" | "sophon"


type ThemeMap = {
    [fullname: string]: Theme;
};


const FULL_THEME_NAMES: ThemeMap = {
    "Royal Blue": "royalblue",
    "The Sophonity": "sophon",
    "Sheet of Paper": "paper",
    "Hacker Terminal": "hacker",
}


function App() {
    const [theme, setTheme] = React.useState<Theme>("royalblue")

    return (
        <Bluelib theme={theme}>
            <LayoutThreeCol>
                <LayoutThreeCol.Center>
                    <Heading level={1}>
                        <B>Steffo</B>'s website
                    </Heading>
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
                            <Project user={"Steffo99"} repo={"greed"}/>
                            <Project user={"Steffo99"} repo={"bluelib"}/>
                            <Project user={"RYGhub"} repo={"bobbot"}/>
                            <Project user={"Steffo99"} repo={"flyingsnake"}/>
                            <Project user={"pds-nest"} repo={"nest"}/>
                            <Project user={"Steffo99"} repo={"keep-everything-alive"}/>
                            <MoreProjects user={"Steffo99"}/>
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
                                <Form.Select label={"Theme"} onChange={event => setTheme(FULL_THEME_NAMES[event.target.value])}>
                                    {Object.keys(FULL_THEME_NAMES).map(key => <Form.Select.Option value={key}/>)}
                                </Form.Select>
                            </Form>
                        </Box>
                    </Chapter>
                </LayoutThreeCol.Center>
            </LayoutThreeCol>
        </Bluelib>
    );
}

export default App;
