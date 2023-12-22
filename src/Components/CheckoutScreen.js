import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome';

const CheckoutScreen = ({navigation}) => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Nike Air Max 95',
      quantity: 1,
      price: 230.0,
      image: require('../Assets/Shoe2.png'),
    },
    {
      id: '2',
      name: 'Nike Air Max 97',
      quantity: 1,
      price: 250.0,
      image: require('../Assets/Shoe3.png'),
    },
    {
      id: '3',
      name: 'Nike Air Max 98',
      quantity: 1,
      price: 250.0,
      image: require('../Assets/Shoe5.png'),
    },
    // we can  Add more items as needed
  ]);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const handleCheckout = () => {
    setIsOrderPlaced(true);
  };

  const closeModal = () => {
    setIsOrderPlaced(false);
    navigation.navigate('HomeScreen');
  };

  const decreaseQuantity = itemId => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    );
  };

  const increaseQuantity = itemId => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const calculateItemTotal = item => {
    return item.quantity * item.price;
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemTotal(item),
      0,
    );
  };

  const removeItem = itemId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={30}
          color="#000"
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
          Shopping Cart
        </Text>
        <Icon name="shopping-bag" size={25} color="black" />
      </View>
      <ScrollView style={{marginTop: 20}}>
        {cartItems.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />

            <View style={styles.contentContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.name}>{item.name}</Text>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Icon name="trash-2" size={24} color="red" />
                </TouchableOpacity>
              </View>
              <Text style={styles.size}>
                <Icon1 name="dollar" size={20} color="orange" /> {item.price}
              </Text>

              <View style={styles.footer}>
                <Icon
                  onPress={() => decreaseQuantity(item.id)}
                  name="minus-circle"
                  size={25}
                  color="gray"
                />
                <Text style={styles.quantity}>{item.quantity}</Text>
                <Icon
                  onPress={() => increaseQuantity(item.id)}
                  name="plus-circle"
                  size={25}
                  color="gray"
                />
              </View>
            </View>
          </View>
        ))}
        <View style={styles.orderSummaryContainer}>
          <Text style={styles.orderSummaryHeading}>Order Summary</Text>
          <View style={styles.orderSummaryCard}>
            <View style={styles.summarySection}>
              <Text style={{color:'black'}}>Subtotal</Text>
              {/* <Text style={styles.summaryValue}>$ </Text> */}
              <Text style={styles.size}>
                <Icon1 name="dollar" size={20} color="orange" />{' '}
                {calculateTotal()}
              </Text>
            </View>
            <View style={styles.summarySection}>
              <Text style={{color:'black'}}>Tax (10%)</Text>
              {/* <Text style={styles.summaryValue}>
                $ {(calculateTotal() * 0.1).toFixed(2)}
              </Text> */}
              <Text style={styles.size}>
                <Icon1 name="dollar" size={20} color="orange" />{' '}
                {(calculateTotal() * 0.1).toFixed(2)}
              </Text>
            </View>
            <View style={styles.summarySection}>
              <Text style={{fontSize: 25, color: '#000', fontWeight: '900'}}>
                Total
              </Text>
              {/* <Text style={styles.summaryValue}>
                $ {(calculateTotal() * 1.1).toFixed(2)}
              </Text> */}
              <Text style={{fontSize: 25, color: '#000', fontWeight: '900'}}>
                <Icon1 name="dollar" size={20} color="orange" />{' '}
                {(calculateTotal() * 1.1).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Pressable
        onPress={handleCheckout}
        style={{
          marginTop: 10,
          position: 'absolute',
          backgroundColor: 'black',
          bottom: 10,
          width: '90%',
          alignSelf: 'center',
          padding: 15,
          borderRadius: 14,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 19, fontWeight: '500'}}>
          Check out
        </Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOrderPlaced}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Your check mark animation or success message */}
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 20,
                color: '#000',
              }}>
              Order Placed Successfully!
            </Text>

            <Text style={{fontSize: 30, color: '#000', fontWeight: '900'}}>
              <Icon1 name="check-circle" size={30} color="green" /> {''}
              Thank You
            </Text>
            <Pressable onPress={closeModal} style={styles.closeButton}>
              <Text style={{color: 'white', fontSize: 18}}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CheckoutScreen;

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
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    padding: 18,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 10,
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
    color: '#000',
  },
  size: {
    fontSize: 19,
    color: '#000',
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTotal: {
    fontSize: 19,
    marginLeft: 'auto',
    fontWeight: '500',
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderSummaryContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    marginTop: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  orderSummaryHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  summarySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  orderSummaryCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 8,
  },
});
