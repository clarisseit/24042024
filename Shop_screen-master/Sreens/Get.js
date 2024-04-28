import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { getItemAsync } from 'expo-secure-store';

const API_BASE_URL = 'https://grocery-9znl.onrender.com/api/v1';

const CategoriesComponent = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState()

        const retrieving = async () => {
            try{
              const authToken = await getItemAsync("authToken");
              if(authToken){
                setToken(authToken)
              }
            }catch(error){
              console.log(error)
            }
          }


    const getCategories = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/category`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCategories(res.data.data);
        } catch (error) {
          
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCategories();
        retrieving()
    }, [categories, token]);

    useEffect(()=>{
        
    },[])

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    numColumns={3}
                    data={categories}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <TouchableOpacity
                                style={styles.categoryItem}
                                onPress={() => navigation.navigate('CategoryScreen', { category: item._id })}
                            >
                                <View style={styles.cont}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: item.picture }}
                                    />
                                </View>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    cardContainer:{
    alignContent:"center",
    marginLeft:32
    },
    categoriesContainer: {
        paddingHorizontal: 10,
    },
    categoryItem: {
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 4,
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
        // marginBottom: 10,
    },
    cont: {
        backgroundColor: "white",
        borderRadius: 2,
        marginRight: 2,
        padding:10
    }
});

export default CategoriesComponent;