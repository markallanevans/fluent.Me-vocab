import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Image from 'react-native-image-progress'
import ProgressPie from 'react-native-progress/Pie'
import PropTypes from 'prop-types'
import { Colors } from '../../styles/theme/'
import styles from '../../styles/categoryItemStyles'

class CategoryItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thisCategoryLength: props.allCategories[props.category].listWords.length
    }
  }

  handlePress() {
    this.props.loadCategory(this.props.category)
    this.props.loadWords(this.props.category)
  }

  getImageSrc() {
    return {
      uri: `https://source.unsplash.com/50x50/?${this.props.category}`
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.handlePress()}
        underlayColor={Colors.$primaryWhite}>
        <View
          style={[
            styles.categoryWrapper,
            {
              borderWidth:
                this.props.currentCategoryTitle === this.props.category ? 2 : 0,
              backgroundColor:
                this.props.currentCategoryTitle === this.props.category
                  ? Colors.$primaryWhite
                  : Colors.$secondaryWhite
            }
          ]}>
          <View style={styles.imageWrapper}>
            <Image
              source={this.getImageSrc()}
              indicator={ProgressPie}
              indicatorProps={{
                ...styles.indicatorStyle,
                size: 50,
                unfilledColor: Colors.$primaryWhite
              }}
              style={styles.imageStyle}
            />
          </View>
          <Text
            style={[
              styles.categoryTitle,
              {
                fontSize:
                  this.props.currentCategoryTitle === this.props.category
                    ? 24
                    : 18
              }
            ]}>
            {this.props.category}
          </Text>
          <Text style={styles.categoryItemCount}>
            {this.state.thisCategoryLength}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  currentCategoryTitle: PropTypes.string.isRequired,
  allCategories: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  currentCategoryTitle: state.sentenceStore.currentCategoryTitle,
  allCategories: state.sentenceStore.allCategories
})

const mapDispatchToProps = dispatch => ({
  loadCategory: category => dispatch({ type: 'LOAD_CATEGORY', category }),
  loadWords: category => dispatch({ type: 'LOAD_WORDS', category })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem)
