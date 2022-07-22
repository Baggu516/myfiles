import React from "react";
import A from "./A";
const Arrmap=()=>{
    const ar=[
        {
        roll2:1},
        {
           roll2: 2
        },
        {
            roll2:3
        }
    ]
    const res=ar.map(a=> <A  key={a.roll2} a={a}/> )
    return <div>{res}</div>
}

export default Arrmap;