import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from '@expo/vector-icons'
import { useIsFocused } from '@react-navigation/core';

const ShopScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState("");
  const [cartId, setCartId] = useState([])
  const isFocused=useIsFocused()

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const authToken = await SecureStore.getItemAsync("authToken");
        if (authToken) {
          setToken(authToken);
          fetchData(authToken);
        }
      } catch (error) {
        console.log(error);
      }
    };

    retrieveToken();

    const fetchData = async (token) => {
      try {
        const response = await axios.get('https://grocery-9znl.onrender.com/api/v1/cart', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCartItems(response.data.data.items);
        setCartId(response.data.data._id)
      } catch (error) {
        // console.error('Error fetching cart items:', error);
      }
    };
    fetchData();
  }, [isFocused,cartItems]);

  const totalPrice = cartItems.reduce((total, item) => total + item.grocery.price * item.count, 0);


  const handleIncrement = async (itemId) => {
    try {
      const updatedCartItems = cartItems.map(item => {
        if (item.grocery._id === itemId) {
          return {
            ...item,
            count: item.count + 1
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);

      await axios.patch(`https://grocery-9znl.onrender.com/api/v1/cart/updateItem/${itemId}`, {
        count: updatedCartItems.find(item => item.grocery._id === itemId).count
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  const handleDecrement = async (itemId) => {
    try {
      const updatedCartItems = cartItems.map(item => {
        if (item.grocery._id === itemId && item.count > 1) {
          return {
            ...item,
            count: item.count - 1
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);


      await axios.patch(`https://grocery-9znl.onrender.com/api/v1/cart/updateItem/${itemId}`, {
        count: updatedCartItems.find(item => item.grocery._id === itemId).count
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  const clearCart = () => {
    setCartItems([]); 
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.cartTitle}>Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image style={styles.image} source={{ uri: item.grocery.picture }} />
            <View style={{flexDirection:'column'}}>
              <Text style={styles.itemName}>{item.grocery.name}</Text>
              <Text style={styles.itemDetail}>$ {item.grocery.price * item.count}</Text>
              </View>
              <View style={styles.quantity}>
                <TouchableOpacity onPress={() => handleIncrement(item.grocery._id)} style={{marginRight:12}}>
                  {/* <Text style={styles.actionButton}>+</Text> */}
                  <AntDesign name="plussquareo" size={22} color="green" />
                </TouchableOpacity>
                <Text style={styles.itemDetail}>{item.count}</Text>
                <TouchableOpacity onPress={() => handleDecrement(item.grocery._id)} style={{marginLeft:12}}>
                  {/* <Text style={styles.actionButton}>-</Text> */}
                  <AntDesign name="minussquareo" size={22} color="green" />
                </TouchableOpacity>
              </View>
         
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total Amount:</Text>
        <Text style={styles.totalAmount}>${totalPrice}</Text>
      </View>
      {totalPrice === 0 ? (
        <Text style={styles.emptyCartMessage}>No items in cart</Text>
      ) : (
        <>
      <TouchableOpacity onPress={() =>
        navigation.navigate("Payment", { totalPrice: totalPrice, cartId: cartId ,clearCart:clearCart})}
        style={styles.addToCartButton}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
      </>
      )
}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  quantity: {
    // flex: 1,
    justifyContent: "space-between",
    flexDirection: 'row',
    marginLeft: 34,
    marginRight: 2,
    paddingLeft:12,
    
  },
  cartItem: {
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  itemDetail: {
    fontSize: 17,
    marginBottom: 5,

  },
  actionButton: {
    color: 'black',
    fontSize: 24,
    marginHorizontal: 10,
  },
});

export default ShopScreen;
