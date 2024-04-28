import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
// import { setAuthProfile } from '../Redux/AuthSlice';
import { setAuthStatus, setAuthProfile, setAuthToken, } from '../Redux/AuthSlice';
const { width } = Dimensions.get("screen")
import axios from 'axios';
// import setItemAsync from "@react-native-async-storage/async-storage";
import { setItemAsync } from 'expo-secure-store';
import { useDispatch } from 'react-redux';



export default function SignUp() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState('')
    const [hidePassword, setHidePassword] = useState(true)
    const [isLoading, setIsLoading] = useState("");
    const dispatch = useDispatch()

    const passwordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    const onSubmit = () => {
        if (validateForm()) {
            navigation.navigate('HomeTabNavigator');
            handleRegister()
        }

    }

    const validateForm = () => {
        let errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        //  passwordRegex.test(password);
        if (!email) {
            errors.email = 'Enter email';
        } else if (!emailRegex.test(email)) {
            errors.email = 'Invalid email format';
        }

        if (!password) {
            errors.password = 'Enter password';
        }

        if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords don't match";
        }
        setError(errors);
        return Object.keys(errors).length === 0;
    };
    const navigation = useNavigation()
    const SIGNUP_API_URL = 'https://grocery-9znl.onrender.com/api/v1/auth/signup';


    const handleRegister = async () => {
        const data = {
            email,
            password,
            location: 'Gisozi',
            fullName: "annah",
            phone: "078883411",
            dateOfBirth: "5/2/2023"
        }
        try {
            setIsLoading(true);
            const response = await axios.post(SIGNUP_API_URL, data);
            console.log("res", response.data.access_token)
            dispatch(setAuthStatus(true))
            dispatch(setAuthProfile(response.data.user))
            dispatch(setAuthToken(response.data.access_token))
            setItemAsync("authToken", response.data.user)
            setItemAsync("authProfile", JSON.stringify(response.data.user))
            setIsLoading(false);
            alert(response.data.message);
            // navigation.navigate('HomeTabNavigator')
        } catch (error) {
            console.error("err", error);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                <AntDesign
                    name="arrowleft"
                    size={24}
                    color="green"
                />
            </TouchableOpacity>
            <View style={styles.getstarted}>
                <View style={styles.title}>
                <Text style={{fontFamily:"NotoSansOsmanya"}}>Let's get started</Text>
                </View>
                <Text style={{fontFamily:"NotoSansOsmanya"}}> create account to see Our top picks for you</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.emailContainer}>
                        <TextInput style={styles.input} placeholder="Email" onChangeText={(value) => setEmail(value)} />

                        <MaterialCommunityIcons name="email-outline" size={24} color="green" style={styles.icon} />
                    </View>
                </View>
                {
                    error.email && <Text style={{ color: 'red' }}>{error.email}</Text>
                }
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.emailContainer}>
                        <TextInput style={styles.input} placeholder="password" secureTextEntry={hidePassword} onChangeText={(value) => setPassword(value)} />
                        {/* <Feather name="eye-off" size={24} color="green" style={styles.icon} onPress={()=>{setHide(!hidePassword)}}/> */}
                        <Feather
                            name={hidePassword ? "eye-off" : "eye"}
                            size={24}
                            color="green"
                            style={styles.icon}
                            onPress={passwordVisibility}
                        />
                    </View>
                </View>
                {
                    error.password && <Text style={{ color: 'red' }}>{error.password}</Text>
                }
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={styles.emailContainer}>
                        <TextInput style={styles.input} placeholder="confirm password" secureTextEntry={hidePassword}  onChangeText={(value)=>setConfirmPassword(value)} />
                        {/* <Feather name="eye-off" size={24} color="green" style={styles.icon} /> */}
                 <Feather
                        name={hidePassword ? "eye-off" : "eye"} 
                        size={24}
                        color="green"
                        style={styles.icon}
                        onPress={passwordVisibility} 
                    />
                    </View>
                </View> 


            </View>
            {isLoading ?
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>loading......</Text>
                </TouchableOpacity> :
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}> Create account</Text>
                </TouchableOpacity>
            }
            <Text style={{ textAlign: 'center', padding: 10 }}>OR </Text>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.apple}>
                    <Text>Countinue with Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.google}>
                    <Text>Countinue with google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 20,
        padding: 23
    },

    inputContainer: {
        width: '100%',
        marginBottom: 1,
    },
    icon: {
        right: 30
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
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    button: {
        height: 50,
        width: width - 40,
        backgroundColor: 'green',
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
        marginTop: 30
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
    apple: {
        width: width - 40,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        borderRadius: 5
    },
    google: {
        width: width - 40,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        borderRadius: 5,
        marginTop: 10
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
});