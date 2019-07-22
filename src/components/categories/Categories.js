import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import appStyles from '../../styles/AppStyles'
import styles from '../../styles/styles'
import buttonStyles from '../../styles/buttonStyles'
import CategoryItem from './CategoryItem'

const category = 'Animals'

class Categories extends React.Component {
  componentWillMount() {
    this.props.loadCategory(category)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[buttonStyles.button, appStyles.mb10]}>
          <Text style={buttonStyles.buttonText}>Categories</Text>
        </View>
        <FlatList
          data={Object.keys(this.props.categories)}
          renderItem={({ item }) => <CategoryItem category={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

Categories.propTypes = {
  categories: PropTypes.object.isRequired,
  loadCategory: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  category: state.sentenceStore.currentCategoryTitle,
  categories: state.sentenceStore.allCategories
})

const mapDispatchToProps = dispatch => ({
  loadCategory: () => dispatch({ type: 'LOAD_CATEGORY', category }),
  loadSentence: () => dispatch({ type: 'LOAD_SENTENCE' })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)
