import img1 from "./assets/hero.png";
import img2 from "./assets/react.svg";
import { useState } from "react";
function US2()
{
    const[count,setcount]=useState(0);
    const[image,setimage]=useState(img1);
    function handleinc()
    {
        if(count<50)
        {
            setcount(count+1)
        }
    }
    function handledec()
    {
        if(count>0)
        {
            setcount(count-1)
        }
    }
    function handleimage()
    {
        if(image===img1)
        {
            setimage(img2)
        }
        else
        {
            setimage(img1)
        }
    }
    return(<>
        <button onClick={handleinc}>Inc</button>
        <button onClick={handledec}>Dec</button>
        <h1 > Your count is: {count}</h1>
        <button onClick={handleimage}>Change Image</button>
        <img src ={image} width="300"/></>)
    }
    export default US2;
