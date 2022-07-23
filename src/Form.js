import React, {Component} from "react";
class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            UserName:'',
            stream:"CSE",
            Email:''
        }
    }
    handleusername=(event)=>{
        this.setState({
            UserName:event.target.value
        })
    }
    handleemail=(event)=>{
        this.setState({
            Email:event.target.value
        })
    }

    handleTopicChange =(event)=>{
        this.setState({
            stream:event.target.value
        })

    }
    handleSubmit=event=>{
        alert(`${this.state.UserName} ${this.state.Email} ${this.state.stream}`)
    }
    render(){
        return (
           <form onSubmit={this.handleSubmit}>
              <div>
                <label>UserName</label>
                <input type="text"  
                value={this.state.UserName} 
                onChange={this.handleusername}
                placeholder="starting letter as capital"/>
              </div>
              <div>
                <label>Email</label>
                <input type="text" 
                value={this.state.Email} 
                onChange={this.handleemail}
                placeholder="ex:baggu@gmail.com"/>
              </div>
              <div>
                <label>stream</label>
                <select value={this.state.stream} onChange={this.handleTopicChange}>
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>MECH</option>
                    <option>CIVIL</option>
                    <option>CST</option>
                </select>
              </div>
              <button type="submit">Button</button>
              <button>reset</button>
           </form>
        )
    }
}
 
export default Form;
