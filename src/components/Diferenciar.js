import React from 'react';
import { Text, Platform} from 'react-native';
import style from './Style'

export default () => {
    if(Platform.OS === 'android'){
        return(
            <Text style={style.txtG}>Android</Text>
        )
    } else if(Platform.OS === 'ios'){
        return(
            <Text style={style.txtG}>Iphone</Text>
        )
    } else {
        return(
            <Text style={style.txtG}>{Platform.OS}</Text>
        )
    }
}