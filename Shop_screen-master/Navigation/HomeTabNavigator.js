import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from "../Sreens/Main"
import {useEffect} from 'react'
import { FontAwesome, Zocial, MaterialCommunityIcons, EvilIcons} from '@expo/vector-icons';
import ShopScreen from "../Sreens/n"
import UserProfile from "../Sreens/Profile"
import StatsPage from '../Sreens/statistics/indexx';
import OnGoing from '../Sreens/Ongoing';
import { useSelector,useDispatch } from "react-redux";
import { getItemAsync, setItemAsync } from "expo-secure-store";
import {
    setAuthStatus,
    setAuthLoaded,
    setAuthToken,
    setAuthProfile,
  } from "../Redux/AuthSlice";

const Tab = createBottomTabNavigator()
const HomeTabNavigator = () => {
    const { authStatus, authProfile,authLoaded } = useSelector((state) => state.auth);
    // console.log(authProfile?.role, "Auth profile");



    const dispatch = useDispatch();
  
    const handleAuth = async () => {
      let token = await getItemAsync("authToken");
      let profile = await getItemAsync("authProfile");
      dispatch(setAuthToken(token));
      dispatch(setAuthProfile(JSON.parse(profile)));
      if(token)
      {
      dispatch(setAuthStatus(true))
      }
     
      dispatch(setAuthLoaded(true));
   
  };
  
  useEffect(() => {
      handleAuth();
    },[]);
    if (!authLoaded) {
      return null;
    }





    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'green',
            }}
        >
              { authProfile?.role !== "manager" ?
            <>
            <Tab.Screen name="Shop"
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
                name="Cart"
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
                name={"Account"}
                component={UserProfile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" size={24} color={color} />
                    ),
                    headerShown: false
                }}
            />
            </>
              :
              <>
          
            <Tab.Screen 
                name="Statistics"
                component={StatsPage}
                options={{
                    tabBarIcon: ({ color }) => (
                        <EvilIcons name="chart" size={24} color="black" />
                    ),
                    headerShown: false
                }}

                />

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
                </>
                }
        </Tab.Navigator>
    )
}

export default HomeTabNavigator