import { useState } from "react";
function US3()
{
    const[text,settext]=useState("LJ University");
    const[c,setc]=useState("red");
    const[hsl,sethsl]=useState("Hide");
    const[hsltext,sethsltext]=useState("React Js");
    function handletext()
    {
        if(text==='LJ University')
        {
            settext("Welcome Students!");
        }
        else
        {
            settext("LJ University")
        }
    }
    function handlecolor()
    {
        if(c==="red")
        {
            setc("blue");
        }
        else
        {
            setc("red");
        }
    }
    function handlehs()
    {
        if(hsl==="Hide")
        {
            sethsl("show");
            sethsltext("");
        }
        else
        {
            sethsl("Hide");
            sethsltext("React Js");
        }
    }
    return(<>
    <button onClick={handletext}>Change Text</button>
    <button onDoubleClick={handlecolor}>Change color</button>
    <button onClick={handlehs}>{hsl}</button>
    <h1 style={{color:c}}>{text}</h1>
    <h2>{hsltext}</h2></>)
}
export default US3;