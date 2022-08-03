import React, { Component } from 'react'

class Regularcomponent extends Component {
  render() {
    console.log("regular component render")
    return (
      <div>Regularcomponent {this.props.name}</div>
    )
  }
}

export default Regularcomponent