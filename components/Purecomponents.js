import React, { PureComponent } from 'react'

class Purecomponents extends PureComponent {
  render() {
    console.log("pure component render")
    return (
      <div>Purecomponents {this.props.name}</div>
    )
  }
}

export default Purecomponents