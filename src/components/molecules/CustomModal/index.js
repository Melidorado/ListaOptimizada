import { Button, Modal, Text, View } from 'react-native';

import React from "react";
import { styles } from './styles';

const CustomModal = ({ title, description, selectedItem, buttonText, onHandleDeleteItem, visible}) => {
    return(
        <Modal
          animationType='slide'
          transparent={true}
          visible={visible}>
            <View style={styles.modalContainer}>
              <View style={styles.modalTitle}>
                  <Text>{title}</Text>
              </View>
              <View style={styles.modalContent}>
                <Text>{description}</Text>
                <Text style={styles.modalContentItem}>{selectedItem.value}</Text>
              </View>
              <View style={styles.modalButton}>
                  <Button
                    title={buttonText}
                    color="#841584"
                    onPress={() => onHandleDeleteItem(selectedItem.id)}
                  />
              </View>
            </View>
        </Modal>
    )
}

export default CustomModal;