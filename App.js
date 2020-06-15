import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  let [numeros, setNumeros] = useState([]);

  const gerarMegaSena = () => {
    numeros = [] // limpa o array anterior
    while(numeros.length != 6) { // verifica sse tem os 6 n. caso nao continua o codigo
      numeros.push(Math.floor(Math.random() * 60) + 1); // gera n entre 1 e 60 

      numeros = numeros.filter((item, index) => { // verifica se tem repeticao nos numeros gerados
        return numeros.indexOf(item) === index;
      });
    }

    setNumeros( [ numeros ]); // seta o array com os 6 n gerados
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <Text style={ styles.tituloText }>Sortear números:</Text>
        <Button 
          title="Gerar números da MEGA SENA"
          onPress={gerarMegaSena}
        />
        <Text style={ styles.subTituloText }> { numeros.map(numero => `${numero}`) }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tituloText: {
        marginBottom: 16, fontSize: 22, color: '#696969'
    },
    subTituloText: {
        marginTop: 16, fontSize: 20, color: '#2c385e'
    },
    cardView: {
      textAlign: 'center',
      borderWidth: 3,
      borderColor: '#f44336',
      padding: 15,
      backgroundColor: '#ffebee',
      borderRadius: 10,
      boxShadow: 'inset 0 0 1em gold, 0 0 1em #2c385e'
    }
});
