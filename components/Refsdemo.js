import React, { Component } from 'react'

export class Refsdemo extends Component {
    constructor(props) {
      super(props)
    //1st creat ref varible
      this.inputRef=React.createRef()
    }
    //use ref
    componentDidMount(){
        this.inputRef.current.focus() 
    }
    clickHandler=()=>{
        console.log(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        //2nd step refer the reference varible to created varible
        <input type="text" ref={this.inputRef}/>
        <button type="submit" onClick={this.clickHandler}>click me</button>
      </div>
    )
  }
}

export default Refsdemo