import React, { useRef } from 'react'
import Child from './Child'
function Parent() {
    let inputRef=useRef(null)

function UpdateInput(){
    inputRef.current.value="Durga"
    inputRef.current.style.color="blue"
}

  return (
    <div>Forward ref in React

    <Child ref={inputRef}/>    
    <button onClick={UpdateInput}>Update Input Box</button>
    </div>
  )
}

export default Parent