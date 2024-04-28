import React ,{useEffect,useState}from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { setAuthStatus, setLoaded, setAuthProfile, setAuthToken } from "../Redux/AuthSlice"
import { getItemAsync } from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";

const Checkout = ({ route }) => {
  const [data, setData] = useState(null);
  const [token, setToken] = useState("")

  // const totalAmount = route.params.totalPrice
  const retrieving = async () => {
    try {
      const authToken = await getItemAsync("authToken");
      if (authToken) {
        setToken(authToken)
      }
    } catch (error) {
      console.log(error)
    }
  }
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
    retrieving()
  }, []);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.info}>Phone: {data && data.Phone}</Text>
      <Text style={styles.info}>Deliver To: {data && data.location}</Text>
      {/* <Text style={styles.info}>Total Amount:{totalAmount}</Text> */}
      <TouchableOpacity onPress={() => navigation.navigate("OnGoing")} style={styles.addToCartButton}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Checkout;
