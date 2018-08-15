import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from '../../styles/styles'
import WordBox from '../WordBox'
import ProgressBar from '../ProgressBar'
import TextButton from '../buttons/TextButton'
import VocabTools from './VocabTools'
import AnimationThumbsUp from '../animations/AnimationThumbUp'

class NewVocab extends React.Component {
  componentWillMount() {
    this.props.loadWords(this.props.category)
  }

  render() {
    const newWordsOnlyList = Object.values(this.props.vocabList).filter(
      w => w.toReview === false
    )
    const listToShow = newWordsOnlyList.slice(0, 3)

    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          {listToShow.length > 0 ? (
            listToShow.map(word => (
              <View key={word.id}>
                <WordBox word={word} />
                <VocabTools id={word.id} word={word.English} />
              </View>
            ))
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <View>
                <Text style={styles.header}>That&apos;s all for now!</Text>
              </View>
              <View style={{ height: 350, width: 350 }}>
                <AnimationThumbsUp />
              </View>
            </View>
          )}
        </View>
        {listToShow.length > 0 && (
          <ProgressBar
            progress={Object.values(this.props.reviewList).length}
            total={Object.values(this.props.vocabList).length}
          />
        )}
        {listToShow.length > 0 ? (
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              margin: 20,
              textAlign: 'center'
            }}>
            Tap pictures to see the English word. Click checkbox when you know
            it.
          </Text>
        ) : (
          <TextButton
            text="Review Time!"
            navTo="VocabReview"
            navigation={this.props.navigation}
          />
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  vocabList: state.vocabList,
  reviewList: state.reviewList,
  category: state.sentenceStore.currentCategoryTitle
})

const mapDispatchToProps = dispatch => ({
  loadWords: category => dispatch({ type: 'LOAD_WORDS', category })
})

NewVocab.propTypes = {
  vocabList: PropTypes.object.isRequired,
  reviewList: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewVocab)
