import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';
import Tombolmenu from './components/Tombolmenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
              <Tombolmenu />

              {/* Tinggal tambahin attribut path lalu buat pages nya
              lalu dikasih ke attribut component */}
              <Route path="/home" component={Home}/>
              <Route path="/faq" component={Faq} />
              <Route exact path="/" component={Home}/>
              <Route path="/contact" component={Contact}/>

              <Footer />
            </div>

        </BrowserRouter>
    );
  }
}

export default App;
