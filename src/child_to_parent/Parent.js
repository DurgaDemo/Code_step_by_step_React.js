import React from 'react'
import Child from './Child'
function Parent() {

function parentAlert(data){
    alert(data.email)
}


  return (
    <div>Parent Component
        <Child alert={parentAlert}/>
       
    </div>
  )
}

export default Parent