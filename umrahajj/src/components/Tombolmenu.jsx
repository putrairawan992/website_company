import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu.jsx";
import "./Tombolmenu.css";
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

  state = {
    backgroundColor: 'transparent'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({backgroundColor: 'white'})
    } else {
      this.setState({backgroundColor: 'transparent'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
 

    render() {
        return (

      <Container fluid>
          <Row>
            <Col md="12" xs="12" className="navbar-inverse navbar-fixed-top" style={{backgroundColor: this.state.backgroundColor}}>
               
              <a className="navbar-brand" href="Home"><img src={logo} className="navbar-brand"/></a>
                <a className="navbar-brand2" href="https://partner.umrahajj.co/#/?signup=home"><Button type="button" className="btn btn-warning2 btn2">Join as Partner</Button></a>

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
                              {close =><Menu close={close}/>}
                            </Popup>
                        </div>
                    </div>

             </Col>                     
          </Row>                      
        </Container>                        
        );
    }
}

export default Tombolmenu;
