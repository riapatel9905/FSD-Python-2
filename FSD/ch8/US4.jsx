import { useState } from "react";
import img1 from "./assets/hero.png"
import img2 from "./assets/sun.png"
import img3 from "./assets/sun1.png"
import img4 from "./assets/sun3.png"
import img5 from "./assets/moon.png"
function US4()
{
    const arr=[img1,img2,img3,img4,img5];
    const[image,setimage]=useState(arr[0])
    function handleimage()
    {
        const i=Math.floor(Math.random() * arr.length)
        setimage(arr[i]);
    }
    return(<>
    <img src={image} width="300" height="300"/>
    <button onClick={handleimage}>Change Image</button></>)
}
export default US4;