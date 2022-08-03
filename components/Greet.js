//import React from "react"
//example of function components
//const greet=()=><h1>Hi Lipan</h1>
// function greet() {
//     return <h1>Hi Lipan Kumar</h1>
// }
// export default greet
//export const greet=()=><h1>Hi Lipan</h1>
//adding event listener to function components


function Greet() {
    function increment(params) {
        console.log("increment using function components")
    }
  return (
    <div>
        <div>
            
            <button onClick={increment} id="btn">click here</button>
        </div>
    </div>
  )
}

export default Greet