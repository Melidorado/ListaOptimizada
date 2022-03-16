import React , { useState } from 'react';
import {
    Text,
    TextInput,
    View
} from 'react-native';

import { styles } from '.styles';

const Input = ({ value, placeholder, handleOnChangeText, ...props}) => {
    return(
        <View>
            <TextInput
                {...props}
                placeholder={placeholder}
                style={styles.textInput}
                value={value}
                onChangeText={(text) => handleOnChangeText(text)}
            />
        </View>
    )
}

export default Input;