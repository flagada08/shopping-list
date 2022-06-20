import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Modal, Text } from 'react-native';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

export default function App() {

  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [count, setCount] = useState([]);

  const submitHandler = (product) => {
    // console.log(product);
    // setMyProducts([...myProducts, product])
    if (product.length > 1) {
      const idString = Date.now().toString();
      setMyProducts(currentMyProducts => [{key: idString, name: product}, ...currentMyProducts]);
    } else {
      setShowModal(true);
    //   Alert.alert('Désolé', 'Nombre de caractères doit être > 1', 
    //   [
    //     {
    //       text: 'COMPRIS',
    //       onPress: () => console.warn("refusé")
    //     }
    //   ],
    //   {
    //     cancelable: true,
    //     onDismiss: () => console.warn("dismissed")
    //   }
    //   )
    }
    // console.log(myProducts);
  }

  const deleteProduct = (key) => {
    setMyProducts(currentMyProducts => {
      return currentMyProducts.filter(product => product.key != key)
    })
  }

  return (
    <View style={styles.container}>
      <Modal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text>Hello World</Text>
            </View>
          </View>
        </View>
      </Modal>
      <AddProduct submitHandler={submitHandler}/>
      <FlatList
        data={myProducts}
        renderItem={({item}) => 
          <Products 
            name={item.name} 
            idString={item.key} 
            deleteProduct={deleteProduct} 
          />
        }
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "90%",
    height: 250,
    borderRadius: 15,
    alignItems: "center"
  },
  modalHeader: {
    // backgroundColor: "grey",
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray"
  }
});
