import React, { Component } from 'react'

class State extends Component {
    constructor(){
        super()
        this.state ={
            name: "lipan"
        }
    }
    changename(){
        this.setState({
            name:"kumar"
        })
    }
  render() {
    return (
        <div>
            <div>{this.state.name}</div>
            <button onClick={()=>this.changename()}>Change state</button>
        </div>
      
    )
  }
}

export default State