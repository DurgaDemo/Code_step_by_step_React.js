import React from 'react'

function Child(props) {

    const user={
        id:101,
        email:"durga@123",
        age:30
    }
  return (
    <div>
        Child Component
          {/* {()=>props.user} */}
          <button onClick={()=>props.alert(user)}>Click</button>
           
        
        </div>
  )
}

export default Child