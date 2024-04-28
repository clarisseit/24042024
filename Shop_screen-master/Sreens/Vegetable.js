import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity ,TextInput} from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

const CategoryScreen = ({ route }) => {
  const { category } = route.params;

  const [groceries, setGroceries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null); 

  const API_BASE_URL = 'https://grocery-9znl.onrender.com/api/v1';

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

    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/grocery/bycategory/${category}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setGroceries(response.data.data);
      } catch (error) {
        console.error('Error fetching groceries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, token]); 

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     
      {loading ? (
        <Text>Loading..</Text>
      ) : (
        <FlatList
          data={groceries}
          keyExtractor={(item) => item._id}
          numColumns={2} 
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('CartList', { item: item })}>
              <Image style={styles.image} source={{ uri: item.picture }} />
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>$ {item.price}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      {/* <Text>Loading...</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  categoryItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 8,
    flex: 1,
    minWidth: '44%',
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode:"contain",
    borderRadius: 1,
  },
  Search: {
    backgroundColor: 'grey',
    width: '90%',
    padding: 8,
    marginLeft: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: '#FFB930',
  },
});



export default CategoryScreen;



