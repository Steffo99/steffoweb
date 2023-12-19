import React from "react"
import {default as cn} from "classnames";
import {default as style} from "./FlipPanel.module.css"

export type FlipPanelProps = {
    front: (f: () => void) => React.ReactNode,
    back: (f: () => void) => React.ReactNode,

    containerClassName?: cn.Argument,
    className?: cn.Argument,
    frontClassName?: cn.Argument,
    backClassName?: cn.Argument,

    containerProps?: {[prop: string]: any},
    props?: {[prop: string]: any},
    frontProps?: {[prop: string]: any},
    backProps?: {[prop: string]: any},
}

export const FlipPanel = ({front, back, containerClassName, className, frontClassName, backClassName, containerProps, props, frontProps, backProps}: FlipPanelProps) => {
    const [isFront, setFront] = React.useState<boolean>(true)
    const frontElement = React.useRef<HTMLElement>(null)
    const backElement = React.useRef<HTMLElement>(null)

    const flipToFront = React.useCallback(
        () => {
            setFront(true)
            if(frontElement.current) frontElement.current.inert = false
            if(backElement.current) backElement.current.inert = true
        },
        [frontElement, backElement]
    )

    const flipToBack = React.useCallback(
        () => {
            setFront(false)
            if(frontElement.current) frontElement.current.inert = true
            if(backElement.current) backElement.current.inert = false
        },
        [frontElement, backElement]
    )

    return (
        <div className={cn(style.flipPanelContainer, containerClassName)} {...containerProps}>
            <section ref={frontElement} className={cn("panel", style.flipPanel, style.flipPanelFront, {[style.flipPanelFrontVisible]: isFront}, className, frontClassName)} {...props} {...frontProps}>
                {front(flipToBack)}
            </section>
            <section ref={backElement} className={cn("panel", style.flipPanel, style.flipPanelBack, {[style.flipPanelBackVisible]: !isFront}, className, backClassName)} {...props} {...backProps}>
                {back(flipToFront)}
            </section>
        </div>
    )
}
