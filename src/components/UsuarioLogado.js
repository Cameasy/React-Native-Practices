import React from 'react';
import {Text} from 'react-native';
import styles from './Style';
import If from './If'


export default props => {
    const usuario = props.usuario || {} //definimos isso para não ter problemas de renderização, pois se setarmos o valor explicitamente, faremos alterações direto no mesmo. Essa é uma forma mais segura de controlarmos o estado de nossas variaveis

     return(
     <>
        <If teste={usuario && usuario.usuario && usuario.email}>
           <Text style={styles.txtG}>
            Usuário Logado:
        </Text>
        <Text style={styles.txtM}>
            {usuario.usuario} - {usuario.email}
        </Text> 
        </If>
        
     </>
     )
}
