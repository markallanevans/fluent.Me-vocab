import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const Login = ({ navigation, category }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Welcome to fluent.Me</Text>
    <View style={styles.button}>
    <Text
      style={styles.buttonText}
      //TODO: make the following button actually open a modal list with the categories
      onPress={() => navigation.navigate('Vocab')}
    >get Started!
    </Text>
    </View>
    <View style={styles.button}>
    <Text
      style={styles.buttonText}
      onPress={() => console.log('LoadNewCategory')}
    >Categories
    </Text>
    </View>
    <View style={{ marginTop: 50 }} />
    <Text style={styles.header} >Current Category</Text>
    <Text style={{ backgroundColor: 'white', color: ''}} >{category || 'None Loaded'}</Text>
  </View>
);

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  category: state.sentenceStore.currentCategoryTitle,
});

export default connect(mapStateToProps)(Login);
