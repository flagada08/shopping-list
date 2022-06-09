import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const Products = ({name, idString, deleteProduct}) => {
    return (
        <Pressable 
            onPress={() => deleteProduct(idString)}
        >
            <View style={styles.items}>
                <Text style={styles.element}>{name}</Text>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    items: {
        marginTop: 10
    },
    element: {
        backgroundColor: "#d3d3d3",
        padding: 20,
        fontSize: 17,
        marginVertical: 6,
        borderRadius: 3
    }
});

export default Products;