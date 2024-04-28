import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';


export default Landing = () => {

    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/y2.png')} style={styles.image} />
            <View style={styles.imageContainer}>

                <Image source={require('../assets/hm.png')} style={styles.image} />
            </View>
            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.button}>
                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems:"center" ,gap:10}}>
                        <FontAwesome5 name="apple" size={20} color="white" />
                        <Text style={styles.buttonText}>SignUp with Apple</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.whiteButton]}>
                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems:"center" ,gap:10}}>
                    <MaterialCommunityIcons name="google" size={24} color="black" />
                    <Text>SignUp with Google</Text>
                    </View>
                    </TouchableOpacity>
                    
                <TouchableOpacity 
                    onPress={() => navigation.navigate("sign up")}
                    style={[styles.button, styles.greenButton]
                    }>
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.signInText} >already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("main")}>
                    <Text style={{ color: 'green', fontSize: 12 }}>Login Here</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 1,
        width: '100%',
        height: '56%',
        marginTop: 100,
    },
    image: {

    },
    signInText: {
        marginTop: 2,
        color: 'grey',
        textDecorationLine: 'none',

    },
    footer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 1,
        flexDirection: 'row',
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
    },
    button: {
        backgroundColor: 'black',
        width: "100%",
        height: 37,
        justifyContent: 'center',
        // alignItems: 'center',
        marginBottom: 2,
        borderRadius: 5,
    },
    whiteButton: {
        backgroundColor: 'white',
    },
    greenButton: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});