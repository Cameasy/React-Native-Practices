import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import styles from '../Style';
import produtos from './Produtos'

export default props => {
    const produtoRender = ({item: p}) => {
        return <Text style={styles.txtP}>{p.id}) {p.nome}  - R$ {p.preco}</Text>
   }
     return(
     <SafeAreaView>
        <Text style={styles.txtG}>Lista de Produtos V2</Text>
        <FlatList data={produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={produtoRender}
    />
     </SafeAreaView>
     )
}