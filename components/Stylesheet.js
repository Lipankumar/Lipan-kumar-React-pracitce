import React from 'react'
import "./Style.css"
function Stylesheet(props) {
    let id=props.name ? "name" : ""
    const head={
        color:"blue",
        fontSize:"100px"
    }
  return (
    <div>
        //external
        {/* <h1 id="name">lipan</h1> */}
        {/* <h1 id={`${id} font-xl`}>lipan</h1> */}
        //inline
        <h1 style={head}>lipan</h1>
    </div>
  )
}

export default Stylesheet