import React, {Component,useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';



export default class RegistroAtendimento extends React.Component {


  //construtor para uso do props
  constructor(props){
    super(props);

    //decide cor do status de covid
    if(this.props.statusCovid == 'positivo'){
        this.covidColor = {color: 'red'};
    }
    else if(this.props.statusCovid == 'negativo'){
      this.covidColor = {color: 'green'};
    }
    else{
      this.covidColor = {color: 'magenta'};
    }
    
  }

  

  //renderização do componente
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.outros}>Data de Atendimento: {this.props.dataAtendimento}</Text>
        <Text style={styles.outros}>Sintomas: {this.props.sintomas}</Text>
        <Text style={styles.outros}>Doenças Pré-existentes: {this.props.doencaPreexistente}</Text>
        <Text style={styles.outros}> 
          Status COVID: <Text style={this.covidColor}>{this.props.statusCovid}</Text>
        </Text>
      </View>
    );


  }
}

const styles = StyleSheet.create({
  container: {
      borderColor: 'black',
      borderWidth: 1
  },
  covid: { 
          width:'100%',
          margin: 5,
          textAlign: 'left',
          fontSize: 15
        },
  outros: {
          width:'100%',
          margin: 5,
          textAlign: 'left',
          fontSize: 10,
          fontStyle:'italic',
  }
});

RegistroAtendimento.propTypes = { dataAtendimento: PropTypes.string.isRequired,
                                  sintomas: PropTypes.string.isRequired,
                                  doencaPreexistente: PropTypes.string.isRequired,
                                  statusCovid: PropTypes.string.isRequired};