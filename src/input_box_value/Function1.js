import React, { useState } from 'react'

function Function1() {
    const [status,setStatus]=useState(false)
  return (
    <div>
        {
            status?<h1>Hello World</h1>:null
        }
        <h1>Show and Hide</h1>
        {/* <button onClick={()=>{setStatus(true)}}>Show</button>
        <button onClick={()=>{setStatus(false)}}>Hide</button> */}
        
        <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}

export default Function1