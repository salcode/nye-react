import React from "react";
import Celebrate from './Celebrate';
import Counter from './Counter';
import Background from './Background';
import { calcRemainingSeconds, getHourMinuteSecond } from "../helpers";

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
      const {name, image} = this.getLocationInfo(hours+1);
      return (
        <Background image={image}>
          <h1 className="location">{name}</h1>
          <Celebrate message="Happy New Year!" />
        </Background>
      );
    }
    const {name, image} = this.getLocationInfo(hours);
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
  getLocationInfo = (hours) => {
    const normalizedIndex = this.normalizeIndex0to23(hours);
    return this.readLocationJSON(normalizedIndex);
  };
  normalizeIndex0to23 = (index) => {
    if(index<0) {
      return 24 + index % 24;
    }
    return index % 24;
  };
  readLocationJSON = (index) => {
    const locationData = {
      '15': {
        'name': 'Anchorage, AK',
        'image': 'images/missing.jpg'
      },
      '16': {
        'name': 'Carson City, NV',
        'image': 'images/missing.jpg'
      },
      '17': {
        'name': 'Albuquerque, NM',
        'image': 'images/missing.jpg'
      },
      '18': {
        'name': 'Chicago, IL',
        'image': 'images/missing.jpg'
      },
      '19': {
        'name': 'Reading, PA',
        'image': 'images/reading-pa.jpg'
      },
      '20': {
        'name': 'Halifax, Nova Scotia, Canada',
        'image': 'images/halifax-nova-scotia.jpg',
        'imageSource': 'https://pixabay.com/en/halifax-nova-scotia-canada-city-2380861/'
      },
      '21': {
        'name': 'Buenos Aires, Argentina',
        'image': 'images/buenos-aires-argentia.jpg',
        'imageSource': 'https://www.flickr.com/photos/gameoflight/10363371446'
      },
      '22': {
        'name': 'Rio de Janeiro, Brazil',
        'image': 'images/rio-de-janeiro-brazil.jpg',
        'imageSource': 'https://pixabay.com/en/rio-de-janeiro-brazil-city-urban-1963744/'
      },
      '23': {
        'name': 'Praia, Cape Verde',
        'image': 'images/praia-cape-verde.jpg',
        'imageSource': 'https://commons.wikimedia.org/wiki/File:Praia_aerial.jpg'
      },
      '0': {
        'name': 'London, England',
        'image': 'images/london-england.jpg',
        'imageSource': 'http://maxpixel.freegreatpicture.com/London-England-Clock-Big-Ben-Parliament-2626787'
      },
      '1': {
        'name': 'Berlin, Germany',
        'image': 'images/berlin-germany.jpg',
        'imageSource': 'https://pixabay.com/en/berlin-germany-berlin-cathedral-2975784/'
      },
      '2': {
        'name': 'Cairo, Egypt',
        'image': 'images/cairo-egypt.jpg',
        'imageSource': 'https://commons.wikimedia.org/wiki/File:Pyramid_and_sphinx_of_cairo,_egypt.jpg'
      },
      '3': {
        'name': 'Moscow, Russia',
        'image': 'images/moscow-russia.jpg',
        'imageSource': 'http://maxpixel.freegreatpicture.com/Capital-Moscow-Russia-Kremlin-Historically-538791'
      },
      '4': {
        'name': 'Tehran, Iran',
        'image': 'images/missing.jpg',
      },
      '5': {
        'name': 'Kabul, Afghanistan',
        'image': 'images/missing.jpg',
      },
      '6': {
        'name': 'Dubai, United Arab Emirates',
        'image': 'images/missing.jpg',
      },
      '7': {
        'name': 'Karachi, Pakistan',
        'image': 'images/missing.jpg',
      },
      '8': {
        'name': 'Omsk, Russia',
        'image': 'images/missing.jpg',
      },
      '9': {
        'name': 'Ho Chi Minh, Vietnam',
        'image': 'images/missing.jpg',
      },
      '10': {
        'name': 'Beijing, China',
        'image': 'images/missing.jpg',
      },
      '11': {
        'name': 'Kyoto, Japan',
        'image': 'images/missing.jpg',
      },
      '12': {
        'name': 'Ipswich, Australia',
        'image': 'images/missing.jpg',
      },
      '13': {
        'name': 'Sydney, Australia',
        'image': 'images/missing.jpg',
      },
      '14': {
        'name': 'Auckland, New Zealand',
        'image': 'images/missing.jpg',
      },
    };
    return locationData[index] || {
      'name': 'test '+index,
      'image': 'images/test.jpg',
    };
  };
}

export default App;
