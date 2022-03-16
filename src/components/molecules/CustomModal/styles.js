import {
    Dimensions,
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    modalContainer : {
        width:'80%',
        height: '30%',
        backgroundColor: '#ccc',
        elevation: 4,
        justifyContent:'center',
        marginLeft: 40,
        marginTop: 200,
        shadowOffset: { width:1, height:1 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        borderRadius: 4,
      },
      modalTitle: {
        fontSize:14,
        color: '#212121',
        padding: 25,
      },
      modalContent: {
        paddingHorizontal: 25,
      },
      modalContentItem :{
        fontSize: 14,
        color: '#212121',
        fontWeight: 'bold',
        marginVertical: 10,
      },
      modalButton : {
        marginVertical: 10,
        paddingHorizontal:25,
      }
    })
