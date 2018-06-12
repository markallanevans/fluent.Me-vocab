import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types';
import { $secondaryWhite, $primaryRed, $secondaryRed } from '../../styles/styles'
import { connect } from 'react-redux';

export class CategoryItem extends Component {
  render() {
    return (
      <View style={{ 
        flex: 1, 
        flexDirection: 'row', 
        margin: 5, 
        justifyContent: 'space-between',
        borderRadius: 50,
        backgroundColor: $secondaryWhite }}>
         <View>
         <Image 
          source={{ uri: `https://source.unsplash.com/50x50/?${this.props.category}` }} 
          style={{ 
            height: 50, 
            width: 50,
            borderRadius: 25,
            marginLeft: 2.5,
            marginTop: 2.5,
            marginBottom: 2.5,
            }} />
        </View>
        <Text style={{
          marginLeft: 40,
          marginRight: 40,
          alignSelf: 'center',
          color: $secondaryRed,
          fontSize: 18,
          }} >{this.props.category}</Text>
        <Text style={{
          fontSize: 25,
          color: $primaryRed,
          alignSelf: 'center',
          marginRight: 10,
        }}>
          {Math.floor(Math.random()*1000)}
        </Text>
      </View>
    )
  };
};

CategoryItem.propTypes = {
  prop: PropTypes
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
