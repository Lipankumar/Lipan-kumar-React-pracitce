import React from 'react'

function ListRender() {
    const name=["lipan","kumar","dakua","lipan"]
    // 1st method
    const name1=name.map(name=><h1>{name}</h1>)
  return (
    <div>
        //2nd method
        {/* {name.map(name=><h1>{name}</h1>)} */}
        //1st method
        {name}
    </div>
  )
}

export default ListRender