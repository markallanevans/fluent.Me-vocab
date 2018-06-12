import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../../styles/styles';
import CategoryItem from './CategoryItem';

const Login = ({ navigation, category, categories }) => (
  <View style={styles.container}>
    <View style={{padding: 5}}/>
    <Text
      style={styles.button}
    >Categories</Text>
    <FlatList
      style={{marginTop: 10}}
      data={Object.keys(categories)}
      renderItem={({ item }) => <CategoryItem category={item} />}
    />
    <View style={{ marginTop: 50 }} />
  </View>
);

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  category: state.sentenceStore.currentCategoryTitle,
  categories: state.sentenceStore.allCategories,
});

export default connect(mapStateToProps)(Login);
