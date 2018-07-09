import React, { Component } from 'react';
import './Features.css';
import {
    CarouselItem
  } from 'reactstrap';

import Smartphoneslide from './Smartphoneslide';
import { Container, Row, Col} from "reactstrap";

class Home extends Component {
    render() {
        return (

        
                <div class="jumbotron2">
                   <Container fluid>
                        <Row>
                            <Col md="12">
                                <h1>Our Features <hr class="hr_sendiri1"/></h1>
                            </Col>
		                </Row>
                        <Row>
                            <Col md="3">
                                <div class="device wp3 animated bounceInDown">
                                    <div class="device-content">
                                      <Smartphoneslide />
                                    </div>
                                </div>
                            </Col>
                             
                             

                                <Col xs="12" md="3">
                                    <img src={require("../images/test11.png")}  class="img-responsive img1"/>
                                    {/* <!-- <b class="b4">Marketplace </b><p class="p1" >Find and book umrah and hajj on your mobile app or website.</p> --> */}
                              
                                </Col>

                                  <Col xs="12" md="3">
                                <img src={require("../images/test22.png")} class="img-responsive img1"/>
                                        {/* <!-- <b class="b5">Qibla</b><p class="p3">Qibla compass on your mobileapp.</p> --> */}
                                </Col>

                                   <Col xs="12" md="3">
                                <img src={require("../images/test33.png")} class="img-responsive img1"/>
                                        {/* <!-- <b class="b6">Prayer Reminder</b><br><p class="p9">Prayer reminders on your mobile app.</p> --> */}
                                        </Col>
                             
                           
                         

                          
                          </Row>
                    </Container>
                </div>   
                
                
           
        );
    }
}


export default Home;