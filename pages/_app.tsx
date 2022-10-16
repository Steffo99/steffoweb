import Link from "next/link"
import React from 'react'

import "@steffo/bluelib/dist/base.root.css"
import "@steffo/bluelib/dist/colors-royalblue.root.css"
import "@steffo/bluelib/dist/fonts-fira-ghpages.root.css"
import "@steffo/bluelib/dist/classic.root.css"
import "@steffo/bluelib/dist/glass.root.css"
import "@steffo/bluelib/dist/fun.root.css"
import "./_app.css"

import type {AppProps} from "next/app"


const App = ({Component, pageProps}: AppProps) => {
    return <>
        <h1>
            Steffo's website
        </h1>
        <Component {...pageProps}/>
        <footer>
            © {new Date().getFullYear()} Stefano Pigozzi | <Link href={"https://github.com/Steffo99/steffoweb-2021"}>Source code</Link>
        </footer>
    </>
}

// noinspection JSUnusedGlobalSymbols
export default App;
