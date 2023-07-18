import React, { useState } from 'react'

function Function() {
   
  const [data,setData]=useState(null)  

function getData(event){
  setData(event.target.value)
}


  return (
    <div>
        <h2>Get Input Box Value</h2>
        <h3>{data}</h3>
        <input type='text' onChange={getData}/>
    </div>
  )
}

export default Function