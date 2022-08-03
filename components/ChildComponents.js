import React from 'react'

function ChildComponents(props) {
  return (
    <button onClick={props.addNameHandler}>Full name</button>
  )
}

export default ChildComponents