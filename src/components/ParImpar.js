import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './Style';
export default ({num = 0}) => {
    return(
        <SafeAreaView>
             <Text style={styles.txtG}>O Resultado é:</Text>
             { num % 2 === 0 
                ?  <Text style={styles.txtM}>Par</Text>
                :  <Text style={styles.txtM}>Ímpar</Text>
             }
        </SafeAreaView>
     )

     
}
