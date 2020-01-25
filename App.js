import React, {Component} from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import ListaItens from './src/components/ListaItens';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ListaItens />
      </SafeAreaView>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
export default App;
