import React, { useRef } from 'react'

function Uncontrolled() {
let inputref=useRef(null)
let inputref2=useRef(null)
  function submitForm(e){
   e.preventDefault()
   console.log(inputref.current.value);
   console.log(inputref2.current.value);
   let input3=document.getElementById('input3').value
   console.log(input3);
  }  
  return (
    <div>
    <h3>Uncontrolled Component</h3>

    <form onSubmit={submitForm}>
        <input type='text' ref={inputref}/><br/><br/>
        <input type='text' ref={inputref2}/><br/><br/>
        <input id='input3' type='text' /><br/><br/>
        <button>Submit</button>
    </form>

    </div>
  )
}

export default Uncontrolled