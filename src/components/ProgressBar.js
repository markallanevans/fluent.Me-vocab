import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import styles from '../styles/progressBarStyles'

class ProgressBar extends React.Component {
  render() {
    const { progress, total } = this.props
    const progPercent = progress / total

    return (
      <View style={styles.progressBarContainer}>
        <View style={styles.emptyBar}>
          <View style={[styles.progress, { width: 250 * progPercent }]} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  vocabList: state.vocabList,
  reviewList: state.reviewList
})

export default connect(mapStateToProps)(ProgressBar)
