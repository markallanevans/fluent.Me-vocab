import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../../styles/styles';
import CategoryItem from './CategoryItem';

const category = 'Animals';

// const Categories = ({ navigation, category, categories }) => (
class Categories extends React.Component {
  componentWillMount() {
    this.props.loadCategory(category);
  }

  render() {
     return(
       <View style={styles.container}>
         <View style={{ padding: 5 }}/>
         <View style={styles.button}>
         <Text style={styles.buttonText}>Categories</Text>
         </View>
         <FlatList
           style={{marginTop: 10}}
           data={Object.keys(this.props.categories)}
           renderItem={({ item }) => <CategoryItem category={item} />}
           keyExtractor={(item, index) => index.toString()}
         />
         <View style={{ marginTop: 50 }} />
       </View>
     );
  }
}

Categories.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  category: state.sentenceStore.currentCategoryTitle,
  categories: state.sentenceStore.allCategories,
});

const mapDispatchToProps = dispatch => ({
  loadCategory: () => dispatch({ type: 'LOAD_CATEGORY', category }),
  loadSentence: () => dispatch({ type: 'LOAD_SENTENCE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
