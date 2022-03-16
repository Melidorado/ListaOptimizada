import {
  Button,
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React , { useState } from 'react';

import CustomModal from './components/molecules/CustomModal/index';
import Input from './components/atoms/Input/CustomInput'
import { styles } from './styles';

const App = () => {

  const [ text, setText ] = useState('');
  const [ textList, setTextList ] = useState([]);
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ selectedItem, setSelectedItem ] = useState({})

  const handleOnChangeInput = (value) => {
    setText(value);
  }

  const addItem = (item) => {
    if (text !== ''){
    setTextList([...textList, { id: textList.length + 1, value: item }]);
    setText('');
    }
  }

  const handleDeleteItem = (id) => {
    const newList = textList.filter( itemList => itemList.id !== id);
    setSelectedItem({});
    setTextList(newList);
    setModalVisible(!modalVisible);
  }

  const onHandleModal = (id) => {
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  }
  return (
    <View 
      style={styles.container}>
      <View
      style={styles.containerInput}>
        <Input
        placeholder='Type here'
        autoFocus={true}
        autoCorrect={false}
        placeholderTextColor='#841584'
        value={text}
        handleOnChangeText={handleOnChangeInput}
        />
        <Button
        title='ADD'
        color='#faf'
        onPress={() => addItem()}
        
        />
      </View>
      <View style={style.containerList}>
          <FlatList
            data={textList}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onHandleModal(item.id)}>
                <Text style={styles.textList}>{item.value}</Text>
              </TouchableOpacity>
            )}
          />
      </View>
      <View style={styles.modalContainer}>
        <CustomModal
          visible={modalVisible}
          title='Delete Item'
          description='Are you sure you want to delete this item?'
          selectedItem={selectedItem}
          buttonText='Yes'
          onHandleDeleteItem={handleDeleteItem}  
          />
        </View>
    </View>
  );
};

export default App;
