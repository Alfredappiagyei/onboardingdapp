

   
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import success from './assets/success.png'
 import {Entypo} from "@expo/vector-icons";

class Payment extends React.Component{
   
    render(){

       
    return (
        <View style={styles.container}>

          <View>
         <Text style={styles.header}>PAYMENT SUCCESSFUL</Text>
         </View>



         <View>
         <Text style={styles.comment}>
             Lorem Ipsum is simply dummy text of the printing and typesentting 
             industry. Lorem Ipsum has been the industrys standard dummy text 
             ever since 1500s, when an unknown printer took
         </Text>
         </View>


         <View>
          <Image source={success} style={styles.image}></Image>
         </View>

        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>


            
            <View>
                <Entypo
                name="dots-three-horizontal"
                size={40}
                color="#845EC2"
                style={styles.icon}
                />

             
                <Text style={styles.previous}>Previous</Text>
                </View>
        
     </View>
    
    );
}
  }










  const styles = StyleSheet.create({
    container: {
       marginHorizontal:50,
       marginTop:60
    },
    header:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:30
    },

     comment:{
         fontSize:16,
         color:"gray",
         lineHeight:25
         
     },

     image:{
         width:300,
         height:300,
         marginVertical:30
         
     },
     buttonContainer:{
           alignItems:"center",
           backgroundColor:"#9370DB"  ,
           marginHorizontal:70,
           borderRadius:30,
           marginTop:0
     },
      buttonText:{
          color:"#fff",
          fontSize:20,
          fontWeight:"bold",
          marginVertical:15
      
      },
    
      previous:{
        marginTop: -25,
        color:"#69686A",
        fontSize: 16,
        alignSelf: "flex-start"
    },
      icon:{
          marginTop: 10,
          marginLeft: 140
      }
    
   });
  

export default Payment;


















