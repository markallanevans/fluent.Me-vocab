import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../../styles/styles'
import PointDetails from './PointDetails'

const PointsScreen = ({
  expPoints,
  wordsStudied,
  sentencesStudied,
  sentencesReviewed
}) => {
  const elements = [
    { id: 0, title: 'Experience Points', content: expPoints },
    { id: 1, title: 'Words Studied', content: wordsStudied },
    { id: 2, title: 'Sentences Studied', content: sentencesStudied },
    { id: 3, title: 'Sentences Reviewed', content: sentencesReviewed }
  ]

  return (
    <View style={styles.container}>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
        <View style={{ height: 100 }} />
        {elements.map(element => (
          <PointDetails
            key={element.id}
            title={element.title}
            content={element.content}
          />
        ))}
      </View>
    </View>
  )
}

PointsScreen.propTypes = {
  expPoints: PropTypes.number.isRequired,
  wordsStudied: PropTypes.number.isRequired,
  sentencesStudied: PropTypes.number.isRequired,
  sentencesReviewed: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  expPoints: state.studyStats.expPoints,
  wordsStudied: state.studyStats.wordsStudied,
  sentencesStudied: state.studyStats.sentencesStudied,
  sentencesReviewed: state.studyStats.currentSentenceIndex
})

export default connect(mapStateToProps)(PointsScreen)
