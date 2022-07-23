import React from "react";
const Function1=props => {
    console.log(props)
    return (
        <h1>welcome {props.name} {props.lastName}</h1>
    )
}
export default Function1;