import React, { Component } from 'react';
import './About.css';
import { Container, Row, Col} from "reactstrap";

class About extends Component {
    render() {
        return (      
        <div className="content-home-1">
            <Container fluid>
                <Row>

                    <Col lg="6" md="6" sm="6" className="hidden-xs">
                        <img src={require("../images/masjid_kabbah.png")} className="masjid_kabbah hidden-xs"/> 
                    </Col>      
                    
                     <Col lg="6" md="6" sm="6" xs="12">
                            <div className="about">
                                    <h1>About Umrahajj <hr className="hr_sendiri"/> </h1>
                            </div>
                                <div className="tulisan">
                                    <p>UmraHajj was established in 2017 by Malaysian based Modest Travel Sdn. Bhd. as a global digital hub for modest travelling with the aim of taking the spiritual journey to the next level.</p>
                                </div>

                                <div className="image-content2">
                                    <Col md="4" lg="4" sm="4" xs="3">
                                        <img src={require("../images/amanah.png")} className="img-responsive img2"/> 
                                            <b className="b2">Amanah</b>
                                                <p className="p5">Transparent umrah & hajj
                                                application process status</p>
                                                    <p className="p10"> Only qualified and reliable umrah & hajj operators listed.</p>   
                                    </Col>  
                                    <Col md="4" lg="4" sm="4" xs="3">     
                                        <img src={require("../images/syariah.png")} className="img-responsive img1"/>
                                            <b className="b1">Syariah</b>
                                                <p className="p4">Promoting a modest lifestyle among Gen-X and Millennials</p>
                                                    <p className="p8">Beyond the umrah & hajj offering .</p>    
                                    </Col>
                                    <Col md="4" lg="4" sm="4" xs="3">
                                        <img src={require("../images/8-layers.png")} className="img-responsive img3"/> 
                                            <b className="b3">Friendly</b>
                                                <p className="p6">Intuitive user friendly interface</p>
                                                    <p className="p7">Modest social angagement features</p>
                                    </Col>        
			                    </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
      
     
        
        );

       
    }
}


export default About;

