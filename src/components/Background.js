import React from "react";
import PropTypes from "prop-types";

class Background extends React.Component {
	static propTypes = {
		children: PropTypes.any,
		image: PropTypes.string,
		locationIndex: PropTypes.number,
	};
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
