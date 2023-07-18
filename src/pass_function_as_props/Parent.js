import React, { useState } from 'react'
import Child from './Child'

function Parent() {
   const [name,setName]= useState([
    {
        id:1033,
        firstName:"Durga",
        age:30
    }
   ])
const result=name.map((val)=>{
    return(
      <ol>
        <li>{val.id}</li>
        <li>{val.firstName}</li>
        <li>{val.age}</li>
      </ol>
)})

function getData(){
    // alert("I am from Odisha")
    setName([{
        id:1033453,
        firstName:"Satya N Mohapatra",
        age:60
    }])
}

  return (
    <div>
        <Child name={result} home={getData} />
    </div>
  )
}

export default Parent