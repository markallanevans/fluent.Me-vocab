import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import StepIndicator from 'react-native-step-indicator'
import { $secondaryRed, $primaryRed, $primaryWhite } from '../styles/styles'

const labels = ['Vocab', 'VocabReview', 'Sentences']
const customStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: $secondaryRed,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: $secondaryRed,
  stepStrokeUnFinishedColor: $primaryWhite,
  separatorFinishedColor: $secondaryRed,
  separatorUnFinishedColor: $primaryRed,
  stepIndicatorFinishedColor: $secondaryRed,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 8,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: $primaryRed,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: $primaryRed,
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: $secondaryRed
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
