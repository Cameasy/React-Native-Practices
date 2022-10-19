import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from '../Style';
import produtos from './Produtos'

export default props => {
    function lista() {
        return produtos.map(p =>{
        return( 
        <Text style={styles.txtP} key={`${p.id}`}>{p.id}) {p.nome} tem R$ {p.preco}</Text>
       )
        })
    }
     return(
     <SafeAreaView>
        <Text style={styles.txtG}>Lista de Produtos</Text>
        {lista()}
     </SafeAreaView>
     )
}

//Nossa lista
//Precisamos declarar uma key com um valor único, pois o React nos cobre isso
//Convertamos o valor de key em string com a interpolação, pois há casos do React reclamar de seu valor key não ser um tipo string
//No .map() podemos adicionar um unico parametro indicando o produto, mas também podemos colocar um segundo parametro que representa o indice