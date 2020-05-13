import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

//gerando data e hora atual
var now = new Date().toLocaleString();

export default class Header extends React.Component {

  
  //construtor para uso do props
  constructor(props){
    super(props);
  }

  //renderização do componente
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.props.headerText}</Text>
        <Text style={{fontSize: 10}}>Gerado em {now}</Text>
      </View>
    );


  }
}

const styles = StyleSheet.create({
  container: {
                      width:'100%',
                      borderWidth: 2,
                      padding: 10,
                      fontSize: 20,
                      textAlign:'left',
                      backgroundColor:'red'}
  }
);

Header.propTypes = {headerText: PropTypes.string.isRequired};