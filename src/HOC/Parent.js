import React, { useState } from 'react'

function Parent() {
  return (
    <div>
        <h2>HOC</h2>
      <HOC cmp={Counter}/>
      <HOCRed cmp={Counter}/>
    </div>
  )
}

function HOC(props){
    return <h2><props.cmp/></h2>
}

function HOCRed(props){
    return <h2 style={{backgroundColor:"red",width:100}}><props.cmp/></h2>
}


function Counter(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}



export default Parent