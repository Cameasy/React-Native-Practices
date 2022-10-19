import React, {useState} from "react";
import { Text, Button} from "react-native";
import styles from './Style';

export default ({inicial = 6}) => { ///desestruturação
    // let num = props.inicial
    const [num, setNum] = useState(inicial) //Eu não altero diretamente o número, eu chamo uma função para alterar o número sem mexer nele
    const inc = () => {
        setNum(num + 1)
    }
    const dec = () => setNum(num - 1)
    return (
        <>
        <Text style={styles.txtG}>{num}</Text>
        <Button title="+"  onPress={inc}/>
        <Button title="-" onPress={dec}/>
        </>
    )
}