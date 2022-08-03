import React, { Component } from 'react'

class ConditiionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:true
      }
    }
  render() {
    //1st method
    // if(this.state.name){
    //     return <div>lipan</div>
    // }
    // else{
    //    return <div>kumar</div>
    // }
    //2nd method
    // let message
    // if(this.state.name){
    //     return message=<div>lipan</div>
    // }
    // else{
    //    return message=<div>kumar</div>
    // }
    //3rd method
    return this.state.name && <div>lipan</div>
  }
}

export default ConditiionalRendering