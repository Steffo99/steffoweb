import {IconProp} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {default as Link} from "next/link"
import {default as cn} from "classnames"
import React from "react"


export type LinkPanelProps = {
    href?: string,
    icon: IconProp,
    text: string,
    me?: boolean,
    fade?: boolean,
}


export const LinkPanel = ({href, icon, text, me, fade}: LinkPanelProps) => {
    const panel = (
        <div className={cn({panel: true, fade: fade})}>
            <span>
                <FontAwesomeIcon icon={icon}/>&nbsp;{text}
            </span>
        </div>
    )

    if(href) {
        return (
            <Link href={href}>
                <a rel={me ? "me" : ""}>
                    {panel}
                </a>
            </Link>
        )
    }
    else {
        return panel
    }
}
