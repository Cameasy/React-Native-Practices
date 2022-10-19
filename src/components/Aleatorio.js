import React from "react";
import { Text } from "react-native";
import styles from './Style'

export default ({x, y}) => { //Desestrututração
    const delta = y - x + 1
    const aleatorio = parseInt(Math.random() * delta ) + x
    return(
        <Text style={styles.txtG}>O valor aleatório é: {aleatorio}</Text>
    )
}
