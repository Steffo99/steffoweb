import {default as Link} from "next/link"
import React from "react"
import {default as cn} from "classnames"
import {default as Image, ImageProps} from "next/future/image"
import {default as style} from "./ProjectPanel.module.css"


export type ProjectPanelProps = Pick<ImageProps, "src"> & {
    href?: string,
    name: string
    description: React.ReactNode,
}


export const ProjectPanel = ({src, href, name, description}: ProjectPanelProps) => {
    const panel = (
        <a className={cn({panel: true, [style.projectPanel]: true})}>
            <Image alt={name} src={src} className={cn({[style.projectImage]: true})} width={232} height={116}/>
            <div className={cn({[style.projectDescription]: true})}>
                <h4>{name}</h4>
                <p>
                    {description}
                </p>
            </div>
        </a>
    )

    if(href) {
        return (
            <Link href={href}>
                {panel}
            </Link>
        )
    }
    else {
        return panel
    }
}