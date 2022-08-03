import React, { Component } from 'react'

class Controlledcomponents extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:"",
           topic: "javaScript"
        }
    }
    changeName=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    changeTopic=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    Handlesubmit=(event)=>{
        alert(`${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    
    return (
 
        <form onSubmit={this.Handlesubmit}>
            {/* <div>
                <label>Name:</label>
                <input type="text" val={this.state.name} onChange={this.changeName}></input>
            </div> */}
            <div>
              
                <label>course:</label>
                <select value={this.state.topic} onChange={this.changeTopic}>
                    <option value="react">React</option>
                    <option value="javaScript">javaScript</option>   
                    
                </select>
            </div>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
     
    )
  }
}

export default Controlledcomponents