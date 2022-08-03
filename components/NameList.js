import React from 'react'

function NameList() {
    const person=[
        {
            id:1,
            name:"lipan",
            age:30
        },
        {
            id:2,
            name:"kumar",
            age:25
        },
        {
            id:3,
            name:"dakua",
            age:27
        }
    ]
    const person1=person.map(person=><h1>person key={person.id} name is{person.name}.id is{person.id}.age is{person.age}</h1>)
  return (
    <div>{person1}</div>
  )
}

export default NameList