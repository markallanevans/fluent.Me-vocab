import React from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

export default class AnimationDone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start();
  }

  render() {
    return (
      <LottieView source={require('../animations/like.json')} progress={this.state.progress} />
    );
  }
}
