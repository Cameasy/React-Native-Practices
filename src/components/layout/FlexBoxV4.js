import React from 'react';
import { View, StyleSheet} from 'react-native';


export default props => {
     return(
     <View style={style.FlexV4}>
        <View style={style.V} />
        <View style={style.V1} />
        <View style={style.V2} />
     </View>
     )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: 'black'
    },
    V: {
        flexGrow: 3,
        backgroundColor: '#B45CF2'
    },
    V1: {
        flexGrow: 2,
        backgroundColor: '#C66F23'
    },
    V2: {
        flexGrow: 3,
        backgroundColor: '#B6FCD2'
    }
})