import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from "../Sreens/Main"
import { FontAwesome, Zocial, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import SignIn from '../Sreens/signIn';
import SignUp from '../Sreens/signUp';
import Login from '../Sreens/Login';
import Cart from '../Sreens/Cart';
import ShopScreen from "../Sreens/n"
import UserProfile from "../Sreens/Profile"
import StatsPage from '../Sreens/statistics/indexx';
import OnGoing from '../Sreens/Ongoing';
import { useEffect, useState } from 'react';

const Tab = createBottomTabNavigator()

const HomeTabNavigator = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const storedData = await getItemAsync("authProfile");
                const parsedData = JSON.parse(storedData);
                setData(parsedData);
            } catch (error) {
                console.error("Error retrieving user data:", error);
            }
        };

        getUser();
    }, []);

    console.log("role",data.data)
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'green',
            }}
        >
            {data && data.role == "user" ?
                <>
                    <Tab.Screen name="main"
                        component={Main}
                        options={{
                            tabBarIcon: ({ color }) => (

                                <FontAwesome name="shopping-basket" size={24} color={color} />

                            ),
                            headerShown: false
                        }}

                        title="Home"
                    />
                    <Tab.Screen
                        name="ShopScreen"
                        component={ShopScreen}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Zocial name="cart" size={24} color={color} />
                            ),
                            headerShown: false
                        }}
                    />
                    <Tab.Screen
                        name="My Order"
                        component={OnGoing}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <FontAwesome name="shopping-bag" size={24} color={color} />
                            ),
                            headerShown: false
                        }}
                    />
                    <Tab.Screen
                        name={"OnGoing"}
                        component={OnGoing}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <SimpleLineIcons name="bag" size={24} color={color} />
                            )
                        }}
                    />
                </>
                :
                <>
                    <Tab.Screen
                        name="UserProfile"
                        component={UserProfile}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account" size={24} color={color} />
                            ),
                            headerShown: false
                        }}
                    />
                    <Tab.Screen
                        name="Statistics"
                        component={StatsPage}
                    />
                </>

            }
        </Tab.Navigator>
    )
}

export default HomeTabNavigator