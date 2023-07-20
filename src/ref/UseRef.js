/*
-> By using useRef we can minipulate our dom it's means 
we can change our dom behaviour.

*/

import React, { useRef } from 'react'

function UseRef() {
    let inputRef=useRef(null)

function HandleInput(){
    console.log("function Call");
    inputRef.current.value="Durga"
    inputRef.current.focus()
    inputRef.current.style.color="red"
    // inputRef.current.style.display="none"
   
}

  return (
    <div>
        <h2>UseRef in function component</h2>
        <input type='text' ref={inputRef}/><br/>
        <button onClick={HandleInput}>Handle Input</button>
        </div>
  )
}

export default UseRef