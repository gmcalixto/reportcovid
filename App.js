import React,{Component, useState} from 'react';
import { Text, View, StyleSheet,FlatList,SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/header'
import RegistroAtendimento from './components/registroatendimento'
import DadosPessoas from './components/dadospessoais'

//fonte de dados
const DATA= require('./data/datasource.json')
var somaSuspeito = 0;
var somaPositivo = 0;
var somaNegativo = 0;

//lendo o JSON e contando os elementos
DATA.map((data) =>{

  var status = data.statuscovid;

  if(status == 'suspeito'){
    somaSuspeito+=1
  }
  else if(status == 'positivo'){
    somaPositivo+=1
  }
  else{
    somaNegativo+=1
  }

})


//função que gera cada elemento
function Item({nome,sexo,dataNasc,dataAtendimento,sintomas,doencaPreexistente,statusCovid}){ 

  return(
    <View style={styles.item}>
      <DadosPessoas nome={nome} sexo={sexo} dataNasc={dataNasc}/>
      <RegistroAtendimento
              dataAtendimento={dataAtendimento}
              sintomas={sintomas}
              doencaPreexistente={doencaPreexistente}
              statusCovid={statusCovid}/>
    </View>
  );
}

class App extends Component{
  
  render(){
    return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={
            ({item}) =>             
            <Item nome={item.nome} 
                              sexo={item.sexo}
                              dataNasc={item.data_nasc}
                              dataAtendimento={item.data_atendimento}
                              sintomas={item.sintomas}
                              doencaPreexistente={item.doenca_preexitente}
                              statusCovid={item.statuscovid}/>
        }
        ListHeaderComponent={<Header headerText='Relatório COVID-19'/>}
        stickyHeaderIndices={[0]}
        ListFooterComponent={<View style={{padding:20}}>
                              <Text>Suspeitos: {somaSuspeito}</Text>
                              <Text>Negativo: {somaNegativo}</Text>
                              <Text>Postivo: {somaPositivo}</Text>
                             </View>}
        />
    </SafeAreaView>
    )
  }
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  item: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 20,
  }
});
