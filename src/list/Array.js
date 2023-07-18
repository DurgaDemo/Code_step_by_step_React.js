import React from 'react'

function Array() {

// const students=["Durga","Mithun","Sam","Anil"]


const employee=[
    {
        name:"Durga",
        email:"durga@123",
        contact:7411
    },

    {
        name:"Mithun",
        email:"mithun@12345",
        contact:9876
    },
    {
        name:"Peter",
        email:"peter@12",
        contact:9854
    }
]


// students.map((item)=>{
//     console.log( "output using map function "+item);
//     return item
// })


// for(let i=0;i<students.length;i++){
//     console.log("output using for loop "+students[i]);
// }

  return (
    <div> 
    Handle Array With List
<br/>

    {/* {
        students.map((item)=>{
            return  <h2 key={item}> Name Is : {item}</h2>
        })
    } */}

     {
        employee.map((emp)=>{
               return(
                <>
                <ul>
                    <li>{emp.name}</li>
                    <li>{emp.email}</li>
                    <li>{emp.contact}</li>
                </ul>
                </>
               )
        })
     }



        </div>
  )
}

export default Array