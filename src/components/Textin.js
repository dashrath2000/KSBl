import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Colors} from '../constants';

const Textinput = ({
  styles,
  placeholder,
  rightView = null,
  secure,
  Searchhandler,
  value,
  query,
  Searchbtn = null,
}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secure}
        onChangeText={Searchhandler}
        value={value}
        style={[
          {
            backgroundColor: Colors.Gray,

            paddingHorizontal: 17,
            marginHorizontal: 30,
            borderRadius: 20,
            marginVertical: 9,
            borderWidth: 0.5,
            borderColor: '#E8E8E8',
          },
          styles,
        ]}
      />
      
    </View>
  );
};

export default Textinput;
