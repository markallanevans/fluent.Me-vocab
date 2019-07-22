import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import StepIndicator from 'react-native-step-indicator'
import { Colors } from '../styles/theme/'

const labels = ['Vocab', 'VocabReview', 'Sentences']
const customStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: Colors.$secondaryRed,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: Colors.$secondaryRed,
  stepStrokeUnFinishedColor: Colors.$primaryWhite,
  separatorFinishedColor: Colors.$secondaryRed,
  separatorUnFinishedColor: Colors.$primaryRed,
  stepIndicatorFinishedColor: Colors.$secondaryRed,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 8,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: Colors.$primaryRed,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: Colors.$primaryRed,
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: Colors.$secondaryRed
}

const getCurrentScreenName = nav => {
  const currentRoute = nav.routes[nav.index]
  if (currentRoute.index) {
    return getCurrentScreenName(currentRoute)
  }
  return currentRoute.routeName
}

const StepBar = ({ currentScreenName }) => (
  <View style={{ width: 300, marginTop: 40 }}>
    <StepIndicator
      customStyles={customStyles}
      stepCount={3}
      currentPosition={labels.indexOf(currentScreenName)}
      labels={labels}
    />
  </View>
)

const mapStateToProps = state => ({
  currentScreenName: getCurrentScreenName(state.nav),
  currentScreenIndex: state.nav.index
})

StepBar.propTypes = {
  currentScreenName: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(StepBar)
