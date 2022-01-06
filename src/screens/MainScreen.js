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

  import MenuDrawer from 'react-native-side-drawer'
  import Accordion from "../components/Accordion";
import { Button } from 'react-native-elements';

const MainScreen = ({navigation}) => {
    const [Visible, setVisible] = React.useState(false);
    

      const Data = [
          {Header: 'GRS No.',
          Header1: 'BatchNo.',
          Headerdata:'P0001',
          Headerdata1:'#123',
          Label:'Supplier Name',
          Labeldata:"UB GROUPS",
          Label1: 'Warehouse',
          Label1data:'WH-23, Kottyam',
          Label2:'FL1 Shop',
          Label2data:'Shop No 1',
          Label3:'Brand',
          Label3data:'JS K Rum',
          Lable4:'Pack Size',
          Lable4data:'750 ml'



        }
      ]
      const drawerContent = () => {
        return (
          <TouchableOpacity onPress={setVisible(!Visible)} >
            <Text>Close</Text>
          </TouchableOpacity>
        );
      };
    return (
        <View style={{flex:1,backgroundColor:'#f7f7f7'}}> 
        
         <Heading
          Textstyle={{color: Colors.PrimaryColor,marginLeft:Width(4),marginTop:Height(-0.5)}}
          Title={'KSBCL'}
          HumburgerPress={() => {setVisible(!Visible)} }
          Visible={Visible}
          burger
          Constyle={{flexDirection:'row',marginLeft:Width(3),marginTop:Height(3)}}
        />
         {/* <MenuDrawer 
          open={Visible} 
          drawerContent={drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <TouchableOpacity onPress={setVisible(!Visible)} >
            <Text>Open</Text>
          </TouchableOpacity>
        </MenuDrawer> */}
         
         <Accordion
            
            Visible={Visible}
            data={Data}
          />
          <View style={{alignItems:'center'}}>
          <TouchableOpacity style={{backgroundColor:Colors.PrimaryColor,width:Width(30),height:Height(4),borderRadius:20,justifyContent:'center',alignItems:'center'}}  onPress={() => navigation.navigate('SearchLabel')}>
              <Text style={{textAlign:'center',textAlignVertical:'center',color:'white'}}>Return</Text>
          </TouchableOpacity>
          </View>
          
            
        </View>
    )
}

export default MainScreen
