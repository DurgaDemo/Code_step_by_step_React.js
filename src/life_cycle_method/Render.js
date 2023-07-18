import React, { Component } from 'react'

export class Render extends Component {

constructor(props) {
  super(props)

  this.state = {
     firstName:"Durga Mohapatra"
  }
}

Changename=()=>{
    this.setState({
        firstName:"Mithun Mohapatra"
})
}


  render() {
    console.log("Render Calling");
    return (
      <div>
        Render Method
        
        <h3>Hi My Name is {this.state.firstName}</h3>
        <br/>
        <button onClick={this.Changename}>Change</button>
        
        </div>
    )
  }
}

export default Render