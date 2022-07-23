  import React, { Component } from "react";
class Conditional extends Component {
    constructor(props){
        super(props)
            this.state={
                isLoggedIn:true
            }
        }
    render(){
        return this.state.isLoggedIn ? 
            (<div><h1>hey</h1></div>):
            (<h1>hello</h1>)

    }
}

export default Conditional;