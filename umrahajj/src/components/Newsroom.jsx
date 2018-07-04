import React, { Component } from "react";
import Slider, { CenterMode } from 'react-slick';
import './Newsroom.css';


function SampleNextArrow(props) {

  const { className, style, onClick } = props;

  return (

    <div

      className={className}

      style={{

        ...style,

        display: 'block',

        transform: 'scale(2,2)',
        
      }}

      img={{ src: require("../images/Artboard.jpg")}}

      onClick={onClick}

    />

  );

}


function SamplePrevArrow(props) {

  const { className, style, onClick, img } = props;

  return (

    <div

      className={className}

      style={{

        ...style,

        display: 'block',

        transform: 'scale(2,2)',

      }}

      onClick={onClick}

    />

  );

}

class Newsroom extends React.Component {
    render() {
      var settings = {
        className: "center hidden-xs",
        centerMode: true,
        infinite: true,
        centerPadding: "90px",
        slidesToShow: 4,
        speed: 500,
       nextArrow: <SampleNextArrow />,
       prevArrow: <SamplePrevArrow />
      };
      
      return (

    <div className=" homepage-newsroom newsroom-homepage hidden-xs">

       <h3>Newsroom</h3>

        <Slider {...settings}>
          
            <div class="carousel-cell22">
                    <a href="newsroom_details.html"><img src={require("../images/copy1.png")} className="img33" />
                        <div class="newsroom-text1">
                            <h1>Headline</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut…</p>
                                    <p class="newsroom-text2">More</p>
                        </div>
                    </a>
            </div>
            <div class="carousel-cell22">
                    <a href="newsroom_details.html"><img src={require("../images/copy1.png")} className="img33" />
                        <div class="newsroom-text1">
                            <h1>Headline</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut…</p>
                                    <p class="newsroom-text2">More</p>
                        </div>
                    </a>
            </div>
            <div class="carousel-cell22">
                    <a href="newsroom_details.html"><img src={require("../images/copy1.png")} className="img33" />
                        <div class="newsroom-text1">
                            <h1>Headline</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut…</p>
                                    <p class="newsroom-text2">More</p>
                        </div>
                    </a>
            </div>
            <div class="carousel-cell22">
                    <a href="newsroom_details.html"><img src={require("../images/copy1.png")} className="img33" />
                        <div class="newsroom-text1">
                            <h1>Headline</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut…</p>
                                    <p class="newsroom-text2">More</p>
                        </div>
                    </a>
            </div>
            <div class="carousel-cell22">
                    <a href="newsroom_details.html"><img src={require("../images/copy1.png")} className="img33" />
                        <div class="newsroom-text1">
                            <h1>Headline</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut…</p>
                                    <p class="newsroom-text2">More</p>
                        </div>
                    </a>
            </div>
            <div class="carousel-cell22">
                    <a href="newsroom_details.html"><img src={require("../images/copy1.png")} className="img33" />
                        <div class="newsroom-text1">
                            <h1>Headline</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut…</p>
                                    <p class="newsroom-text2">More</p>
                        </div>
                    </a>
            </div>
            <div class="carousel-cell22">
                    <a href="newsroom_details.html"><img src={require("../images/copy1.png")} className="img33" />
                        <div class="newsroom-text1">
                            <h1>Headline</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut…</p>
                                    <p class="newsroom-text2">More</p>
                        </div>
                    </a>
            </div>
        </Slider>
        
    </div>
      );
    }
  }

export default Newsroom;