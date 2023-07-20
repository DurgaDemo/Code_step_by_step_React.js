// usememo and pure component is used to enhance our application
// whenever we are working with state and props some unwanted function will reder 
// for that in function component usememo will use


import React, { useState ,useMemo} from 'react'

function UseMemo() {

const [count,setCount]=useState(0)
const [item,setItem]=useState(10)



// function multiCount(){
//     console.log("MultiCount");
//     return count * 5
// }


const multicountMemo=useMemo(function multiCount(){
    console.log("MultiCount");
    return count * 5
},[count])





  return (
    <div>UseMemo Hooks In React
    
    <h2>Count: {count}</h2>
    <h2>Item: {item}</h2>
    {/* <h2>{multiCount()}</h2> */}
    <h2>{multicountMemo}</h2>
 
  <button onClick={()=>{setCount(count+1)}}>Update Count</button>
  <button onClick={()=>{setItem(item*10)}}>Update Item</button>
    </div>
  )
}

export default UseMemo