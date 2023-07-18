import React from 'react'

function Array1() {

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
     {
      
      users.map((item)=>{
          return item.contact===111?
           <ol>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.contact}</li>
           </ol>: null
        })
     }

    </div>
  )
}

export default Array1