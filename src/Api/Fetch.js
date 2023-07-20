import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Fetch() {
    const URL="https://jsonplaceholder.typicode.com/users"
  const [data,setData]=useState([])


  useEffect(()=>{
    axios.get(URL)
    .then((response)=>{
        // console.log(response);
        setData(response.data)
        })
    .catch((error)=>{
     console.log(error);
    })
  })


   
   

  return (
    <div>Fetch

{
    data.map((res)=>{
        return(
            <ol>
                <li>{res.id}</li>
                <li>{res.name}</li>
            </ol>
        )
    })
}
    </div>
  )
}

export default Fetch