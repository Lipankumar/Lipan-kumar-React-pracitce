import React from 'react'
//memocomponents created using function
function Memocomp({name}) {
  console.log("memo comp")
  return (
    <div>Memocomp {name}</div>
  )
}

export default Memocomp