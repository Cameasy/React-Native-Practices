import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from '../Style';

export default props => {
  
     return(
     <SafeAreaView>
        <Text style={styles.txtG}> Num A: {props.a}</Text>
        <Text style={styles.txtG}> Num B: {props.b}</Text>
     </SafeAreaView>
     )
}
