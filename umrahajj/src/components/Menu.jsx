import React from "react";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Container, Row, Col} from "reactstrap";
import "./Menu.css";
import "./Tombolmenu.css";
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import Contact from "../pages/Contact";
import Home from "../pages/Home";


export default ({ close }) => (

  <div>

  <Container fluid>
    <Row>


      <div className="logo-umrahajj">
        <img src={logo}  alt="twitter"/>
      </div>

      <hr className="hr_menu" />


      <div className="menu main-menu2">

        <ul>
          <Row>
            <Col md="3" xs="12">
            <li>
              <NavLink onClick={close} activeClassName="current" to="/home">
                About
              </NavLink>
            </li>
            </Col>
              <Col md="3" xs="12">
                <li>
                  <NavLink onClick={close} activeClassName="current" to="howtobepartner">
                    How To Be Partner
                  </NavLink>
                </li>
                </Col>
                <Col md="3" xs="12">
                  <li>
                    <NavLink onClick={close} activeClassName="current" to="termscondition">
                      Terms & Condition
                    </NavLink>
                  </li>
                  </Col>
                    <Col md="3" xs="12">
                        <li>
                          <NavLink onClick={close} activeClassName="cuttent" to="/faq">
                            FAQ
                          </NavLink>
                        </li>
                    </Col>
                </Row>
                <div className="main-menu3">
                      <Row>
                      <Col md="3" xs="12">
                        <li>
                          <NavLink onClick={close} activeClassName="cuttent" to="/contact">
                            Contact
                          </NavLink>
                        </li>
                        </Col>
                        <Col md="3" xs="12">
                          <li>
                            <NavLink onClick={close} activeClassName="current" to="#">
                            Privacy Policy
                            </NavLink>
                          </li>
                        </Col>
                        <Col md="3" xs="12">
                            <li>
                              <NavLink onClick={close} activeClassName="cuttent" to="#">
                                {/* FAQ */}
                              </NavLink>
                            </li>
                        </Col>
                    </Row>
                </div>
            </ul>
        </div>

      </Row>
  </Container>

  <Container fluid className="footer-newsroom hidden-xs">
    <Row>
      <Col md="6">
        {/* <div className="form-group11">
          <input className="form-control" type="text" name="email" placeholder="youremail@example.com"/>
            <button className="btn btn11 btn-success btn3" type="submit">SUBSCRIBE</button>
        </div> */}
      </Col>
        <Col md="6">
            <div className="social-newsroom">
                <p>Follow Us</p>
              <a className="callme1 callme22" href="https://www.facebook.com/umrahajjworld/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="callme1 callme33" href="https://www.instagram.com/umrahajj/" target="_blank">
                   <FontAwesomeIcon icon={faInstagram} /></a>
                <a className="callme1 callme55" href="https://www.linkedin.com/company/umrahajj/">
                <FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a className="callme1 callme44" href="https://twitter.com/umrahajjworld" target="_blank">
                <FontAwesomeIcon icon={faTwitter} /></a>
            </div>
         </Col>
      </Row>
    </Container>

    </div>
 

);
