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
        <>
            <FontAwesomeIcon className={style.linkPanelIcon} icon={icon}/>
            <span className={style.linkPanelText}>
                {text}
            </span>
        </>
    )

    if(href) {
        return (
            <Link href={href}>
                <a className={cn({panel: true, [style.linkPanel]: true, fade: fade})} rel={me ? "me" : ""}>
                    {panel}
                </a>
            </Link>
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
