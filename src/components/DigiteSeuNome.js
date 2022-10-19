import React, {useState}from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';
import styles from './Style';
export default props => {
    const [nome, setNome]  = useState('')
     return(
     <SafeAreaView>
        <Text>{nome}</Text>
     <TextInput placeholder="Digite seu Nome" value={nome} onChangeText={nome => setNome(nome)}/>
     </SafeAreaView>
     )
}
// A ideia de ter um componente controlado é: um evento acontece e então é chamado a função. 
// Se colocarmos null no value, temos um ambiente não ocntrolado