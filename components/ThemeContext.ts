import * as React from "react"
import { BluelibTheme } from "@steffo/bluelib-react/dist/types"


export const ThemeContext = React.createContext<[BluelibTheme, React.Dispatch<React.SetStateAction<BluelibTheme>>]>(["royalblue", undefined]);
