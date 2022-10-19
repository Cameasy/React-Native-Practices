import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from '../Style';
export default props => {
     return(
     <SafeAreaView>
        <Text style={styles.txtM}>{props.nome} {props.sobrenome}</Text>
     </SafeAreaView>
     )
}
