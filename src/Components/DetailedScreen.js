import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome';

const DetailedScreen = ({navigation}) => {
  const images = [
    require('../Assets/plane1.png'),
    require('../Assets/plane2.png'),
    require('../Assets/plane3.png'),
  ];
  const [selectedImage, setSelectedImage] = useState(images[1]);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleImageClick = index => {
    setSelectedImage(images[index]);
    setSelectedIndex(index);
  };

  const handleSizeSelect = index => {
    setSelectedSize(index);
  };

  const availableSizes = ['5', '5.5', '6', '6.6', '7'];
  const availableColors = ['blue', 'orange', 'green', 'red', 'purple'];

  const handleColorSelect = index => {
    setSelectedColor(index);
  };
  const AddTocart = () => {
    console.log('Added to Cart');
    navigation.navigate('CheckoutScreen');
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="arrow-left"
            size={30}
            color="#000"
            onPress={() => navigation.goBack()}
          />
          <View style={styles.rightIconsContainer}>
            <Icon name="heart" size={25} style={styles.icon} color="black" />
          </View>
        </View>
        <View style={styles.imageGallery}>
          <View style={styles.imageContainer}>
            <Image source={selectedImage} style={styles.selectedImage} />
          </View>
          <View style={styles.thumbnailContainer}>
            {images.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleImageClick(index)}
                style={[
                  styles.thumbnail,
                  index === selectedIndex && styles.selectedThumbnail,
                ]}>
                <Image source={image} style={styles.thumbnailImage} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.productDetailsContainer}>
          <View style={styles.productDetailsRow}>
            <Text style={{color: '#000', fontSize: 15}}>Men's Shoe</Text>
            <View style={styles.rightIconsContainer}>
              <Icon1 name="star" size={20} color="orange" />
              <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>
                (4.5)
              </Text>
            </View>
          </View>
          <View style={styles.productDetailsRow}>
            <Text style={{color: '#000', fontSize: 20, fontWeight: '600'}}>
              Nike Air Max
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon1 name="dollar" size={20} color="orange" />
              <Text style={{fontSize: 20, fontWeight: '900', color: 'black'}}>
                {' '}
                239.00
              </Text>
            </View>
          </View>
          <View style={styles.productDetailsRow}>
            <Text
              style={{
                margin: 0,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Size:
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  margin: 5,
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                US
              </Text>
              <Text
                style={{
                  margin: 5,
                  fontSize: 15,
                  fontWeight: '200',
                  color: 'black',
                }}>
                UK
              </Text>
              <Text
                style={{
                  margin: 5,
                  fontSize: 15,
                  fontWeight: '200',
                  color: 'black',
                }}>
                EU
              </Text>
            </View>
          </View>
          <View style={styles.sizeSelectorContainer}>
            {availableSizes.map((size, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.sizeBox,
                  selectedSize === index && styles.selectedSizeBox,
                ]}
                onPress={() => handleSizeSelect(index)}>
                <Text
                  style={{
                    color: selectedSize === index ? 'white' : 'black',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <ScrollView style={{flex: 1}}>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
                Colors:
              </Text>
              <View style={styles.colorSelectorContainer}>
                {availableColors.map((color, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.colorBox,
                      {
                        backgroundColor: color,
                        borderColor: selectedColor === index ? 'white' : color,
                      },
                    ]}
                    onPress={() => handleColorSelect(index)}>
                    {selectedColor === index && (
                      <Icon1 name="check" size={15} color="white" />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                Description:
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 19,
                  marginTop: 10,
                  //   lineHeight: 1.5,
                  textTransform: 'capitalize',
                }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                aliquam mollitia aliquid, ipsam sint cupiditate! Pariatur
                aliquid animi in veniam vitae neque ea distinctio quo molestiae
                tempore natus! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quia aliquam mollitia aliquid, ipsam sint
                cupiditate! Pariatur aliquid animi in veniam vitae neque ea
                distinctio quo molestiae tempore natus!
              </Text>

              <Pressable
                onPress={AddTocart}
                style={{
                  marginTop: 10,
                  position: 'absolute',
                  backgroundColor: 'black',
                  bottom: 0,
                  width: '90%',
                  alignSelf: 'center',
                  padding: 20,
                  borderRadius: 100,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 15, fontWeight: '500'}}>
                  Add to Cart
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailedScreen;

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
  productDetailsContainer: {
    flex: 1,
    marginTop: 5,
  },

  productDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  //   imageGallery: {
  //     flex: 0,
  //   },
  //   imageContainer: {
  //     flex: 0,
  //   },
  selectedImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    aspectRatio: 2,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align thumbnails to the start (left)
    marginTop: 10,
    // flex: 3,
  },
  thumbnail: {
    marginRight: 6,
    height: 89,
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 3,
    borderRadius: 20,
    overflow: 'hidden',
  },
  selectedThumbnail: {
    borderWidth: 2,
    borderColor: 'black',
  },
  thumbnailImage: {
    width: 110,
    height: 90,
    resizeMode: 'contain',
  },
  sizeSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  sizeBox: {
    // flex: 1,
    width: 50, // Set the width to make them squares
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 10,
    backgroundColor: '#EAEAEA',
  },

  selectedSizeBox: {
    backgroundColor: 'black',
  },
  colorSelectorContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginRight: 10,
    marginTop: 10,
  },

  colorBox: {
    marginRight: 25,
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    shadowOpacity: 1,
  },

  selectedColorBox: {
    backgroundColor: 'blue', // Set the default selected color
    borderColor: 'transparent', // Hide the border for the selected color
  },
});
