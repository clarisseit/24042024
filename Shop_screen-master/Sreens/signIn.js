import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
const { width } = Dimensions.get("screen")
export default function SignIn() {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../assets/icon.png")} style={styles.image} />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={{ fontSize: 20, padding: 20 }}>Welcome</Text>
                <Text style={{ marginHorizontal: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.email}>
                        <Text style={{ fontSize: 12, color: "white" }}>Countinue with Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.apple}>
                        <Text style={{ fontSize: 12, color: "white" }}>Sign in Apple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.google}>
                        <Text>Countinue with google</Text>
                    </TouchableOpacity>
                </View>
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
    image: {
        width: 200,
        height: 200
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
