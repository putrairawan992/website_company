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
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
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