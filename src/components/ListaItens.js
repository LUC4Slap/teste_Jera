import React, {Component} from 'react';
import {ScrollView, TextInput, Button, View, StyleSheet} from 'react-native';
import axios from 'axios';
import Itens from './itens.js';

export default class ListaItens extends Component {
  constructor(props) {
    super(props);
    this.state = {listaItens: [], text: ''};
  }

  chamaApi = url => {
    axios
      .get(url)
      .then(response => {
        this.setState({listaItens: [...response.data.results]});
      })
      .catch(() => {
        console.log('erro ao recuperar os dados');
      });
  };

  pesquisa(text) {
    this.chamaApi(
      'https://api.themoviedb.org/3/search/movie?api_key=ba88f74ce41fc1578a161dfc7f2be00f&language=pt-BR&query=' +
        text,
    );
  }

  componentWillMount() {
    this.chamaApi(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=ba88f74ce41fc1578a161dfc7f2be00f&language=pt-BR',
    );
  }

  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <ScrollView style={{backgroundColor: '#ddd'}}>
        <View style={styles.pesquisa}>
          <TextInput
            style={styles.imput}
            placeholder="Pesquisar filme"
            onChangeText={text => {
              this.setState({text});
            }}
            value={this.state.text}
          />
          <View style={styles.botao}>
            <Button
              title="Pesquisar"
              onPress={() => {
                this.pesquisa(this.state.text);
              }}
            />
          </View>
        </View>

        {this.state.listaItens.map(item => (
          <Itens key={item.title} item={item} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pesquisa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botao: {
    marginTop: 10,
    marginRight: 10,
  },
  imput: {
    fontSize: 18,
    color: '#000',
    borderBottomWidth: 1,
    borderColor: '#000',
    width: 250,
    margin: 10,
  },
});
