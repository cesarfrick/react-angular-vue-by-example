import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Faq from './components/faq/Faq';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />

          <Route exact={true} path="/" component={Home} />
          <Route path="/faq" component={Faq} />

          <Footer />
      </div>
    );
  }
}

export default App;
