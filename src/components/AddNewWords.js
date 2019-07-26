import React from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from '../styles/addNewWordTabStyles'
import buttonStyles from '../styles/buttonStyles'
import { Colors } from '../styles/theme'

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
        <View style={[styles.container, styles.pb40]}>
          <Text style={styles.header}>Add new Words</Text>
          <Text style={styles.instructions}>
            Add your own vocabulary to any category, or create a new category.
          </Text>
          <View style={styles.m10}>
            <TextInput
              placeholder="your word..."
              placeholderTextColor={Colors.$placeHolderBlue}
              style={styles.newWordBox}
              onEndEditing={e =>
                this.setState({ wordToAdd: e.nativeEvent.text.toLowerCase() })
              }
            />
          </View>
          <View style={styles.m10}>
            <TextInput
              placeholder="your sentence..."
              placeholderTextColor={Colors.$placeHolderBlue}
              style={styles.newSentenceBox}
              onEndEditing={e =>
                this.setState({ sentenceToAdd: e.nativeEvent.text })
              }
            />
          </View>
          <Text style={styles.instructions}>Suggested Image:</Text>
          <View style={styles.wordBoxEng}>
            <Image
              source={{
                uri: `https://source.unsplash.com/150x150/?${this.state
                  .wordToAdd && this.state.wordToAdd}`
              }}
              style={styles.imageSize}
            />
          </View>
          <View style={styles.m10}>
            <TextInput
              placeholder={this.props.currentCategory}
              placeholderTextColor={Colors.$placeHolderBlue}
              style={styles.answerBox}
            />
          </View>
          <TouchableHighlight
            style={styles.button}
            underlayColor={Colors.$tertiaryRed}
            onPress={() =>
              this.clickHandler(wordToAdd, sentenceToAdd, category)
            }>
            <Text style={buttonStyles.buttonText}>
              Add!{' '}
              {this.state.wordsAdded > 0 && (
                <Text>+{this.state.wordsAdded}</Text>
              )}
            </Text>
          </TouchableHighlight>
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
