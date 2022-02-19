import React from 'react'
import type {AppProps} from "next/app"
import "./_app.css"
import {LayoutThreeCol, Heading, BringAttention as B, Footer, Anchor as A, useBluelibInBody } from "@steffo/bluelib-react"
import {BluelibTheme} from "@steffo/bluelib-react/dist/types"
import { ThemeContext } from '../components/ThemeContext'


function App({Component, pageProps}: AppProps) {
    const [theme, setTheme] = React.useState<BluelibTheme>("royalblue")
    useBluelibInBody(theme)

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <LayoutThreeCol>
                <LayoutThreeCol.Center>
                    <Heading level={1}>
                        <B>Steffo</B>'s website
                    </Heading>
                    <Component {...pageProps}/>
                    <Footer>
                        <p>
                            © {new Date().getFullYear()} Stefano Pigozzi
                        </p>
                        <p>
                            <A href="https://github.com/Steffo99/steffoweb">Open source</A> website based on <A href="https://github.com/Steffo99/bluelib">Bluelib</A> and <A href="https://github.com/Steffo99/bluelib-react">Bluelib React</A>
                        </p>
                        <p>
                            Please do not use the source code of this website to impersonate me!
                        </p>
                    </Footer>
                </LayoutThreeCol.Center>
            </LayoutThreeCol>
        </ThemeContext.Provider>
    );
}

export default App;
