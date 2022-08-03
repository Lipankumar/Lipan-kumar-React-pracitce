import React, { Component } from 'react'
//adding event listener class components
 class Classexample extends Component {
    increment(){
        console.log("u r hero");
    }
  render() {
    return (<div>


      <div>classexample</div>
      <button onClick={this.increment}>button</button>
    </div>

    
    )
  }
}

export default Classexample