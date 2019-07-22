import React from 'react'
import { Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'
import LottieView from 'lottie-react-native'

const animationSource = require('../../../assets/animations/check.json')

export default class AnimationCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 2,
      duration: 5000,
      easing: Easing.linear
    }).start(this.props.onDone)
  }

  render() {
    return (
      <LottieView source={animationSource} progress={this.state.progress} />
    )
  }
}

AnimationCheck.propTypes = {
  onDone: PropTypes.func.isRequired
}
