import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import ListCategories from './ListCategories';
import Box2 from "../Components/Account"

const OnGoing = () => {

    const [cartItems, setCartItems] = useState([]);
    const [token, setToken] = useState("");
    const [history , setHistory] = useState([])
    const [label , setLabel] = useState("ongoing")
    const navigation = useNavigation()


    useEffect(() => {
        const retrieveToken = async () => {
            try {
                const authToken = await SecureStore.getItemAsync("authToken");
                if (authToken) {
                    setToken(authToken);
                    fetchOnGoing(authToken);
                    fetchHistory(authToken)
                }
            } catch (error) {
                console.log(error);
            }
        };

        retrieveToken();
    }, []);

    const fetchOnGoing = async (token) => {
        try {
            const response = await axios.get('https://grocery-9znl.onrender.com/api/v1/cart/ongoingorders', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCartItems(response.data.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const fetchHistory = async (token) => {
        try {
            const response = await axios.get('https://grocery-9znl.onrender.com/api/v1/cart/orderhistory', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setHistory(response.data.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    useEffect(() => {
        switch(label){
            case 'ongoing':
                fetchOnGoing(token)
                break ;
            case 'history':
                fetchHistory(token)
                break;
            default:
                fetchOnGoing(token)
        }  

    },[cartItems, history]) 
    let all = label === "ongoing" ? cartItems : history

    // console.log("on",all)
    const confirmDelivery = async (orderId) => {
        try {
            const response = await axios.post(
                `https://grocery-9znl.onrender.com/api/v1/cart/confirmdelivery/${orderId}`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

        } catch (error) {
            console.error('Error confirming delivery:', error);
        }
    };

    const handleForOngoing = () => {
        setLabel("ongoing");
        fetchOnGoing(token); 
    };
    
    const handleHistory = () => {
        setLabel("history");
        fetchHistory(token);
    };

   
    return (
        <ScrollView style={styles.container}>
             <ListCategories handleForOngoing={handleForOngoing} handleHistory={handleHistory} />
             {cartItems.length === 0 && <Box2 />}
             {cartItems.length > 0 && (
            <FlatList
                data={all}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <View style={styles.pending}>
                            <View style={styles.paddingCard}>
                                <Text style={styles.textPay}>{item.orderStatus}</Text>
                            </View>
                            <View style={styles.date}>
                                <Text style={styles.textlight}>{item.date}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                            <Text style={styles.itemName}>transactionId</Text>
                            <Text style={styles.itemName}>Deliver to</Text>
                            <Text style={styles.itemName}>Total Payment:</Text>
                        </View>
                        <View style={{ flexDirection: "column", justifyContent: "space-between" ,fontSize:"12"}}>
                            <Text > {item.transactionId}</Text>
                            <Text >{item.deliveryAddress}</Text>
                            <Text > ${item.totalAmount}</Text>
                        </View>
                        </View>
                        
                        {/* <TouchableOpacity style={styles.addToCartButton} onPress={() => confirmDelivery(item._id)}>
                            <Text >Complete</Text>
                        </TouchableOpacity> */} 

                    { item.orderStatus === 'Completed' ? null : (
                        <TouchableOpacity
                            style={styles.addToCartButton}
                            onPress={() => confirmDelivery(item._id)}
                        >
                            <Text>Complete</Text>
                        </TouchableOpacity>
                    )}


                    </View>
                )}
            />
             )
                    }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    cartTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    quantity: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: 'row',
        marginLeft: 280,
        marginRight: 2,
    },
    cartItem: {
        marginVertical: 10,
        padding: 3,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        justifyContent: 'center'
    },
    addToCartButton: {
        backgroundColor: '#FDF3E3',
        paddingVertical: 5,
        paddingHorizontal: 13,
        borderRadius: 5,
        marginTop: 34,
        alignItems: 'center',
        justifyContent:'center',
        width:"50%",
        marginLeft:63
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    itemName: {
        fontSize: 18,
        flexDirection: "row"

    },
    itemDetails: {
        fontSize: 12,
        marginBottom: 5,
        flexDirection: "row"
    },
    actionButton: {
        color: 'black',
        fontSize: 24,
        marginHorizontal: 10,
    },
    pending: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    paddingCard:{
        backgroundColor: "#FDF3E3",
        width:"100",
        height:24,
        paddingHorizontal:12,
        justifyContent:"center",
        alignItems:"center",
        marginTop:5,
        marginBottom:10
    },
    date:{
        marginTop:5,
        marginBottom:5
    },
    textlight:{
        fontSize: 13,
        color:"grey"
    },
    textPay:{
        fontSize:15,
        color:'black'
    }
});


export default OnGoing;



