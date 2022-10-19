import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Quadrado from './Quadrado'

export default props => {
     return(
     <SafeAreaView style={style.FlexV1}>
      <Quadrado color='#CF5245'/>
      <Quadrado color=''/>
      <Quadrado color='#B2CC45'/>
      <Quadrado color='#B45CF2'/>
     </SafeAreaView>
     )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1, //flex grow
        justifyContent: 'center', //Alinnhando os elementos dentro do eixo principal: o eixo da coluna ou cross axis
        backgroundColor: 'black'
    }
})