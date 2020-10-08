import React, { Component } from "react";
import "./App.css";

// function Surya(props) {
//   return (
//     <h2>
//       {props.name} role is {props.role}
//     </h2>
//   );
// }

// class Surya extends React.Component {
//   render() {
//     return (
//       <h2>
//         {this.props.name} Role is : {this.props.role}
//       </h2>
//     );
//   }
// }

class Surya extends Component {
  constructor() {
    super();
    this.state = {
      name: "Surya",
      secondname: "venkat",
      number: 0,
    };
  }

  changeState = () => {
    this.setState({
      name: "hanuman",
      secondname: "kumar",
      number: this.state.number + 1,
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h1>{this.state.secondname}</h1>
        <h1>{this.state.number}</h1>
        <button onClick={this.changeState}>Click me</button>
      </div>
    );
  }
}

export default Surya;
