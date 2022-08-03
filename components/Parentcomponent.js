import React, { Component,PureComponent } from 'react'
import Purecomponents from "./Purecomponents";
import Regularcomponent from "./Regularcomponent";
import Memocomp from "./Memocomp";
class Parentcomponent extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"lipan"
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState ({
        name:"lipan"
     })
    }, 1000);
  }
  render() {
    console.log("parent component render")
    return (
      <div>
        Parentcomponent {this.state.name}
        <Memocomp name={this.state.name}/>
        <Purecomponents name={this.state.name} />
        <Regularcomponent name={this.state.name}/>
      </div>
    )
  }
}

export default Parentcomponent
//when we are extending pure components in parent class it doesnot re render again it avoids un necessary rendering
//before only parent and regular component rendering but noit pure not after its changed