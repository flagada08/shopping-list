import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput,Button } from 'react-native';

const AddProduct = ({submitHandler}) => {

  const [product, setProduct] = useState('');
  // const [btnDisable, setBtnDisable] = useState(true);

  // useEffect(() => {
  //   if (product.length > 1) {
  //     setBtnDisable(false);
  //   } else {
  //     setBtnDisable(true);
  //   }
    
  // }, [product]);
  

  const inputHandler = (val) => {
    setProduct(val)
  }

  const handleClick = () => {
    submitHandler(product);
    setProduct('');
  }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Nouveau produit"
                onChangeText={inputHandler}
                value={product}
            />
            <Button 
                title="VALIDER"
                onPress={handleClick}
                // disabled={btnDisable}
            />
      </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      marginBottom: 9
    },
    textInput: {
      borderColor: "grey",
      borderWidth: 1,
      borderRadius: 3,
      padding: 5,
      paddingLeft: 9,
      fontSize: 18,
      flexGrow: 1
    },
  });

export default AddProduct;