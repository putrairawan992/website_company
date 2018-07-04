import React, { Component } from 'react';
import './Features.css';
import {
    CarouselItem
  } from 'reactstrap';

import Smartphoneslide from './Smartphoneslide';


class Home extends Component {
    render() {
        return (

        
                <div class="jumbotron2">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>Our Features <hr class="hr_sendiri1"/></h1>
                            </div>
		                </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="device wp3 animated bounceInDown">
                                    <div class="device-content">
                                    <div id="myCarousel2" class="carousel slide myCarousel" data-interval="false" data-ride="carousel">
                                    <div class="carousel-inner2">
                                      <Smartphoneslide />
                                      </div>
                                      
                                      </div>
                                    </div>
                                </div>
                           

                            <div class="image-content">

                                <div class="col-md-3 col-xs-6">
                                    <img src={require("../images/test11.png")}  class="img-responsive img1"/>
                                    {/* <!-- <b class="b4">Marketplace </b><p class="p1" >Find and book umrah and hajj on your mobile app or website.</p> --> */}
                                </div>

                                <div class="col-md-3 col-xs-6">
                                <img src={require("../images/test22.png")} class="img-responsive img2"/>
                                        {/* <!-- <b class="b5">Qibla</b><p class="p3">Qibla compass on your mobileapp.</p> --> */}
                                </div>

                                <div class="col-md-3 col-xs-6">
                                <img src={require("../images/test33.png")} class="img-responsive img3"/>
                                        {/* <!-- <b class="b6">Prayer Reminder</b><br><p class="p9">Prayer reminders on your mobile app.</p> --> */}
                                </div>

                            </div>

                            </div>
                         </div>   
                    </div>
                </div>   
                
                
           
        );
    }
}


export default Home;