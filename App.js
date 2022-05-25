import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [product, setProduct] = useState('');
  const [myProducts, setMyProducts] = useState([]);

  const inputHandler = (val) => {
    setProduct(val)
  }

  const submitHandler = () => {
    // console.log(product);
    // setMyProducts([...myProducts, product])
    const idString = Date.now().toString();
    if (product != ''){
      setMyProducts(currentMyProducts => [{key: idString, name: product}, ...currentMyProducts]);
    }
    console.log(myProducts);
    setProduct('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={inputHandler}
          value={product}
        />
        <Button 
          title="VALIDER"
          onPress={submitHandler}
        />
      </View>

      <FlatList
        data={myProducts}
        renderItem={({item}) => <Text style={styles.element}>{item.name}</Text>}
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
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 9
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    flexGrow: 1
  },
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
