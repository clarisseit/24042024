import React, { useState } from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { Categories } from './Data/Categories'

const ListCategories = ({ handleForOngoing ,handleHistory }) => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    // const handleCategorySelect = (index) => {
    //     setSelectedCategoryIndex(index);
    //     onCategorySelect(index);

    // };
 const handleCategorySelect= (index) => {
    setSelectedCategoryIndex(index);
    if(index === 0){
        handleForOngoing()
    }else if(index === 1){
        handleHistory()
    }

 }
    return (
        <View style={styles.categoryListContainer}>
            {Categories.map((category, index) => (
                <TouchableOpacity  key={index} onPress={() => handleCategorySelect(index)}>
                    <Text
                        style={[styles.categoryListText, index == selectedCategoryIndex ? styles.activeCategoryListText : {}]}
                    >
                        {category}
                    </Text>
                </TouchableOpacity>
            ))
            }
        </View>
    )
}

export default ListCategories

const styles = StyleSheet.create({
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 50,
    },
    categoryListText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: "gray",
    },
    activeCategoryListText: {
        color: "black",
        borderBottomWidth: 2,
        paddingBottom: 5,
    },

})