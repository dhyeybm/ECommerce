import React from 'react';
import './App.css';
import Main from "./Components/Main.js"
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store.js'

class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <div className="App">
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;