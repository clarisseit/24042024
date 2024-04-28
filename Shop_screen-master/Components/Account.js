import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import CategoryScreen from "../Sreens/Vegetable"

export default function Box2() {
    
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
          <View style={styles.box}>
            <Image source={require("../assets/shop.png")} />
            <Text style={styles.boxText}>You don't have any order yet</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Shop')}>
                <Text style={{color:'white'}}>Shop now</Text>
            </TouchableOpacity>
          </View>
         
      </View>
    );
  }
  
 
  



const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
   
  },

  box: {
    marginTop:78,
    padding: 1,
    height: '59%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%', 
  
  },
  button:{
    backgroundColor:"#08C25E",
    width:153,
    height:30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:23
  }
});



