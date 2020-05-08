import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

export default class DadosPessoais extends React.Component {

  //construtor para uso do props
  constructor(props){
    super(props);
  }

  //renderização do componente
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.nome}>Nome: {this.props.nome}</Text>
        <Text style={styles.outros}>Sexo: {this.props.sexo}</Text>
        <Text style={styles.outros}>Data de Nascimento: {this.props.dataNasc}</Text>
      </View>

    );


  }
}

const styles = StyleSheet.create({
  container: {
      borderColor: 'black',
      borderWidth: 1
  },
  nome: { 
          width:'100%',
          margin: 5,
          textAlign: 'left',
          fontSize: 15,
          fontStyle:'bold',
        },
  outros: {
          width:'100%',
          margin: 5,
          textAlign: 'left',
          fontSize: 10,
          fontStyle:'italic',
  }
});

DadosPessoais.propTypes = {nome: PropTypes.string.isRequired,
                           sexo: PropTypes.string.isRequired,
                           dataNasc: PropTypes.string.isRequired};