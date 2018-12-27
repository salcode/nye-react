import React from "react";

class Counter extends React.Component {
  addLeadingZero = (num) => {
    if (num<10) {
      return '0' + num;
    }
    return num;
  };

  render() {
    return (
      <div className="counter">
        {this.addLeadingZero(this.props.minutes)}
        :
        {this.addLeadingZero(this.props.seconds)}
      </div>
    )
  };
}

export default Counter;
