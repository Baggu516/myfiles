import React, { Component } from "react";
class Statee extends Component{
    constructor(){
        super()
            this.state={
                msg:0
            }
    }
    cM(){
        this.setState({
            msg:this.state.msg+1
        })
    }
    render(){
        return (
         <div>  
        <h1>count--{this.state.msg}</h1>
        <button onClick={()=>this.cM()}>click</button>
        </div>
        )
    }
}
export default Statee