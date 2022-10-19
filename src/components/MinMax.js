import React from "react";
import { Text } from "react-native";
import styles from './Style'

export default props => (
    <Text style={styles.txtG}>
        O valor {props.max} é maior que o  valor {props.min}!
    </Text>
)
