import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, } from 'react-native';

const request = async(callback) =>{
  const response = await fetch('https://swapi.dev/api/people/');
  const parsed = await response.json();
  callback(parsed.results);
}

export default function App() {

  const [registros, setRegistros] = useState([]);

  useEffect(()=>{
    request(setRegistros);
  },[])

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.caixa}>
      <Text style={styles.titulo}>API do StarWar's</Text>
      </View>
      <FlatList
        data={registros}
        numColumns={2}
        renderItem={({item}) =>
        <View style={styles.itens}>
        <Text>Nome:{item.name}</Text>
        <Text>Nome:{item.mass}</Text>
        <Text>Cor dos Olhos:{item.eye_color}</Text>
        </View>
      }
      />
      <StatusBar style="auto" />
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333456',
    justifyContent:'center',
    flexWrap:'nowrap',
  },
  itens:{
    backgroundColor:'#0877ca',
    flex:1,
    marginBottom:10,
    marginRight:10,
    marginLeft:10,
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
    paddingBottom:10,
    textAlign:'center',
    borderRadius:10,
  },
  caixa:{
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  titulo:{
    fontSize: 30,
    marginVertical:20,
    fontWeight:'bold',
    color:'#0877ca'
  }
});
