import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   result: 0,
    //   num1: "",
    //   num2: "",
    // };
    this.state = { num1: "", num2: "", result: 0 };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);

  }

  // your code here
  setNum1(e) {
    const num = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num1: num})
  }

  setNum1(e) {
    const num = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num2: num})
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>

      </div>
    );
  }
}

export default Calculator;