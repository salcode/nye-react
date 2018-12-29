import React from "react";
import sizeMe from 'react-sizeme'
import Confetti from 'react-confetti'
import PropTypes from "prop-types";

const Celebrate = sizeMe({
  monitorHeight: true,
  monitorWidth: true,
})(class MyConfetti extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    size: PropTypes.shape({
      height: PropTypes.number,
      width:  PropTypes.number,
    }),
  };
  render() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <h1 className="celebration-message">{this.props.message}</h1>
        <Confetti {...this.props.size} />
      </div>
    )
  };
})

export default Celebrate;
