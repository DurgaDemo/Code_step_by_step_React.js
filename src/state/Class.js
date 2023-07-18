import React, { Component } from 'react'

export class Class extends Component {

constructor(){
    super()
    this.state={
        id: 10,
      name: "Durga",
      age: 30,
    }
}

Changeadress=()=>{
    this.setState({
        id: 101,
        name: "Durga Mohapatra",
        age: 50,
    })
}


  render() {
    return (
      <div>
        <h2>State In Class Component</h2>
        <ol>
            <li>{this.state.id}</li>
            <li>{this.state.name}</li>
            <li>{this.state.age}</li>
        </ol>
        <button onClick={this.Changeadress}>Click</button>
        </div>
    )
  }
}

export default Class