import React from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

const animationsrc = require('../animations/checked_done_.json');

export default class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 2,
      duration: 5000,
      easing: Easing.linear,
    }).start();
  }

  render() {
    return (
      <LottieView source={animationsrc} progress={this.state.progress} />
    );
  }
}
