/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class HomeIcon extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Icon name="home" size={25} type="Entypo" style={{color: 'black'}} />
      </View>
    );
  }
}

export class FavouriteIcon extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Icon name="heart" type="Feather" size={25} style={{color: '#000'}} />
      </View>
    );
  }
}

export class CartIcon extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Icon
          name="shopping-cart"
          size={25}
          type="Entypo"
          style={{color: '#000'}}
        />
      </View>
    );
  }
}
export class ProfileIcon extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Icon
          name="user"
          type="FontAwesome"
          size={25}
          style={{color: '#000'}}
        />
      </View>
    );
  }
}
