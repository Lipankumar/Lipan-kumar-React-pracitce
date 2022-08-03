import React, { Component } from 'react'
import Frinput from './Frinput'
class Frparentinput extends Component {
    constructor(props) {
      super(props)
    
      this.InputRef = React.createRef()
    }
    clickHandler(){
        this.InputRef.current.focus();
    }
  render() {
    return (
      <div>
        <Frinput ref={this.InputRef} />
        <button onClick={this.clickHandler.bind(this)}>Forward ref</button>
      </div>
    )
  }
}

export default Frparentinput