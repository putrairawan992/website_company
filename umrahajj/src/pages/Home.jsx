import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import About from '../components/About.jsx';
import './Home.css';
import Slider from '../components/Slider.jsx';
import Features from '../components/Features.jsx';
import SimpleSlider from '../components/Instagram.jsx';
import Newsroom from '../components/Newsroom.jsx'
import Menu from '../components/Menu.jsx';
import Tombolmenu from '../components/Tombolmenu';




class Home extends Component {
    render() {
        return (
        
           <div className="home">
             
                    <Slider />
                        <About />
                            <Features />
                                <SimpleSlider />
                                    <Newsroom />
                                        
            </div> 
      
        );
    }
}


export default Home;

