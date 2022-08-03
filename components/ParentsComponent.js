import React, { Component } from 'react'
import   ChildComponents  from './ChildComponents'
class ParentsComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "lipan"
      }
      this.addName=this.addName.bind(this)
    }
    addName(){
        console.log(`kumar ${this.state.name}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponents addNameHandler={this.addName}/>
      </div>
    )
  }
}

export default ParentsComponent