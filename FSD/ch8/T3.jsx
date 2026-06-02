import { useContext } from "react"
import {Num} from "./T1"
import {Css} from "./T2"
export default function T3()
{
    var n=useContext(Num)
    var c=useContext(Css)
    return(<>
    <h1 style={c}>
        Out of Expression n1*n2/n3 is {n.n1*n.n2/n.n3}</h1></>)
}