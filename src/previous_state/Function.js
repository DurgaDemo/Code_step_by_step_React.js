import React, { useState } from 'react'

function Function() {
    const [count,setCount]=useState(1)

    function UpdateCounter(){
        setCount(count+1)
    }
  return (
    <div>
        <h3> Get The Previous State</h3>
        {count}<br/>
        <button onClick={UpdateCounter}>Update</button>

    </div>
  )
}

export default Function