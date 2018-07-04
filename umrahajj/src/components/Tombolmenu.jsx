import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu.jsx";
import "./Tombolmenu.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../images/logo.png';
import { Container, Row, Col} from "reactstrap";
import { Button } from 'reactstrap';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0",
  width: "100%",
  border: "none"
};

class Tombolmenu extends React.Component {
    render() {
        return (
          <Container fluid>
            <Row>
                <div class="navbar-inverse navbar-fixed-top">
              <Row>
              <Col md="6">
                <div>
                 <a className="navbar-brand" href="./Home.jsx"><img src={logo} className="navbar-brand"/></a>
                </div>  
              </Col>
              </Row>

              <Row>
                <Col md="4">  
                <div>
                  <a className="navbar-brand2"  href="https://partner.umrahajj.co/#/?signup=home"> <Button type="button" className="btn btn-warning2 btn2">Join as Partner
                  </Button></a>
                </div>  
                </Col>    
              </Row>

                <Col md="2">

                <div style={styles}>
                      <div className="menu-home">
                        <Popup
                          modal
                          overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                          contentStyle={contentStyle}
                          closeOnDocumentClick={false}
                          trigger={open => 
                          <BurgerIcon open={open} />}
                        >
                          {close => <Menu close={close} />}
                        </Popup>
                
                                              
    
                    </div>
                </div>
                </Col>
                
                </div>
              
                    </Row> 
                      </Container>       
        );
    }
}

export default Tombolmenu;