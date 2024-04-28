import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import Box from '../Components/content1'
import CategoriesComponent from "../Sreens/Get"

const { width } = Dimensions.get("screen")
export default function Main() {
    return (
        <View style={styles.container}>
            {/* <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../assets/icon.png")} style={styles.image} />
            </View> */}
            <View style={{ flexDirection: 'row', marginTop: 55 }}>
                <View style={styles.Search}>
                    <TextInput style={styles.input} placeholder="Search" />
                    <EvilIcons name="search" size={30} color="white" />
                </View>
                <Ionicons name="notifications" size={40} color="white" style={{ marginLeft: 23 }} />
            </View>
            <View style={styles.banana}>
                <View style={styles.TextB}>
                <Text style={styles.TextB}>BANANA {'\n'}5% OFF </Text>
                </View>
                <Image source={require("../assets/banana.png")} style={styles.image} />
            </View>
            <Text style={styles.Buy}>BUY NOW</Text>

            <View style={styles.bottomContainer}>
                <View style={{flexDirection:"row", justifyContent:"flex-end", marginRight:20, marginTop:20}}>
                    <Text> See all promos</Text>
                </View>
                {/* <Box /> */}
                <CategoriesComponent />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#08C25E",
        height: "100%",
        borderTopEndRadius: 5,
        borderTopLeftRadius: 5,

    },
    Search: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '70%',
        padding: 11,
        // marginTop:55,
        marginLeft: 15,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    TextB: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 23
    },
    banana: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center"
    },
    Buy: {
        color: 'white',
        fontSize: 20,
        backgroundColor: '#FEB82F',
        marginLeft: 15,
        fontWeight: 'bold',
        width: '40%',
        textAlign: 'center'
    },
  
    bottomContainer: {
        marginTop: 100,
        backgroundColor: "white",
        width: "100%",
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        height: "100%"
    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    email: {
        width: width - 40,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        backgroundColor: "#08C25E",
        borderRadius: 5
    },
    apple: {
        width: width - 40,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: "black"
    },
    google: {
        width: width - 40,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        borderRadius: 5,
        marginTop: 10,

    }
});
