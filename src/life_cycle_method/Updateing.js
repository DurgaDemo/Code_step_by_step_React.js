import React, { Component } from 'react'

export class Updateing extends Component {

constructor(props) {
  super(props)
console.log("constructor calling");
  this.state = {
     firstName:"Durga",
     age:30
  }
}

Changename=()=>{
  this.setState({
    firstName:"Satya Narayan",
    age:60
  })
}



componentDidMount(){
    console.log("component DidMount calling");
}

componentDidUpdate(){
    console.log("component DidUpdate calling");

    
}

  render() {
    console.log("Render calling");
    return (
      <div>component DidUpdate

     <h2>My Name Is {this.state.firstName} and age is {this.state.age}</h2>
     <button onClick={this.Changename}>Update</button>

      </div>
    )
  }
}

export default Updateing