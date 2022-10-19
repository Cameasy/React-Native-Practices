import React from 'react';
import {SafeAreaView, Button} from 'react-native';

export default props => {
    function gerarNum(min, max){
        const fator = max - min + 1
        return parseInt(Math.random() * fator + min)
    }
     return(
     <SafeAreaView>
        <Button title="Executar" onPress={function(){
            const n = gerarNum(props.min, props.max)
            props.funcao(n, 'O valor é: ')
        }}
        />
     </SafeAreaView>
     )
}
