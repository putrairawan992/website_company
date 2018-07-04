import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter
} from 'react-router-dom';
import Tombolmenu from './components/Tombolmenu';
import Footer from './components/Footer';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>

              <Tombolmenu />  
              <Home />
              <Footer />
        
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
