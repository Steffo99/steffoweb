import {IconProp} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {default as Link} from "next/link"
import {default as cn} from "classnames"
import {default as style} from "./LinkPanel.module.css"
import React from "react"


export type LinkPanelProps = {
    href?: string,
    icon: IconProp,
    text: React.ReactNode,
    me?: boolean,
    fade?: boolean,
}


export const LinkPanel = ({href, icon, text, me, fade}: LinkPanelProps) => {
    const panel = (
        <span>
            <FontAwesomeIcon icon={icon}/>&nbsp;{text}
        </span>
    )

    if(href) {
        return (
            <a className={cn({panel: true, [style.linkPanel]: true, fade: fade})} rel={me ? "me" : ""}>
                <Link href={href}>
                    {panel}
                </Link>
            </a>
        )
    }
    else {
        return (
            <div className={cn({panel: true, fade: fade})}>
                {panel}
            </div>
        )
    }
}
