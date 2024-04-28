import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { View, StyleSheet, TextInput } from 'react-native';
import SignUp from '../Sreens/signUp'
import { AntDesign } from '@expo/vector-icons';
import SignIn from '../Sreens/signIn'
import Main from '../Sreens/Main'
import CartList from '../Sreens/Cart';
import HomeTabNavigator from './HomeTabNavigator'
import CartScreen from '../Sreens/CartScreen';
import Login from '../Sreens/Login';
import Box2 from '../Components/Account';
import CategoryScreen from '../Sreens/Vegetable'
import CategoriesComponent from "../Sreens/Get"
import Payment from "../Sreens/Payment"
import CheckOut from '../Sreens/CheckOut';
import OnGoing from '../Sreens/Ongoing';
import OrderHistory from "../Sreens/Orderhistory"
import { EvilIcons, Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            < Stack.Navigator>
                <Stack.Screen
                    name={"Login"}
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name={'HomeTabNavigator'}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={"sign up"}
                    component={SignUp}
                    options={{
                        headerShown: false

                    }}
                />
                <Stack.Screen
                    name="CategoryScreen"
                    component={CategoryScreen}
                    options={() => ({
                        headerTitle: () => (
                            <View style={styles.header}>

                                <View style={styles.search}>
                                    <TextInput style={styles.input} placeholder="Search" />
                                    <EvilIcons name="search" size={30} color="black" />
                                </View>
                            </View>
                        ),
                    })}
                />


                <Stack.Screen
                    name={"Shop"}
                    component={Main}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name={"CartScreen"}
                    component={CartScreen}
                    options={{
                        headerShown: true
                    }}
                />
                <Stack.Screen
                    name={"CartList"}
                    component={CartList}
                    options={() => ({
                        headerTitle: () => (

                            <View style={styles.header}>

                                <View style={{marginLeft:272}}>
                                    <EvilIcons name="heart" size={24} color="green" />
                                </View>
                            </View>
                        ),
                    })}
                />
                <Stack.Screen
                    name={"CategoriesComponent"}
                    component={CategoriesComponent}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={"Payment"}
                    component={Payment}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={"CheckOut"}
                    component={CheckOut}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={"OnGoing"}
                    component={OnGoing}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name={"OrderHistory"}
                    component={OrderHistory}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={"Box2"}
                    component={Box2}
                    
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Add your styles for the screen container
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    search: {
        backgroundColor: '#F5F5F5',
        width: '100%',
        padding: 3,
        marginLeft: 1,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    input: {
        flex: 1,
        marginLeft: 58,
    },
});