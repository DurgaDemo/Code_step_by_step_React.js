import React, { useState } from 'react'

function Function() {

// const [loggedin,setLoggedin]=useState(true)

const [loggedin,setLoggedin]=useState(2)


function Logg(){
    setLoggedin(!loggedin)
}

  return (
    <div>
        <h2>Conditional Rendering</h2>
       
     {
        // loggedin?<h2>Welcome Durga</h2>:<h2>Welcome Guest</h2>

        loggedin===1?<h2>Welcome User1</h2>
        :loggedin===2?<h2>Welcome user2</h2>
        :<h2>Welcome Guest</h2>
     }
      <br/><br/>
      <button onClick={Logg}>Click</button>

    </div>
  )
}

export default Function