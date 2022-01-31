import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      height: 100,
      marginTop: 50,
      flex: 1,
      alignItems: 'center',     
    },
    operators: {
      margin: 0,
      flex: 2,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
      width: '50%', 
    },
    list: {
      alignItems: 'center',
      margin: 15,
      flex: 2,     
    },
    input:{
      width: 200,
      margin:30,
      padding: 7,
      borderWidth: 1,
      borderRadius: 4,
      backgroundColor: "#e6e2d3",
      color: "purple"     
     },
  });

  const [text, setText] = useState('');  //tilamuuttuja tekstikenttää varten
  const [data, setData] = useState([]);   //tilamuuttuja listaa varten

  const addPressed = () => {     //tapahtumankäsittelijä, kun painetaan add-nappia
    setData([...data, {key: text}]);  //asetetaan tilamuuttuja text avainattribuutiksi listaan --> annettu input lisätään flatlistiin
    setText('');                //tyhjätään tekstikenttä
  }

  const clearPressed = () => {         //tapahtumankäsittelijä, kun painetaan clear-nappia
    setData([]);                //tyhjätään lista
  }

  //keyboardShouldPersistTaps -- Määrittää, milloin näppäimistön tulee pysyä näkyvissä napautuksen jälkeen
  return(
    <View style={{flex:1, alignItems: 'center', keyboardShouldPersistTaps:'handled'}}>
    <View style={styles.container}>  
    <TextInput style={styles.input}
      value={text} 
      onChangeText={text => setText(text)}
    />
     <View style={styles.operators}>
       <Button 
      onPress={addPressed}
      title="Add" color="purple"
    />
    <Button 
      onPress={clearPressed}
      title="Clear" color="purple"
    />
    </View>
    </View> 
    <View style={styles.list}>
    <Text style={{color:'purple', fontSize: 17, fontWeight: 'bold'}}>Shopping List</Text>

    <FlatList
      data={data} //propertyn nimi on data ja sille annetaan lista data, joka renderöidään
      renderItem={({item}) =>   //item on yksi alkio
          <Text>{item.key}</Text>} //poimitaan listan alkio eli otetaan itemista attribuutti key (eli tässä tapauksessa text)
          />
          </View>
    </View>
    );
}


