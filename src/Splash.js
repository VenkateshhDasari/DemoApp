import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const Splash = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.navigate('NavigationRouter');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../src/Assets/Logo.jpeg')} />
      <Text
        style={{
          color: '#fff',
          fontSize: 25,
          fontStyle: 'italic',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Welcome To Sneakers Store{' '}
        <Icon name="hand-o-right" size={30} color="white" />
      </Text>

      <ActivityIndicator
        animating={animating}
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    // borderRadius: '50%',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
    color: '#fff',
  },
});
