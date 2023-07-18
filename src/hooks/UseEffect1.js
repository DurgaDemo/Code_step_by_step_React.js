import React, { useEffect } from 'react'
import axios from 'axios'

function UseEffect1() {

const URL="https://jsonplaceholder.typicode.com/users"

 useEffect(()=>{
    axios.get(URL)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
})

  return (
    <div>UseEffect Api Calling
       


    </div>
  )
}

export default UseEffect1