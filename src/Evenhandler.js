import React from "react";
const Evenhandler=()=>{
    const Ca=()=>{
        console.log("button clickked")
    }
    return (
     <div>  
       <h1>EVENT HANDLER</h1>
       <button onClick={Ca}>click</button>
    </div>
    )
}

export default Evenhandler