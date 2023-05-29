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
    description?: React.ReactNode,
    extraTop?: React.ReactNode,
    extraBtm?: React.ReactNode,
    me?: boolean,
    fade?: boolean,
    onPress?: React.EventHandler<React.SyntheticEvent<HTMLElement>>
}


export const LinkPanel = ({href, icon, text, description, extraTop, extraBtm, me, fade, onPress}: LinkPanelProps) => {
    const panel = (
        <>
            <FontAwesomeIcon className={style.linkPanelIcon} icon={icon}/>
            <span className={style.linkPanelText}>
                {text}
            </span>
            {extraTop &&
                <span className={style.linkPanelExtraTop}>
                    {extraTop}
                </span>
            }
            {description &&
                <small className={style.linkPanelDescription}>
                    {description}
                </small>
            }
            {extraBtm !== undefined &&
                <small className={style.linkPanelExtraBtm}>
                    {extraBtm}
                </small>
            }
        </>
    )

    if(href) {
        return (
            <Link href={href}>
                <a className={cn({panel: true, [style.linkPanel]: true, fade: fade})} rel={me ? "me" : ""} onClick={onPress} onKeyPress={onPress}>
                    {panel}
                </a>
            </Link>
        )
    }
    else {
        return (
            <div className={cn({panel: true, [style.linkPanel]: true, fade: fade})} onClick={onPress} onKeyPress={onPress}>
                {panel}
            </div>
        )
    }
}
