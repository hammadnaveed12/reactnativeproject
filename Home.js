
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import  firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database"
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default function Home({navigation}) {
  const firebaseConfig = {
    apiKey: "AIzaSyCUPzkgmdxU6xK4-YJ3-PgIhk_3LE0b1Uw",
    authDomain: "home-44f28.firebaseapp.com",
    databaseURL: "https://home-44f28-default-rtdb.firebaseio.com",
    projectId: "home-44f28",
    storageBucket: "home-44f28.appspot.com",
    messagingSenderId: "833104399944",
    appId: "1:833104399944:web:1b1bf65868cd7fae28927d"
  };
  firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const [option,setOption]=useState(false)
let data=[]
database.ref('/').once('value').then((snapshot) => {
   data = snapshot.val();
  // console.log(data);
});

let array=[{
  id:1,
  name:"Surat-ul-Fateha",
  verses: 7,
  heart:"false"

},
{
  id:2,
  name:"Surat-ul-Baqarah",
  verses: 286,
  heart:"false"

},
{
  id:3,
  name:"Surat-ul-Imran",
  verses: 200,
  heart:"false"
}]

  useEffect(()=>{
    global.setting={
      fs:50,
      fc:'green',
      bc:'white'
    }
  })
  const [visibleItems, setVisibleItems] = useState([]);
  const toggleItem = (itemId) => {
    if (visibleItems.includes(itemId)) {
      setVisibleItems(visibleItems.filter((id) => id !== itemId));
    } else {
      setVisibleItems([...visibleItems, itemId]);
    }
  };
    return (
      
      <View style={{flex:1, backgroundColor:'black'}}>
        
       <View style={{flex:0.1,backgroundColor:"#25be85",marginTop:50,alignItems:"center",flexDirection:"row"}}>
<FontAwesome style={{marginLeft:10}}name="angle-left"  size={30} color="white"/>

<View style={{borderWidth:2,borderColor:"white",marginLeft:60,borderRadius:5}}>
  <Text style={{color:"white"}}>
    Premium
  </Text>
</View>
       </View>

<FlatList  
data={array}

renderItem={({item})=>(
  <View>
  <View style={{backgroundColor:"grey",margin:10,borderRadius:5,flexDirection:"row",alignItems:"center",padding:10}}>
    <Text>{item.id}   </Text>
    <View style={{flex:1,justifyContent:"flex-end"}}> 
<Text>{item.name}</Text>
<Text>Verses {item.verses}</Text>


</View>

<TouchableOpacity onPress={()=>{
  toggleItem(item.id)
}}>
<FontAwesome name="heart" size={30} color="red"/>
</TouchableOpacity>


          </View>
         
          {visibleItems.includes(item.id) && (
            <View>
              <Text style={{fontSize:20,color:"white"}}>I am here....</Text>
              </View>
          )}
          </View>
        

)}
/>


      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  