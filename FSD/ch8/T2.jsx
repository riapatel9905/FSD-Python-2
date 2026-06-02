import { createContext } from "react"
import T3 from "./T3"
const Css=createContext()
export default function T2()
{
    const mycss={color:"orange",fontSize:"50px"}
    return(<>
    <Css.Provider value={mycss}>
        <T3/>
        </Css.Provider></>)
}
export {Css}