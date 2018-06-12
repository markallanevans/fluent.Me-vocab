import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { $primaryWhite, $tertiaryRed, $secondaryRed } from '../styles/styles';

class PointDetails extends Component {
  render() {
    return (
      <View style={{height: 200, width: 150, alignItems: 'center'}}>
        <View style={{
            backgroundColor: $secondaryRed,
            padding: 10,
            margin: 10,
            height: 100,
            width: 100,
            borderRadius: 50,
            padding: 20,
            justifyContent: 'center',
            shadowColor: $primaryWhite,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2,
          }}>
          <Text
            style={{
              color: $primaryWhite,
              fontSize: 25,
              textAlign: 'center',
              justifySelf: 'center',
            }}
          > 
            {this.props.content} 
          </Text>
        </View>
        <View style={{
          padding: 10,
          padding: 20,
          shadowColor: $primaryWhite,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.5,
          shadowRadius: 2,
        }}>
          <Text style={{
            fontSize: 18,
            color: $primaryWhite,
            textAlign: 'center',
          }}>
            {this.props.title} 
          </Text>
        </View>
      </View>
    );
  }
}

export default PointDetails;
