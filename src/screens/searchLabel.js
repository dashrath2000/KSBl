import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Heading from '../components';
import {Colors} from '../constants'
import {
    responsiveScreenHeight as Height,
    responsiveScreenWidth as Width,
    responsiveFontSize,
    
  } from 'react-native-responsive-dimensions';
  import { TextInput } from 'react-native-paper';
import Textinput from '../components/Textin';

const SearchLabel = ({navigation}) => {
    const [Value, setValue] = React.useState('')
    return (
        <View style={{flex:1,backgroundColor:'#edf0f5'}}> 
        
         <Heading
          Textstyle={{color: Colors.PrimaryColor}}
          Title={'KSBCL'}
          
         
          Constyle={{marginTop:Height(3)}}
        />
    {/* <View style={{backgroundColor:'#e4eaf7',marginHorizontal:Width(10),height:Height(30),borderRadius:10,marginTop:Height(2)}}> */}
    {/* <TextInput
    
        label='Email'
        selectionColor='gray'
        underlineColor='gray'
        label="Enter Label No."
        value={Value}
        onChangeText={text => setValue(text)}
        style={{backgroundColor:'transparent',color:'white',marginHorizontal:Width(5),marginTop:Height(2),}}
      />  */}
      <Textinput placeholder={'Enter Label No.'} styles={{shadowColor: "#000",marginTop:Height(3),
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            
            elevation: 24,}}/> 
      <View style={{alignItems:'center',marginTop:Height(3)}}>
    <TouchableOpacity style={{backgroundColor:Colors.PrimaryColor,width:Width(30),height:Height(4),borderRadius:20,justifyContent:'center',alignItems:'center'}}
    onPress={() => navigation.navigate('MainScreen')}>
              <Text style={{textAlign:'center',textAlignVertical:'center',color:'white'}}>Next</Text>
          </TouchableOpacity>
          </View>
    </View>
  
        // </View>
    )
}

export default SearchLabel
