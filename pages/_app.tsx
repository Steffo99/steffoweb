import {default as Link} from "next/link"
import {default as Image} from "next/future/image"
import React from 'react'

import "@steffo/bluelib/dist/base.root.css"
import "@steffo/bluelib/dist/colors-royalblue.root.css"
import "@steffo/bluelib/dist/fonts-fira-ghpages.root.css"
import "@steffo/bluelib/dist/classic.root.css"
import "@steffo/bluelib/dist/glass.root.css"
import "@steffo/bluelib/dist/fun.root.css"
import "./_app.css"

import {default as imgSRound} from "../public/s-round.png"

import type {AppProps} from "next/app"


const App = ({Component, pageProps}: AppProps) => {
    return <>
        <h1>
            <Image alt={""} src={imgSRound} style={{height: "48px", width: "48px", display: "inline-block", verticalAlign: "text-bottom"}}/> Steffo's website
        </h1>
        <Component {...pageProps}/>
        <footer>
            © {new Date().getFullYear()} Stefano Pigozzi | <Link href={"https://github.com/Steffo99/steffoweb-2021"}>Source code</Link>
        </footer>
    </>
}

// noinspection JSUnusedGlobalSymbols
export default App;
