import React from 'react';
import {SafeAreaView} from 'react-native';
import Filho from './Filho'


export default props => {
    let x = 158
    let y = 145
     return(
     <SafeAreaView>
        <Filho a={x} b={y}/>
        <Filho a={x+6} b={y+60}/>
        <Filho a={x-60} b={y+6}/>
     </SafeAreaView>
     )
}
