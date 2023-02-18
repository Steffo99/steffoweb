import {NextPage} from "next"
import React from "react"
import {LinkPanel} from "../components/LinkPanel"
import {faCar} from "@fortawesome/free-solid-svg-icons"


const Garasauto: NextPage = () => {
    return <>
        <div className={"chapter-1"}>
            <section className={"panel box"}>
                <h3>
                    Silly stuff
                </h3>
                <LinkPanel icon={faCar} text={"Garasauto"} href={"https://www.google.com/maps/@44.6332007,10.9484818,3a,32.4y,316.16h,84.93t/data=!3m6!1e1!3m4!1sWfvO44ELO7i2ct3S-P55ew!2e0!7i16384!8i8192"}/>
            </section>
        </div>
    </>
}

export default Garasauto