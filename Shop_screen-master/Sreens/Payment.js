import React, { useState ,useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { MaterialCommunityIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';


const { width } = Dimensions.get('screen');

export default function Payment({ route }) {
  const { totalPrice, cartId } = route.params;
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [country, setCountry] = React.useState('');
  const [postCode, setPostCode] = useState('');
  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const storedData = await SecureStore.getItemAsync("authProfile");
        const parsedData = JSON.parse(storedData);
        setData(parsedData)
      } catch (error) {
        console.log(error);
      }
    };
    retrieveData();
  }, []);

  useEffect(() => {
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

    retrieveToken();
  }, []);


  const handleCheckout = async () => {
    const payload = {
      cartId:cartId,
      phone:"078888888",
      deliverTo:data.location,
      totalAmount:totalPrice
    }
    
    try {
      const response = await axios.post("https://grocery-9znl.onrender.com/api/v1/cart/checkout",payload,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      navigation.navigate('My Order',response)
     route.params.clearCart();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("ShopScreen")}>
        <AntDesign name="arrowleft" size={24} color="green" />
      </TouchableOpacity>
      <View style={styles.getstarted}>
        <Text style={styles.title}>Add Card</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            onChangeText={(value) => setCardNumber(value)}
          />
          <MaterialCommunityIcons
            name="credit-card-outline"
            size={24}
            color="#08C25E"
            style={styles.icon}
          />
        </View>
        <View style={styles.inputRow}>
          <View style={styles.inputHalf}>
            <TextInput
              style={styles.input}
              placeholder="MM/YY"
              onChangeText={(value) => setExpiryDate(value)}
            />
          </View>
          <View style={styles.inputHalf}>
            <TextInput
              style={styles.input}
              placeholder="CVV"
              onChangeText={(value) => setCVV(value)}
            />
          </View>
        </View>
        <View style={styles.emaillContainer}>
          <CountryPicker
            {...{
              onSelect: (country) => setCountry(country),
              countryCode: country?.cca2 || 'US',
            }}
            withFilter
            withFlag
            withCallingCode
            withCurrency
            withAlphaFilter
            withEmoji
            withModal
            visible={false}
          />
          <Fontisto name="world" size={24} color="#08C25E" />
        </View>
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.input}
            placeholder="Post Code"
            onChangeText={(value) => setPostCode(value)}
          />
          <MaterialCommunityIcons
            name="credit-card-outline"
            size={24}
            color="#08C25E"
            style={styles.icon}
          />
        </View>
      </View>
      <Text style={styles.totalAmount}>$ {totalPrice}</Text>
      <TouchableOpacity style={styles.button} onPress={handleCheckout}>
        <Text style={styles.buttonText}>CheckOut</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 2,
    padding: 23
  },

  inputContainer: {
    width: '100%',
    marginTop: 38,


  },
  icon: {
    left: -20
  },
  input: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    marginBottom: 15,
    justifyContent: 'space-between'
  },
  emaillContainer: {
    marginTop: 23,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    justifyContent: 'space-between'
  },

  button: {
    height: 50,
    width: width - 40,
    backgroundColor: '#08C25E',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signInText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'none',
  },

  item: {
    padding: 12
  },
  getstarted: {
    justifyContent: "left",
    alignItems: "left",
    marginTop: 3
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },

  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputHalf: {
    flex: 1,
    marginHorizontal: 5,
  },
});
