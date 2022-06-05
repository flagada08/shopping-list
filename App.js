import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

export default function App() {

  const [myProducts, setMyProducts] = useState([]);

  const submitHandler = (product, setProduct) => {
    // console.log(product);
    // setMyProducts([...myProducts, product])
    const idString = Date.now().toString();
    if (product != ''){
      setMyProducts(currentMyProducts => [{key: idString, name: product}, ...currentMyProducts]);
    }
    // console.log(myProducts);
    setProduct('');
  }

  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler}/>
      <FlatList
        data={myProducts}
        renderItem={({item}) => <Products name={item.name}/>}
      />

      {/* <ScrollView>
        <View style={styles.items}>
          {
            myProducts.map((product, index) => <Text style={styles.element} key={index}>{product}</Text>)
          }
        </View>
      </ScrollView>   */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60    
  }
});
