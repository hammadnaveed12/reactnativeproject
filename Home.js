
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { Component, useEffect, useState } from 'react';

export default function Home({navigation}) {

  useEffect(()=>{
    global.setting={
      fs:50,
      fc:'green',
      bc:'white'
    }
  })
    return (
      <View style={{flex:1, backgroundColor:'black'}}>
        {console.log('Return')}
  
        <Button
            title="Go to Next Screen"
            onPress={() =>
            navigation.navigate('ProfileScreen',{id:'hef34231'})
          }
          />
  
      
        
        <Button
            title="Go to Setting Screen"
            onPress={() =>
            navigation.navigate('SettingsScreen', { name: 'Akhzar' })
          }
          />
          <Button
            title="Chat"
            onPress={() =>
            navigation.navigate('Chat')
          }
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

  