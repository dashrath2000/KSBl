import React from 'react';
import {View, Text} from 'react-native';
import Hamburger from 'react-native-animated-hamburger';
import {
  responsiveScreenHeight as Height,
  responsiveScreenWidth as Width,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../constants';



const Heading = ({Textstyle, Constyle,Title,Visible,HumburgerPress,burger}) => {
  return (
    <View style={[Constyle]}>
       {
           burger &&  <Hamburger type="cross" active={Visible} onPress={
            HumburgerPress
          }
          color={Colors.PrimaryColor}
          
          >
              
          </Hamburger>
       }
      <Text
        style={[
          {
            fontSize: responsiveFontSize(3.5),
            textAlign: 'center',
            fontWeight: 'bold',
            color: Colors.Black,

          },
          Textstyle,
        ]}>
        {Title}
      </Text>
    </View>
  );
};

export default Heading;
