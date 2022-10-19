import React from "react";
import { Button } from "react-native";

export default props => {
    function executar(){
        console.warn('Exec!!!!')
    }
    return (
     <> 
     <Button title="Executar #01!" onPress={executar} />
     
     <Button title="Executar #02!" onPress={() => {
        console.warn('Exec #02!!!')
     }} />
     </>
     //passando a função como referência fazendo assim ele executar o código somente quando a ação definida ocorrer, não ao carregar a página que seria executar()
    )
}