import React from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles, {
  $secondaryWhite,
  $tertiaryRed,
  $secondaryRed,
  $primaryWhite
} from '../styles/styles'

const $placeHolderBlue = '#014ea5'

const boxStyles = StyleSheet.create({
  newWordBox: {
    width: 200,
    height: 50,
    textAlign: 'center',
    backgroundColor: $secondaryWhite,
    borderColor: $secondaryRed,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 24
  },
  newSentenceBox: {
    width: 300,
    height: 200,
    textAlign: 'center',
    backgroundColor: $secondaryWhite,
    borderColor: $secondaryRed,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 24,
    flexWrap: 'wrap'
  }
})

class AddWords extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wordToAdd: 'empty',
      sentenceToAdd: '',
      category: this.props.currentCategory,
      wordsAdded: 0
    }
  }

  clickHandler(wordToAdd, sentenceToAdd, category) {
    this.props.addNewWordToStore(wordToAdd, sentenceToAdd, category)
    this.setState({
      wordsAdded: this.state.wordsAdded + 1
    })
  }

  render() {
    const { wordToAdd, sentenceToAdd, category } = this.state
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ height: 50 }} />
          <Text style={styles.header}>Add new Words</Text>
          <Text style={{ color: $primaryWhite, fontSize: 18, padding: 10 }}>
            Add your own vocabulary to any category, or create a new category.
          </Text>
          <View style={{ margin: 10 }}>
            <TextInput
              placeholder="your word..."
              placeholderTextColor={$placeHolderBlue}
              style={boxStyles.newWordBox}
              onEndEditing={e =>
                this.setState({ wordToAdd: e.nativeEvent.text.toLowerCase() })
              }
            />
          </View>
          <View style={{ margin: 10 }}>
            <TextInput
              placeholder="your sentence..."
              placeholderTextColor={$placeHolderBlue}
              style={boxStyles.newSentenceBox}
              onEndEditing={e =>
                this.setState({ sentenceToAdd: e.nativeEvent.text })
              }
            />
          </View>
          <Text style={{ margin: 10, color: 'white', fontSize: 18 }}>
            Suggested Image:
          </Text>

          <View style={styles.wordBoxEng}>
            <Image
              source={{
                uri: `https://source.unsplash.com/150x150/?${this.state
                  .wordToAdd && this.state.wordToAdd}`
              }}
              style={styles.imageSize}
            />
          </View>
          <View style={{ margin: 10 }}>
            <TextInput
              placeholder={this.props.currentCategory}
              placeholderTextColor={$placeHolderBlue}
              style={styles.answerBox}
            />
          </View>
          <TouchableHighlight
            style={styles.button}
            underlayColor={$tertiaryRed}
            onPress={() =>
              this.clickHandler(wordToAdd, sentenceToAdd, category)
            }>
            <Text style={styles.buttonText}>
              Add!{' '}
              {this.state.wordsAdded > 0 && (
                <Text>+{this.state.wordsAdded}</Text>
              )}
            </Text>
          </TouchableHighlight>
          <View style={{ height: 50 }} />
        </View>
      </ScrollView>
    )
  }
}

AddWords.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  addNewWordToStore: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  addNewWordToStore: (word, sentence, category) =>
    dispatch({
      type: 'ADD_NEW_WORD_TO_STORE',
      word,
      sentence,
      category
    })
})

const mapStateToProps = state => ({
  currentCategory: state.sentenceStore.currentCategoryTitle
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWords)
