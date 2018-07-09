import React, { Component } from 'react';
import './Contact.css';
import { Container, Row, Col} from "reactstrap";



class Contact extends Component {
    render() {
        return (
            <Container className="contactus">
                <Row>
                    <Col md="12">
                        <h3 class="contact-text">Contact Us</h3>
                    </Col>
                </Row>
                <Row  className="maps-contact">
            <Col md="6">
                <div class="embed-responsive embed-responsive-4by3">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3118630689964!2d106.82048131476918!3d-6.222545995495568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fc1e0aba0f%3A0xcec2d050d37ae16f!2sKolega+x+MarkPlus%2C+Coworking+Space!5e0!3m2!1sen!2sid!4v1528165142267"></iframe>
                </div>
                <br/>
                <b>Umrahajj</b>
                <p>Segitiga Emas Business Park, Jalan Prof. Dr. Satrio, Kuningan,<br/> ID 12940
                    <br/>+62 345 678 903<br/>
					info@umrahajj.co</p>
					
            </Col>
            <Col md="6">
                <form>
                    <div class="form-group">
                      <input type="text" class="form-control55" id="text" placeholder="Nama" required/>
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control55" id="email" placeholder="Email" required/>
                    </div>

                    <div class="form-group">
                        <textarea class="form-control55" rows="5" id="comment" placeholder="type to comment"></textarea>
                      </div>
                    
                    <button type="submit" class="btn btn_details55">Submit</button>
                  </form>
            </Col>
        </Row>
            </Container>
      
        );
    }
}


export default Contact;

