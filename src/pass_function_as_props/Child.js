import React from 'react'

function Child({name,home}) {
  return (
    <div>
         {name}
        <button onClick={home}>Call Data</button>
    </div>
  )
}

export default Child