import React from 'react'
import Users from './Users'

function Array3() {

const users=[
    {
        name:"Durga",
        email:"durga@123",
        contact:111
    },

    {
        name:"Mithun",
        email:"mithun@12345",
        contact:333
    },
    {
        name:"Peter",
        email:"peter@12",
        contact:111
    },
    {
        name:"Peter",
        email:"peter@12",
        contact:999
    }
]


  return (
    <div>
        <h2> How to Reuse Component with list</h2>
         {
        users.map((item)=>{
         return <Users data={item}/>
        })
    }
    </div>
  )
}

export default Array3