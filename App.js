import React from "react";
import Test from './src/components/index';
import { View } from 'react-native';
import { configureStore } from './src/store/configure-store';
import { Provider } from 'react-redux';

const store = configureStore();
const App = () => (
  <Provider store={store}>
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Test/>
  </View>
  </Provider>
);

export default App;
