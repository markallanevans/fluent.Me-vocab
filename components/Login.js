import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles, { $primaryRed, $primaryWhite, $secondaryWhite } from '../styles/styles';

const Login = ({ navigation, category }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Welcome to fluent.Me</Text>
    <View style={styles.button}>
      <Text
        style={styles.buttonText}
        // TODO: make the following button actually open a modal list with the categories
        onPress={() => navigation.navigate('Vocab')}
      >get Started!
      </Text>
    </View>
    <View style={styles.button}>
      <Text
        style={styles.buttonText} // TODO: add onPress to load new category.
      >Categories
      </Text>
    </View>
    <View style={{ marginTop: 50 }} />
    <Text style={styles.header} >Current Category</Text>
    <View style={{
      backgroundColor: $primaryWhite,
      padding: 10,
      marginTop: 20,
      shadowColor: $secondaryWhite,
      borderRadius: 20,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    }}
    >
      <Text style={{
        color: $primaryRed,
        }}
      >
        {category || 'None Loaded'}
      </Text>
    </View>
  </View>
);

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  category: state.sentenceStore.currentCategoryTitle,
});

export default connect(mapStateToProps)(Login);
