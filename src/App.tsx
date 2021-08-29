import React from 'react';
import {Bluelib, LayoutThreeCol, Heading, Chapter, Box, BringAttention as B, Idiomatic as I, Anchor} from "@steffo/bluelib-react";
import {Project} from "./components/Project";
import {MoreProjects} from "./components/MoreProjects";

function App() {
    return (
        <Bluelib theme={"royalblue"}>
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
                            <Project user={"Steffo99"} repo={"appuntiweb"}/>
                            <Project user={"RYGhub"} repo={"bobbot"}/>
                            <Project user={"Steffo99"} repo={"lihzahrd"}/>
                            <Project user={"Steffo99"} repo={"flyingsnake"}/>
                            <Project user={"pds-nest"} repo={"nest"}/>
                            <Project user={"Steffo99"} repo={"keep-everything-alive"}/>
                            <MoreProjects user={"Steffo99"}/>
                        </Box>
                    </Chapter>
                </LayoutThreeCol.Center>
            </LayoutThreeCol>
        </Bluelib>
    );
}

export default App;
