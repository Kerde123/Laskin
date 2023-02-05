import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import React, { useState } from 'react';

/*Tee yksinkertainen laskinsovellus React Native:lla.
Sovelluksen toiminta:
Kaksi TextInput komponenttia, johon voi syöttää numeroita. Käytä niissä numeronäppäimistöä estämään tekstin syöttö.
Kun '+' painiketta painetaan lasketaan syötettyjen numeroiden summa ja tulos näytetään sovelluksessa. 
Kun '-' painiketta painetaan lasketaan syötettyjen numeroiden erotus ja tulos näytetään sovelluksessa.


Jatka laskin tehtävää (Tehtävä 1).

Lisää sovellukseen FlatList komponentti, jossa näytetään kaikki sovelluksella tehdyt laskutoimitukset. 
Huom! Tietoa ei vielä tallenneta pysyvästi vaan historia nollautuu aina kun sovellus käynnistetään uudelleen.
*/

export default function App() {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const plusResult = parseInt(number1)+parseInt(number2);
  const minusResult = parseInt(number1)-parseInt(number2);
  
  const pressed1 = () => { 
    setResult(plusResult);
    setNumber1('');
    setNumber2('');

    const text = number1 + "+" + number2 + "=" + plusResult;
    setData([...data, { key: text }]);
  };
  
  const pressed2 = () => {
    setResult(minusResult);
    setNumber1('');
    setNumber2('');

    const text = number1 + "-" + number2 + "=" + minusResult;
    setData([...data, { key: text }]);
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

    <Text style={styles.fixToText}>History</Text>

    <FlatList style={styles.list}
        data={data}
        keyExtractor= { (item, index) => index }
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
      }
      />

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

  list: {
    marginLeft: 100,
    marginRight: 100,
  }
});
