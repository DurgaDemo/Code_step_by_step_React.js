// import React, { Component } from "react";

// export class Class extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 1,
//     };
//   }

//   Updatestate = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     console.log("check-rerendering");
//     return (
//       <div>
//         Pure Component
//         <h4>{this.state.count}</h4>
//         <br />
//         <button onClick={this.Updatestate}>Update</button>
//       </div>
//     );
//   }
// }

// export default Class;




import React, { Component, PureComponent } from "react";

export class Class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

//   Updatestate = () => {
//     this.setState({
//       count: count + 1,
//     });
//   };

  render() {
    console.log("check-rerendering");
    return (
      <div>
        Pure Component
        <h4>{this.state.count}</h4>
        <br />
        <button onClick={()=>this.setState({count:1})}>Update</button>
      </div>
    );
  }
}

export default Class;













