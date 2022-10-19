import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import styles from '../Style';

export default props => {
     return(
     <SafeAreaView  style={style.Display}>
        <Text style={[styles.txtM, style.DisplayText]}>{props.num}</Text>:
     </SafeAreaView>
     )
}
const style = StyleSheet.create({
    Display: {
        backgroundColor: '#333',
        padding: 20,
        width: 250
    },
    DisplayText: {
        color: '#fff',
    }
})
