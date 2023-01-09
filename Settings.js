
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Switch,View, Image, TextInput, TouchableOpacity, Button, FlatList, ScrollView  } from 'react-native';
import React, { Component, useEffect, useState } from 'react';


export default function Settings({navigation,route}) {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  
         useEffect(() => {
            
          }, []);
          
    return (
        
      <View style={styles.container}>
        <Text>
            Arabic
        </Text>

<Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>
            Translation
        </Text>

<Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isEnabled1}
      />

      {isEnabled?<View><Text>Arabic</Text></View>:<View></View>}
      {isEnabled1?<View><Text>Translation</Text></View>:<View></View>}
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

