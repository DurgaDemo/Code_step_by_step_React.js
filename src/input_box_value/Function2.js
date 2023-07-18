import React, { useState } from 'react'

function Function2() {

const [name,setName]=useState("")
const [tnc,setTnc]=useState(false)
const [interst,setInterest]=useState("")



function getFormData(event){
    console.log(name,interst,tnc);
   event.preventDefault()
}

  return (
    <div>
        <h2>Handle Form in React</h2>
     <form onSubmit={getFormData}>
     <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <select onChange={(e)=>setInterest(e.target.value)}>
            <option>Select Option</option>
            <option>Marvel</option>
            <option>DC</option>
        </select><br/><br/>
        <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/><span>Tearm & Condition</span>
        <br/><br/>
        <button type='submit'>Submit</button>


     </form>



        
    </div>
  )
}

export default Function2