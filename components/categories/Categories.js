import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../../styles/styles';
import CategoryItem from './CategoryItem';

const Categories = ({ navigation, category, categories }) => (
  <View style={styles.container}>
    <View style={{ padding: 5 }}/>
    <View style={styles.button}>
    <Text style={styles.buttonText}>Categories</Text>
    </View>
    <FlatList
      style={{marginTop: 10}}
      data={Object.keys(categories)}
      renderItem={({ item }) => <CategoryItem category={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
    <View style={{ marginTop: 50 }} />
  </View>
);

Categories.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  category: state.sentenceStore.currentCategoryTitle,
  categories: state.sentenceStore.allCategories,
});

export default connect(mapStateToProps)(Categories);
