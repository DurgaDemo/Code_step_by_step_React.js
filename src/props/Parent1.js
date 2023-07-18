import React, { Component } from 'react'
import Class from './Class'

export class Parent1 extends Component {
constructor(){
    super()
    this.state={
        firstName:"Durga",
        lastName:"Mohapatra"
    }
}



Change=()=>{
    this.setState({
        firstName:"Mithun",
        lastName:"Mohapatra"
    })
}

    
  render() {
    return (
      <div>
     <Class name={this.state.firstName} name1={this.state.lastName}/>
     <button onClick={this.Change}>Click</button>

      </div>
    )
  }
}

export default Parent1