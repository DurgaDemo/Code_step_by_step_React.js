import React, { Component } from 'react'

export class Constructor extends Component {

constructor(props) {
  super(props)

console.log("constructor Calling");
}

  render() {
    console.log("Render method Calling");
    return (
      <div>Constructor</div>
    )
  }
}

export default Constructor