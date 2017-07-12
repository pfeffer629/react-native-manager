import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const   config = {
      apiKey: 'AIzaSyCiPoluLaYYvz90KG08B_94ZIegrnn8Ykk',
      authDomain: 'manager-cb11a.firebaseapp.com',
      databaseURL: 'https://manager-cb11a.firebaseio.com',
      projectId: 'manager-cb11a',
      storageBucket: '',
      messagingSenderId: '835090704116'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;