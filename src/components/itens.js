import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';

export default class Itens extends Component {
  render() {
    let img = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
    return (
      <View style={styles.item}>
        <StatusBar backgroundColor="#ddd" />
        <View>
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{height: 250, width: 150}}
            source={{uri: img + this.props.item.poster_path}}
          />
        </View>
        <View style={styles.detalhesItem}>
          <Text style={styles.txtTitulo}> {this.props.item.title} </Text>
          <Text style={styles.txtDetalhes}>
            Lançamento: {this.props.item.release_date}{' '}
          </Text>
          <Text style={styles.txtDescricao} numberOfLines={9}>
            {' '}
            {this.props.item.overview}{' '}
          </Text>
          <TouchableOpacity style={styles.btn} key={this.props.item.id}>
            <Text style={styles.mais}>Mais</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  item: {
    backgroundColor: '#ddd',
    borderWidth: 2,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    alingItem: 'center',
    borderRadius: 15,
  },

  foto: {
    width: 102,
    height: 102,
  },

  detalhesItem: {
    flex: 1,
    marginLeft: 20,

    txtTitulo: {
      fontSize: 20,
      color: 'blue',
      marginBottom: 5,
    },

    txtValor: {
      fontSize: 16,
      fontWeight: 'bold',
    },

    txtDetalhes: {
      fontSize: 16,
      color: '#000',
    },

    txtDescricao: {
      color: '#000',
      fontSize: 16,
    },
    mais: {
      textAlign: 'center',
      fontSize: 20,
      color: '#fff',
    },

    btn: {
      backgroundColor: '#cccc',
      padding: 2,
      marginTop: 5,
      borderWidth: 2,
      borderColor: '#fff',
    },
  },
};
