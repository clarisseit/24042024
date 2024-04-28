import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, upadteQuantity } from '../Redux/action';
import { calcTotal } from '../utils/total';
import { updateCartQuantity } from '../Redux/apiCall';
import * as SecureStore from 'expo-secure-store';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

const CartScreen = () => {
  const cartItems = useSelector((state) => state.carts.carts);
  console.log(cartItems)
  const dispatch = useDispatch();
  const totalPrice = calcTotal(cartItems);
  const [authToken, setToken] = useState();

  const retrieveToken = async () => {
    try {
      const authToken = await SecureStore.getItemAsync("authToken");
      if (authToken) {
        setToken(authToken);
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(authToken)
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    try {
      const quantity = Number(newQuantity);

      const response = updateCartQuantity(dispatch, authToken, productId, newQuantity);
      dispatch(upadteQuantity({ productId, newQuantity: quantity }));
      console.log("Quantity updated successfully:");
    } catch (error) {
      console.log(error)
    }
  }

  const handleIncrement = (productId, currentQuantity) => {
    dispatch(increment({ payload: productId }));
    const newQuantity = currentQuantity + 1;
    handleUpdateQuantity(productId, newQuantity);
  };
  const handleDecrement = (productId, currentQuantity) => {
    dispatch(decrement(productId));
    const newQuantity = currentQuantity - 1;
    handleUpdateQuantity(productId, newQuantity);
  };

  useEffect(() => {
    retrieveToken();
  }, [authToken])
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* <Text style={styles.cartTitle}>Shopping Cart</Text> */}
      
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.picture }} style={styles.image} />
            <View style={{flexDirection:'column'}}>
            <Text style={styles.itemName}> {item.name}</Text>
            <Text style={styles.itemName}>  $ {item.price * item.quantity}</Text>
            </View>
            <View style={styles.itemDetails}>
              <TouchableOpacity onPress={() => handleIncrement(item._id, item.quantity)}>
                <AntDesign name="plussquareo" size={22} color="green" />
              </TouchableOpacity>
              <Text style={{fontSize:21,color:"green"}}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => handleDecrement(item._id, item.quantity)}>
               <AntDesign name="minussquareo" size={22} color="green" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Text style={styles.totalPrice}>Total Price: ${totalPrice}</Text>
           <TouchableOpacity onPress={() => navigation.navigate("ShopScreen")} style={styles.addToCartButton}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
       {/* <TouchableOpacity onPress={() =>
        navigation.navigate("Payment", { totalPrice: totalPrice, cartId: cartId })}
        style={styles.addToCartButton}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 22,
  },
  cartItem: {
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent:"space-between",
    flexDirection: 'row', 
    marginLeft: 70, 
    marginTop:7
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: 10, 
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
});


export default CartScreen;
