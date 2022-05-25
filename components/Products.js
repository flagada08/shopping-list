import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Products = ({name}) => {
    return (
    <View style={styles.items}>
        <Text style={styles.element}>{name}</Text>
    </View>
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
        marginVertical: 6
    }
});

export default Products;