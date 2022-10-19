import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Quadrado from './Quadrado'

export default props => {
     return(
     <SafeAreaView style={style.FlexV3}>
      <Quadrado color='#CF5245' lado={10}/>
      <Quadrado color=''  lado={20}/>
      <Quadrado color='#B2CC45' lado={30}/>
      <Quadrado color='#B45CF2' lado={40}/>
      <Quadrado color='#C56D05' />
     </SafeAreaView>
     )
}

const style = StyleSheet.create({
    FlexV3: {
        //flexDirection
        //Quem é o eixo principal? Exatamente quem você definiu na flexDirection
        flex: 1,
        flexDirection: 'row-reverse',
        height: 350,
        width: '100%',
        justifyContent: 'space-evenly', //definindo o alinhamento no eixo da linha (que foi definido aqui como eixo principal)
        alignItems: 'center', //alinhando o eixo da coluna
        backgroundColor: 'black'
    }
})