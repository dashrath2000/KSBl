// import React from 'react';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../constants';
import Accordion from 'react-native-collapsible/Accordion';
import {Divider, useTheme} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import {
  responsiveScreenHeight as Height,
  responsiveScreenWidth as Width,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
class AccordionView extends Component {
  state = {
    activeSections: [],
    visible: false,
  };
  hideMenu = () => {
    this.setState({visible: false});
  };

  showMenu = () => {
    this.setState({visible: true});
  };

  _renderHeader = section => {
    return (
        <>
        <View style={{flexDirection:'row',marginHorizontal:Width(8),marginTop: Height(0.5),marginRight:22}}>
    <View style={{flex:.4,
    }}>
        <Text style={{fontSize: 16,
                fontWeight: 'bold',
                color: Colors.PrimaryColor,}}>{section.Header}</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: 'gray'}}>{section.Headerdata}</Text>
        </View>

        <View style={{flex:.2, flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
        <Divider orientation="vertical" />
        </View>
       
    <View style={{flex:.4,alignItems:'flex-end'
    }}>
        <View>
        <Text style={{fontSize: 16,
        textAlign:'left',
                fontWeight: 'bold',
                color: Colors.PrimaryColor,}}>{section.Header1}</Text>
        
        <Text style={{fontSize: 12, fontWeight: 'bold', color: 'gray'}}>{section.Headerdata1}</Text>
        </View>
       

        </View>
</View>
     

      </>
    );
  };

  _renderContent = section => {
    return (
      <>
      <View style={{marginLeft:30,marginTop:3}}>
      <Text
              style={{
                //   marginLeft:Width(12),
                fontSize: 16,
                fontWeight: 'bold',
                color: Colors.PrimaryColor,
              }}>
              {section.Label}
            </Text>
            <Text
              style={{
                // marginLeft:Width(13),
                fontSize: 12,
                
                fontWeight: 'bold',
              }}>
              {section.Labeldata}
            </Text>

            

            <Text
              style={{
                //   marginLeft:Width(13),
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: Height(0.5),
                color: Colors.PrimaryColor,
              }}>
              {section.Label1}
            </Text>
            <Text
              style={{
                // marginLeft:Width(13),
                fontSize: 12,
                
                fontWeight: 'bold',
              }}>
              {section.Label1data}
            </Text>


            <Text
              style={{
                //   marginLeft:Width(13),
                fontSize: 16,
                fontWeight: 'bold',
                color: Colors.PrimaryColor,
                marginTop: Height(0.5),
              }}>
              {section.Label2}
            </Text>
            <Text
              style={{
                // marginLeft:Width(13),
                fontSize: 12,
                
                fontWeight: 'bold',
              }}>
              {section.Label2data}
            </Text>
      </View>


            
<View style={{flexDirection:'row',marginHorizontal:Width(8),marginTop: Height(0.5),marginRight:18}}>
    <View style={{flex:.4,
    }}>
        <Text style={{fontSize: 16,
                fontWeight: 'bold',
                color: Colors.PrimaryColor,}}>{section.Label3}</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: 'gray'}}>{section.Label3data}</Text>
        </View>

        <View style={{flex:.2, flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
        <Divider orientation="vertical"  />
        </View>
       
    <View style={{flex:.4,alignItems:'flex-end'
    }}>
       <View>
       <Text style={{fontSize: 16,
                fontWeight: 'bold',
                color: Colors.PrimaryColor,}}>{section.Lable4}</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: 'gray'}}>{section.Lable4data}</Text>
       </View>
       

        </View>
</View>


            
      
        
      </>
    );
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };

  render() {
    return (
      <Accordion
        sections={this.props.data}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
        sectionContainerStyle={{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            
            elevation: 24,
            
          backgroundColor: 'white',
          marginHorizontal: Width('4'),
          marginVertical: Height('2'),
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: 20,
          
        }}
        underlayColor={'transparent'}
      />
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: Width(12),
  },
  vertical: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default AccordionView;
