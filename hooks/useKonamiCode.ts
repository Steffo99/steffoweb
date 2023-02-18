import {useCallback, useEffect, useState} from "react"


const KONAMI_CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"]


export function useKonamiCode(onDone: () => void) {
    const [remainingKeys, setRemainingKeys] = useState(() => [...KONAMI_CODE])
    const nextKey = remainingKeys?.[0];

    const checkInput = useCallback(
        (event: KeyboardEvent) => {
            if(event.code === nextKey) {
                setRemainingKeys(rem => {
                    rem = [...rem]
                    rem.shift()
                    return rem
                })
            }
            else {
                setRemainingKeys([...KONAMI_CODE])
            }
        },
        [nextKey]
    )

    useEffect(
        () => {
            if(!nextKey) {
                onDone()
                setRemainingKeys([...KONAMI_CODE])
            }
        },
        [nextKey, onDone]
    )

    useEffect(
        () => {
            document.addEventListener("keydown", checkInput)
            return () => {
                document.removeEventListener("keydown", checkInput)
            }
        },
        [checkInput]
    )
}