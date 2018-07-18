import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import './Slider.css';
import axios from 'axios';

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

class Slider extends Component {
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
    this.fetchItemsFromApi();
  }

  fetchItemsFromApi() {
    axios({
      method: "GET",
      url: "https://api.umrahajj.co/utils/home_slider"
    }).then(result => {
      console.log("result", result.data.data);
      this.setState({sliders: [...result.data.data]});
    }).catch(error => {
      console.error("error", error);
      // Contoh response: 
      const data = [
        {
        "id_vendor": "0",
        "id_package": "0",
        "position": "0",
        "action": "browser",
        "url": "",
        "images_url": "http://static.umrahajj.co/images/sliderimages/ads/1524569234_4.jpg",
        "title": "Umrah Kakek Jali",
        "keterangan": "Ayo bersama-sama umrahkan kakek jali"
        },
        {
        "id_vendor": "0",
        "id_package": "0",
        "position": "0",
        "action": "browser",
        "url": "",
        "images_url": "http://static.umrahajj.co/images/sliderimages/ads/1524569250_4.jpg",
        "title": "Umrah anak",
        "keterangan": "Ayo daftarkan anak anda"
        },
        {
        "id_vendor": "0",
        "id_package": "0",
        "position": "1",
        "action": "browser",
        "url": "http://admin.umrahajj.co/sliderimagesads/edit/2",
        "images_url": "http://static.umrahajj.co/images/sliderimages/ads/1525052538_4.jpg",
        "title": "Promo Umrah 60 hari",
        "keterangan": "Umrah bersama artis pendatang baru"
        },
        {
        "id_vendor": "0",
        "id_package": "0",
        "position": "2",
        "action": "browser",
        "url": "",
        "images_url": "http://static.umrahajj.co/images/sliderimages/ads/1524569123_4.jpg",
        "title": "Umrah untuk nenek mizan",
        "keterangan": "Ayo donasi untuk umrah nenek mizan"
        }
      ];
      this.setState({sliders: [...data]});
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
        <img src={item.src} alt={item.altText} className="custom-tag"/>
          <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
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
            <CarouselCaption className="text-danger" captionText={slider.keterangan} captionHeader={slider.title} />
          </CarouselItem>  
        );
      });
  
    }

    return (

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
    );
    
  }
}

export default Slider;