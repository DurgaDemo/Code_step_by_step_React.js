/*
-> Ref is used for dom manipulation


*/

import React, { Component, createRef } from 'react'

export class Class extends Component {

constructor() {
  super()

this.inputRef=createRef()
  }
componentDidMount(){
    // console.log(this.inputRef.current.value="Durga");
}
 getVal=()=>{
   console.log(this.inputRef.current.value);
   this.inputRef.current.style.color="red"
   this.inputRef.current.style.backgroundColor="black"
 }

  render() {
    return (
      <div>
        <h2>Ref in Class Component</h2>
         <input type='text' ref={this.inputRef}/><br/>
         <button onClick={this.getVal}>Check Ref</button>

     

      </div>
    )
  }
}

export default Class