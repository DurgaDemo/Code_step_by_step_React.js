// import React from 'react'

// function Function({Emp}) {
 
//   return (
//     <div>
//         <h2>Props in Class Component</h2>
//         <h3>{Emp.firstName} {Emp.lastName} </h3>
//     </div>
//   )
// }

// export default Function



import React from 'react'

function Function(props) {
 
  return (
    <div>
        <h2>Props in Function Component</h2>
        <h3>{props.Emp.firstName} {props.Emp.lastName} </h3>
    </div>
  )
}

export default Function