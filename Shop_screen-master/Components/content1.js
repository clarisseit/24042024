import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryScreen from "../Sreens/Vegetable"



export default function Box() {
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
        <View style={styles.row}>
        <View
          style={styles.box}
        >
         <Image source={require("../assets/vegetable.png")} />
          <Text style={styles.boxText} onPress={() => navigation.navigate('CategoryScreen', { category: 'Vegetable' })}>vegetables</Text>
        </View>
        <View
           style={styles.box}
         >
          <Image source={require("../assets/fruits.png")} />
         <Text style={styles.boxText} onPress={() => navigation.navigate('CategoryScreen', { category: 'fruits' })}>fruits</Text>
       </View>
          <View style={styles.box}>
            <Image source={require("../assets/meats.png")} />
            <Text style={styles.boxText}>meats</Text>
          </View>
          <View style={styles.box}>
            <Image source={require("../assets/seefood.png")} />
            <Text style={styles.boxText}>seafood</Text>
          </View>
        </View>
        <View style={styles.row2}>
          <View style={styles.box}>
            <Image source={require("../assets/milk.png")} />
            <Text style={styles.boxText}>milk</Text>
          </View>
          <View style={styles.box}>
            <Image source={require("../assets/bread.png")} />
            <Text style={styles.boxText}>bread</Text>
          </View>
          <View style={styles.box}>
            <Image source={require("../assets/frozen.png")} />
            <Text style={styles.boxText}>frozen</Text>
          </View>
          <View style={styles.box}>
            <Image source={require("../assets/organic.png")} />
            <Text style={styles.boxText}>organic</Text>
          </View>
        </View>
        
        <Text style={{fontSize:23}}>For Your Dinner</Text>
      </View>
    );
  }
  
 
  



const styles = StyleSheet.create({
  container: {
    
    width: '100%',
    // height: '55%',
    padding: 15,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    marginTop:-93
  },
boxText: {
    marginTop: 5,
    textAlign: 'center',
  },
  title: {
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:-9,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', 
    paddingHorizontal: 1,
   
   
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', 
    paddingHorizontal: 1, 
    marginTop:-50,
   
  },
  box: {
    backgroundColor: 'white',
    padding: 1,
    height: '59%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%', 
    borderRadius: 5,
    elevation: 2, 
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.10, 
    shadowRadius: 3, 
  },
});



