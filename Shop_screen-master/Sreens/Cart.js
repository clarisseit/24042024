import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons, EvilIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { addToCart } from '../Redux/action';
import { useDispatch } from 'react-redux';
import * as SecureStore from 'expo-secure-store';
import { addProductTocart } from '../Redux/apiCall';

const API_BASE_URL = 'https://grocery-9znl.onrender.com/api/v1';

const CartList = ({ route }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [authToken, setToken] = useState(); 
  const [quantity ,setQuantity] = useState(1)


  const addProduct = async () => {
    try{
      // addProductTocart(item,dispatch,authToken)
      addProductTocart(item, quantity, dispatch, authToken);
      dispatch(addToCart(item))
      navigation.navigate('Cart', item);
    }catch(error){
      console.log(error)
    }
  }
  const retrieveToken = async () => {
    try {
      const authToken = await SecureStore.getItemAsync("authToken");
      if (authToken) {
        setToken(authToken);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(()=>{
    retrieveToken();
  },[authToken])
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.picture }} style={styles.image} />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
      </View>
      <Text style={{fontWeight:'700'}}>product description</Text>
      <View style={styles.description}>
      <Text style={{fontFamily:'NotoSansOsmanya'}} >{item.description}</Text>
      </View>
      <Text style={{fontWeight:'700'}}>You might like it</Text>
      <View style={styles.addToCart}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={addProduct}
        >
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
   
  },
  header: {
    flexDirection: 'row',
    marginTop: 70,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    marginEnd: 20,

  },
  imageContainer: {
    marginTop: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 180,
    borderRadius: 75,
  },
  icon: {
    marginHorizontal: 10,
  },
  card: {
    marginTop:32,
    marginVertical: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop:19
  },
  price: {
    fontSize: 18,
    color: '#FFB930',
    paddingTop:20
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    paddingTop:20
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 34
  },
  quantityButton: {
    backgroundColor: '#E0E0E0',
    padding: 3,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  addToCart: {
marginTop:-36,

  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    marginTop: 50

  },
  addToCartText: {
    color: 'white',
    fontSize: 18,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 89
  },
});
