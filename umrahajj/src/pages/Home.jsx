import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators
} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import './Home.css';
import axios from 'axios';
import Smartphoneslide from '../components/Smartphoneslide';
import Instagram from '../components/Instagram';
import Newsroom from '../components/Newsroom';

const items = [
    {
      src: require("../images/Slider FeatureFeatures.jpg"),
      altText: '',
      caption: ''
    },
    {
      src: require("../images/Slider FeatureBenefit Partner.jpg"),
      altText: '',
      caption: ''
    },
    {
      src: require("../images/Slider FeatureWhat is Umrahajj.jpg"),
      altText: '',
      caption: ''
    }
  ];




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      sliders: null,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    console.log("Slider  fetched");
    this.fetchItemsFromApi();
  }

  fetchItemsFromApi() {
    axios({
      headers:{
        'Content-Type': 'application/json'
      },

      method: "GET",
      url: "https://api.umrahajj.co/utils/home_slider",

    }).then(response => {

      console.log("home_slider", response);
      this.setState({sliders: [...response.data.data]});

    }).catch(error => {
      console.error("error_home_slider", error);
    })
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex, sliders } = this.state;
    let slides = null;
    slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.src}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
        <img src={null} className="custom-tag"/>
          {/* <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    if(sliders !== null) {
      console.log("sliders", sliders)
      slides = sliders.map((slider, index) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            key={index}
            onExiting={this.onExiting}
            onExited={this.onExited}>
            <img src={slider.images_url} alt={slider.title} className="custom-tag"/>
            {/* <CarouselCaption className="text-danger" captionText={slider.keterangan} captionHeader={slider.title} /> */}
          </CarouselItem>
        );
      });

    }

    return (
        <div className="content=home">
            <Container fluid>
                <Row>
                    <div className="slider-content-home">
                        <style>
                            {
                            `.custom-tag {
                                width: 100%;
                                background: black;
                                }`
                            }
                        </style>
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                    >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                    </Carousel>
                    </div>
                </Row>
            </Container>

            <div className="content-home-1">
                <Container fluid>
                    <Row>
                        <a href="#about"></a>
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
                                                <p className="p5">Transparent umrah & hajj application process status</p>
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

            <div class="jumbotron2">
                <Container fluid>
                    <Row>
                        <Col md="12" xs="12" lg="12" sm="12">
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
                                <Col xs="12" md="3" lg="3" sm="3">
                                    <img src={require("../images/test11.png")} class="img-responsive img1"/>
                                </Col>
                                    <Col xs="12" md="3" lg="3" sm="3">
                                        <img src={require("../images/test22.png")} class="img-responsive img1"/>
                                    </Col>
                                        <Col xs="12" md="3" lg="3" sm="3">
                                            <img src={require("../images/test33.png")} class="img-responsive img1"/>
                                        </Col>
                        </Row>

                </Container>
            </div>

            <Instagram />
                <Newsroom />

        </div>
    );

  }
}

export default Home;
