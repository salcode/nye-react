import React from "react";
import Celebrate from './Celebrate';
import Counter from './Counter';
import Background from './Background';
import { calcRemainingSeconds, getHourMinuteSecond, getLocationInfo } from "../helpers";

class App extends React.Component {
  state = {
    remainingSeconds: 3666,
  };

  tick = () => {
    const remainingSeconds = calcRemainingSeconds(
      this.props.endTimestamp,
      Date.now()
    );
    if (remainingSeconds === this.state.remainingSeconds) {
      // No need to update (we are part way through a second).
      return;
    }
    this.setState( {remainingSeconds} );
  }

  componentDidMount() {
    this.tick();
    this.interval = setInterval(
      this.tick,
      this.props.delay || 100
    )
  };

  render() {
    const {hours, minutes, seconds} = getHourMinuteSecond(
      this.state.remainingSeconds
    );
    const isCelebrating = minutes === 59 && seconds > (60 - this.props.celebrationDuration);
    if (isCelebrating) {
      const {name, image} = getLocationInfo(hours+1);
      return (
        <Background image={image}>
          <h1 className="location">{name}</h1>
          <Celebrate message="Happy New Year!" />
        </Background>
      );
    }
    const {name, image} = getLocationInfo(hours);
    return (
      <Background image={image}>
        <h1 className="location">{name}</h1>
        <Counter
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </Background>
    )
  };
}

export default App;
