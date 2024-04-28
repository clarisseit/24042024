import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = ({ product }) => {
  const navigation = useNavigation();

  const addToCart = () => {
    // Implement logic to add 'product' to the cart
    // This logic will depend on how your products and cartItems are structured in your state or context.
    // After adding the product to the cart, navigate to the CartScreen.

    navigation.navigate('CartScreen', { product });
  };

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
      <TouchableOpacity onPress={addToCart}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;
