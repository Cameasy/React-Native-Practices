import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'
import styles from '../Style';

export default props => {
    const [num, setNum] = useState(0)
    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)
     return(
     <SafeAreaView>
        <Text style={styles.txtG}>Contador</Text>
        <ContadorDisplay num={num}/>
        <ContadorBotoes inc={inc} dec={dec}/>
     </SafeAreaView>
     )
}

