import React, { Component } from 'react'

class Bind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "lipan"
      }
      this.changename=this.changename.bind(this)
    }
    // changename(){
    //     this.setState({
    //         name:"kumar"
           
    //     })
        
    // }
    changename=()=>{
        this.setState({
                    name:"kumar"
                   
                })
    }
  render() {
    return (
    <div>
        <div>{this.state.name}</div>
        {/* //1st method */}
        {/* <button onClick={this.changename.bind(this)}>Change state</button> */}
        {/* //2nd method */}
        <button onClick={this.changename}>Change state</button>
    </div>
        
    )
  }
}

export default Bind