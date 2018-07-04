import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
     return(

      <footer className="footer">
      <div>
      	<Container fluid>
          <Row>
            <Col xs="12" lg="2">
              <div className="menufirst">
                <ul class="menu menu11">
                  <li><a href="">Umrahajj</a></li>
                  <li><a href="">Info@umrahajj.co</a></li>
                </ul>
                </div>
              </Col>
              <Col xs="12" lg="2">
              <div class="menufirst1">
                <ul class="menu">
                  <li><a href="#about">About Umrahajj</a></li>
                  <li><a href="career.html">Career</a></li>
                </ul>
              </div> 
						</Col>
            <Col xs="12" lg="1">
            <div class="menufirst2">
							<ul class="menu">
                <li><a href="partnerpage.html">Our Partner</a></li>
								<li><a href="newsroom.html">Newsroom</a></li>
							</ul>
						</div>
            </Col>
            <Col xs="12" lg="1">
							<div class="menufirst3">
									<ul class="menu">
                    <li><a href="howtobepartner.html">How to be Partner</a></li>
                    <li><a href="termsconditions.html">	Terms & Condition</a></li>
									</ul>
							</div>
            </Col>
            <Col xs="12" lg="2">
							<div class="menufirst4">
									<ul class="menu">
                      <li><a href="faq.html">FAQ</a></li>
                      <li><a href="contactus.html">Contact Us</a></li>
                      <li><a href="privacypolicy.html">Privacy & Policy</a></li>
									</ul>
							</div>
            </Col>
        
            <Col xs="12" lg="4">
              <div  class="subscribe">
                <b class="footer-bold">Subscribe to Umrahajj via Email</b>
                  <p class="footer-p">Excepteur sint occaecat cupidatat non proident.</p>
                  <form>
										<div class="form-group">
											<input class="form-control" type="text" name="email" placeholder="youremail@example.com"/>
												<button class="btn btn-success btn3" type="submit">SUBSCRIBE</button>
										</div>
									</form>
              </div>

              <div class="download-icon">
									<b>Download Umrahajj Apps </b>
                  <img src={require("../images/iosstore.png")} className=" img-responsive iosstore"/>
                  <img src={require("../images/googleplay.png")} className=" img-responsive googleplay" />
							</div>
            </Col>
           </Row>
           <div class="footer-bottom">
           <Row>
             <Col xs="12" lg="6">
                  <p> www.umrahajj.co &copy; Umrahajj 2018</p>
             </Col>
              <Col xs="12" lg="6">
              <div class="icon-footer-botom">
                <a  href="https://www.facebook.com/umrahajjworld/" target="_blank"><FontAwesomeIcon icon={faFacebook} className="callme" /></a>
								<a href="https://www.instagram.com/umrahajj/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="callme" /></a>
								<a href="https://www.linkedin.com/company/umrahajj/">
                <FontAwesomeIcon icon={faLinkedin} className="callme" /></a>
								<a  href="https://twitter.com/umrahajjworld" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="callme" /></a>
              </div>
              </Col>
            </Row>
          </div>
        </Container>
        </div>
        </footer>
				
   
     
    );
  }
}

export default Footer;