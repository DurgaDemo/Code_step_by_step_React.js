import React, { Component } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";
export class Mounting extends Component {
  constructor(props) {
    super(props);
    console.log("constructor calling");
  }

  componentDidMount() {
    console.log("component did mount calling");
    axios.get(URL)
      .then((respone) => {
        console.log(respone.data.map((val) => {
            return val.name;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log("render calling");
    return <div>component did mount</div>;
  }
}

export default Mounting;
