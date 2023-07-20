import React from 'react'

function Users({data}) {
  return (
    <div>
    {/* Users {data.name} */}
    <ol>
        <li>{data.name}</li>
        <li>{data.email}</li>
        <li>{data.contact}</li>
    </ol>
    
    </div>
  )
}

export default Users