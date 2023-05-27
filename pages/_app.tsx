import {default as Link} from "next/link"
import {default as Image} from "next/future/image"
import React from 'react'

import "./_app.css"

import {default as imgSRound} from "../public/s-round.png"

import type {AppProps} from "next/app"

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const App = ({Component, pageProps}: AppProps) => {
    return <>
        <h1>
            <Image alt={""} src={imgSRound} style={{height: "48px", width: "48px", display: "inline-block", verticalAlign: "text-bottom"}}/> Steffo's website
        </h1>
        <main>
            <Component {...pageProps}/>
        </main>
        <footer>
            © {new Date().getFullYear()} Stefano Pigozzi | <Link href={"https://github.com/Steffo99/steffoweb"}>Source code</Link>
        </footer>
    </>
}

// noinspection JSUnusedGlobalSymbols
export default App;
