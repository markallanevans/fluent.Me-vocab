import React from 'react'
import { Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'
import LottieView from 'lottie-react-native'

const animationSource = require('../../../assets/animations/search.json')

export default class AnimationSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.quad
    }).start()
  }

  render() {
    return (
      <LottieView source={animationSource} progress={this.state.progress} />
    )
  }
}

AnimationSearch.propTypes = {
  onDone: PropTypes.func.isRequired
}
