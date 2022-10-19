import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default props => {
     const lado = props.lado || 50
     return(
     <SafeAreaView style={{
        width: lado,
        height: lado,
        backgroundColor: props.color || '#333'
    }
}>
     </SafeAreaView>
     )
}
