import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Filho from './Filho';
import styles from '../Style'

export default props => {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)
    function exibirValor(num, texto){
        setNum(num)
        setTexto(texto)
    }
     return(
     <SafeAreaView>
        <Text style={styles.txtG}>{texto} {num}</Text>
        <Filho min={1} max={60} funcao={exibirValor}/>
     </SafeAreaView>
     )
}
