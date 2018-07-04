import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import About from '../components/About.jsx';
import './Contact.css';
import Tombolmenu from '../components/Tombolmenu.jsx';




class Contact extends Component {
    render() {
        return (
        
           <div className="contact">
                <Tombolmenu />
                    
                    <Footer />
            </div> 
      
        );
    }
}


export default Contact;

