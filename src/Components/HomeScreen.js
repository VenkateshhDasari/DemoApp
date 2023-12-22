import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  const handleCardPress = () => {
    navigation.navigate('DetailedScreen');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="align-left" size={25} style={styles.icon} color="black" />
          <View style={styles.rightIconsContainer}>
            <Icon name="search" size={25} style={styles.icon} color="black" />
            <Icon
              name="shopping-bag"
              color="black"
              onPress={() => navigation.navigate('CheckoutScreen')}
              size={25}
              style={styles.icon}
            />
          </View>
        </View>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Categories
        </Text>
        <View style={styles.categoriesContainer}>
          <Text style={styles.category}>All</Text>
          <Text style={styles.category1}>Shoes</Text>
          <Text style={styles.category}>Clothes</Text>
          <Text style={styles.category}>Watches</Text>
        </View>
        <View style={styles.cardContainer}>
          {/* First Card */}
          <View style={styles.card}>
            <TouchableOpacity onPress={handleCardPress}>
              <View style={styles.favoriteIconContainer}>
                <Icon name="heart" size={25} color="black" />
              </View>
              <Image
                source={require('../Assets/Shoe2.png')}
                style={styles.productImage}
              />
              <Text style={styles.productName}>Nike Air Max 95</Text>
              <Text style={styles.trendingNow}>Trending Now</Text>
              <Text style={styles.price}>
                <Icon1 name="dollar" size={20} color="orange" /> 279.99
              </Text>
            </TouchableOpacity>
          </View>

          {/* Second Card */}
          <View style={styles.card}>
            <View style={styles.favoriteIconContainer}>
              <Icon name="heart" size={25} color="black" />
            </View>
            <Image
              source={require('../Assets/Shoe3.png')}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Nike Air Max 97</Text>
            <Text style={styles.trendingNow}>Best Selling</Text>
            <Text style={styles.price}>
              <Icon1 name="dollar" size={20} color="orange" /> 279.99
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#000', fontSize: 21, fontWeight: 'bold'}}>
            Popular
          </Text>
          <Text style={{fontSize: 17, color: '#000'}}>Show All</Text>
        </View>
        <View style={styles.cardContainer2}>
          {/* First Card */}
          <View style={styles.card2}>
            <Image
              source={require('../Assets/Shoe4.png')}
              style={styles.productImage2}
            />
            <View style={styles.detailsContainer2}>
              <Icon
                name="heart"
                size={25}
                color="#000"
                style={styles.upHeartIcon}
              />
              <Text style={styles.productName2}>Nike Air Max 200</Text>
              <Text style={styles.price2}>
                <Icon1 name="dollar" size={20} color="orange" /> 279.99
              </Text>
            </View>
          </View>

          {/* Second Card */}
          <View style={styles.card2}>
            <Image
              source={require('../Assets/Shoe5.png')}
              style={styles.productImage2}
            />
            <View style={styles.detailsContainer2}>
              <Icon
                name="heart"
                size={25}
                color="#000"
                style={styles.upHeartIcon}
              />
              <Text style={styles.productName2}>Nike Air Max 260</Text>
              <Text style={styles.price2}>
                <Icon1 name="dollar" size={20} color="orange" /> 279.99
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightIconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 16,
  },
  category1: {
    color: 'orange',
    textDecorationLine: 'underline',
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: 25,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: 25,
    color: 'black',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cardContainer2: {
    marginTop: 10,
  },
  card2: {
    flexDirection: 'row',
    marginBottom: 19,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3, // Add elevation for a card-like effect (Android)
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: 'visible',
  },
  card: {
    flex: 1,
    margin: 7,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 3, // Add elevation for a card-like effect (Android)
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  favoriteIconContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 30,
    marginBottom: 8,
    marginTop: 18,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
    color: '#000',
  },
  trendingNow: {
    color: 'orange',
    margin: 8,
    fontSize: 15,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
    color: '#000',
  },
  productImage2: {
    width: '55%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  detailsContainer2: {
    padding: 12,
  },
  upHeartIcon: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 8,
  },
  productName2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginRight: 1,
    color: '#000',
  },
  price2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
});
