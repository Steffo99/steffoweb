import React from 'react';
import {Bluelib, LayoutThreeCol, Heading, Chapter, Box, BringAttention as B, Anchor, ListUnordered as UL} from "@steffo/bluelib-react";

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
                                Some of my projects
                            </Heading>
                            <UL>
                                <UL.Item>
                                    <Anchor href={"https://github.com/Steffo99/greed"}>Greed</Anchor>, a customizable, multilanguage Telegram shop bot with Payments support
                                </UL.Item>
                                <UL.Item>
                                    <Anchor href={"https://github.com/Steffo99/bluelib"}>Bluelib</Anchor> and <Anchor href={"https://github.com/Steffo99/bluelib-react"}>Bluelib React</Anchor>, the libraries this website is based on
                                </UL.Item>
                                <UL.Item>
                                    <Anchor href={"https://github.com/Steffo99/lihzahrd"}>Lihzahrd</Anchor>, a Python library to parse Terraria worlds, and <Anchor href={"https://github.com/Steffo99/flyingsnake"}>Flyingsnake</Anchor>, a map renderer based on it
                                </UL.Item>
                                <UL.Item>
                                    <Anchor href={"https://github.com/RYGhub/bobbot"}>Bob</Anchor>, a Discord bot that allows server members to create temporary voice channels
                                </UL.Item>
                            </UL>
                        </Box>
                    </Chapter>
                </LayoutThreeCol.Center>
            </LayoutThreeCol>
        </Bluelib>
    );
}

export default App;
