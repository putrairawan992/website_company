import React, { Component } from "react";
import Slider, { CenterMode } from 'react-slick';
import './Instagram.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


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

class Instagram extends React.Component {
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
        <div className="instagram container-fluild homepage-instagram hidden-xs">

        <h1 className="">Our Gallery</h1>

        <Slider {...settings}>
          <div>
          <img src={require("../images/instagram1.png")} className="img33" />
          </div>
          <div>
          <img src={require("../images/instagram1.png")} />
          </div>
          <div>
          <img src={require("../images/instagram1.png")} />
          </div>
          <div>
          <img src={require("../images/instagram1.png")} />
          </div>
          <div>
          <img src={require("../images/instagram1.png")} />
          </div>
          <div>
          <img src={require("../images/instagram1.png")} />
          </div>
          <div>
          <img src={require("../images/instagram1.png")} />
          </div>
        </Slider>

         <div class="logo-instagram">
						<p class="callme2">FOLLOW US</p>
            <a href="https://www.instagram.com/umrahajj/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="callme" /></a>
					</div>

        </div>
      );
    }
  }

export default Instagram;