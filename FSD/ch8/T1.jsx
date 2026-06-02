import React, { createContext } from 'react';
import T2 from './T2';
const Num =createContext()
export default function T1()
{
    const obj ={n1:7,n2:6,n3:2}
    return(<>
    <Num.Provider value ={obj}>
        <T2/>
    </Num.Provider>
    </>)
}
export {Num}