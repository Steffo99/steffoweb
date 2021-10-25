import * as React from "react"
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {Panel, Anchor} from "@steffo/bluelib-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Style from "./Account.module.css"


interface AccountProps {
    icon: IconDefinition,
    url: string,
    name: string,
}


export function Account({icon, url, name}: AccountProps): JSX.Element {
    let contents: JSX.Element
    if(url) {
        contents = <Anchor href={url}><FontAwesomeIcon icon={icon}/>&nbsp;{name}</Anchor>
    }
    else {
        contents = <><FontAwesomeIcon icon={icon}/>&nbsp;{name}</>
    }

    return (
        <Panel className={Style.Account} style={{minWidth: "unset"}}>
            {contents}
        </Panel>
    )
}
