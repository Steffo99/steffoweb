import {faCar, faGlobe} from "@fortawesome/free-solid-svg-icons"
import React from "react"
import {LinkPanel} from "../../components/LinkPanel"


export default function GarasautoPage() {
    return (
        <div className={"chapter-1"}>
            <section className={"panel box"}>
                <h3>
                    Shrine of the Garasauto
                </h3>
                <LinkPanel
                    icon={faCar}
                    text={"Location"}
                    href={"https://www.google.com/maps/@44.6332007,10.9484818,3a,32.4y,316.16h,84.93t/data=!3m6!1e1!3m4!1sWfvO44ELO7i2ct3S-P55ew!2e0!7i16384!8i8192"}
                />
                <LinkPanel
                    icon={faGlobe}
                    text={"garasfunny.tk"}
                    href={"https://garasfunny.tk/"}
                />
                <LinkPanel
                    icon={faGlobe}
                    text={"garasauto.it"}
                    href={"https://garasauto.it/"}
                />
            </section>
        </div>
    )
}