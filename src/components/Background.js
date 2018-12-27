import React from "react";

class Background extends React.Component {
  render() {
    return (
      <div className="background" style={{backgroundImage: `url(${this.props.image})`}}>
        <h3>{this.props.locationIndex}</h3>
        {this.props.children}
      </div>
    )
  };
}

export default Background;
