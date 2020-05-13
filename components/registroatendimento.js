import React, {Component,useState} from 'react';
import {Text,View,StyleSheet,Modal,TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';



export default class RegistroAtendimento extends React.Component {

  //state para controlar visibilidade do modal
  state = {
    modalVisible: false,
  }

  //troca o modo de visibilidade do modal
  alteraModal(visibilidade){
    this.setState({modalVisible: visibilidade});
  }


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
      <View>
        
        <Modal
          animationType = {'slide'}
          transparent = {false}
          visible = {this.state.modalVisible}
          onRequestClose= {() => console.log('Modal fechado')}
        >

          <View style={styles.modal}>
            <Text style={styles.outros}>Data de Atendimento: {this.props.dataAtendimento}</Text>
            <Text style={styles.outros}>Sintomas: {this.props.sintomas}</Text>
            <Text style={styles.outros}>Doenças Pré-existentes: {this.props.doencaPreexistente}</Text>
            <Text style={styles.outros}> 
              Status COVID: <Text style={this.covidColor}>{this.props.statusCovid}</Text>
            </Text>

            <TouchableHighlight
              onPress={
                ()=>{
                  this.alteraModal(!this.state.modalVisible)
                }}>
                    <Text style={styles.button}>Fechar</Text>
            </TouchableHighlight>

          </View>

        </Modal>


        <TouchableHighlight
          onPress={
            ()=>{
              this.alteraModal(!this.state.modalVisible)
            }}>
          <Text style={styles.button}>Detalhes</Text>
        </TouchableHighlight>
     </View>
    );


  }
}

const styles = StyleSheet.create({
  outros: {
          width:'100%',
          margin: 5,
          textAlign: 'left',
          fontSize: 20,
          fontStyle:'italic',
  },
  button:{
    borderColor:'black',
    borderWidth: 1,
    fontSize: 20,
    backgroundColor: 'pink',
    textAlign: 'center'
  },
  modal: {
    borderColor: 'blue',
    borderWidth: 1,
    fontSize: 20,
    marginTop: 200,
    padding: 20
  }
});

RegistroAtendimento.propTypes = { dataAtendimento: PropTypes.string.isRequired,
                                  sintomas: PropTypes.string.isRequired,
                                  doencaPreexistente: PropTypes.string.isRequired,
                                  statusCovid: PropTypes.string.isRequired};
