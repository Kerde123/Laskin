import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

/*Tee yksinkertainen laskinsovellus React Native:lla.
Sovelluksen toiminta:
Kaksi TextInput komponenttia, johon voi syöttää numeroita. Käytä niissä numeronäppäimistöä estämään tekstin syöttö.
Kun '+' painiketta painetaan lasketaan syötettyjen numeroiden summa ja tulos näytetään sovelluksessa. 
Kun '-' painiketta painetaan lasketaan syötettyjen numeroiden erotus ja tulos näytetään sovelluksessa.*/


export default function App() {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  
    const pressed1 = () => { 
    setResult(parseInt(number1)+parseInt(number2));
    setNumber1('');
    setNumber2('');
  };
  
  const pressed2 = () => {
    setResult(parseInt(number1)-parseInt(number2));
    setNumber1('');
    setNumber2('');
  };
  


  return (
    <View>
    <View style={styles.container}>

      <Text>Result: {result} </Text>
      <TextInput
        style={{ width: 200, borderColor: 'black', borderWidth: 2}}
        keyboardType='numeric'
        onChangeText={number1 => setNumber1(number1)}
        value= {number1}
        />
      <TextInput
        style={{ width: 200, borderColor: 'black', borderWidth: 2}}
        keyboardType='numeric'
        onChangeText={number2 => setNumber2(number2)}
        value= {number2}
        />
      <StatusBar style="auto" />
    </View>

    <View style={styles.fixToText}>
      <Button
        title="+"
        onPress = {pressed1}
      />
      <Button
        title="-"
        onPress = {pressed2}
     />
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 100,
    marginRight: 100,
  },
});
