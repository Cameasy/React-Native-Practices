import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';


// import CompPadrao, {Comp1, Comp2 } from './src/components/Multi'
// import Text from './src/components/First.js'
// import MinMax from './src/components/MinMax'
// import Aleatorio from './src/components/Aleatorio'
// import Titulo from './src/components/Titulo'
// import Botao from './src/components/Botao'
// import Contador from './src/components/Contador'
// import Pai from './src/components/direta/Pai'
// import Pai from './src/components/indireta/Pai'
// import ContadorV from './src/components/contador/Contadorv2'
// import DetectorOS from './src/components/Diferenciar'
//  import ParImpar from './src/components/ParImpar'
// import Pai from './src/components/relacao/Pai'
// import Filho from './src/components/relacao/Filho'
// import Usuario from './src/components/UsuarioLogado'
// import ListaProdutosV2 from './src/components/produtos/ListaProdutos'
// import ListaProdutosV2 from './src/components/produtos/ListaProdutosV2'
// import DigiteSeuNome from './src/components/DigiteSeuNome'
// import Quadrado from './src/components/layout/Quadrado'
// import FlexBoxV1 from './src/components/layout/FlexBoxV1'
// import FlexBoxV2 from './src/components/layout/FlexBoxV2'
// import FlexBoxV3 from './src/components/layout/FlexBoxV3'
// import FlexBoxV4 from './src/components/layout/FlexBoxV4'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
       {/*<FlexBoxV4 />
       <FlexBoxV3 />
       <FlexBoxV2 />
        <FlexBoxV1 />
        <DigiteSeuNome />
     <ListaProdutosV2 /> <ListaProdutos />
      <Usuario usuario={ {usuario: 'Cameasy', email: 'cameasy@email.com'} }/>
      <Usuario usuario={ {usuario: 'Camilinha Mil Grau', email: 'camilinhamilgrau@email.com'} }/>
      <Usuario usuario={ {email: 'camilinhamilgrau@email.com'} }/>
      <Usuario usuario={ {usuario: 'camilinhamilgrau'} }/>

      <Pai>
        <Filho nome="Carls" sobrenome="Carsonsville" />
        <Filho nome="Camilinha" sobrenome="Mil Grau" />
        <Filho nome="Kurt" sobrenome="Cobain" />
        <Filho nome="Júlia" sobrenome="Jujubinha" />
      </Pai>

        <ParImpar num={6}/>
      <ParImpar num={9}/> 
     <DetectorOS />
      <ContadorV />
      <Pai />
      <Contador />
      <Botao />
       <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro Poduto"/>
      <Text /> 
      <MinMax min={3} max={30}/>
      <Aleatorio x={6} y={60}/>
      <Aleatorio x={6} y={60}/>
      <Aleatorio x={6} y={60}/>
      <Aleatorio x={6} y={60}/>
      <Aleatorio x={6} y={60}/>
       <CompPadrao />
      <Comp1 />
      <Comp2 /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Significa que estou dizendo para o componente que pode crescer. Parecido com o flex-grow
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});
