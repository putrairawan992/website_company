import React, { Component } from "react";
import Slider, { MultipleItems } from 'react-slick';
import './Instagram.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

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

const PostCard = ({imageUrl}) => {
  const imageCover = {
    background: `url(${imageUrl})`,
    "background-size": "cover",
  }
  return (
	<div class="carousel-cell77">
		<a href="#">
			<img style={imageCover} className="img33" />
		</a>
	</div>
)}

class Instagram extends React.Component {

  state = {
    posts: null,
  }

  fetchFromApi() {
      console.log("axios")
      axios({
          method: 'GET',
          url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=5689456550.1677ed0.9b17035bd4ac4d6a97f09f188c224e84',
      }).then(res => {
          console.log("instagram", res.data.data)
          this.setState({
              posts: [...res.data.data],
          });

      }).catch(error => {
          console.log(error)
      })
  }

  componentDidMount() {
      this.fetchFromApi();
  }

  render() {
      const { posts } = this.state;

      let cards = null;
      if(this.state.posts !== null) {
        cards = posts.map(post => {
            const imageUrl = post.images.standard_resolution.url;
            const caption = post.caption.text;
            const sender = post.caption.from.full_name;
            console.log(imageUrl, caption, sender);

            return <PostCard imageUrl={imageUrl} />
        })
      }

      console.log("cards", cards)

      const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (

      <div className="instagram container-fluild homepage-instagram">
          <h1 className="">Our Gallery</h1>

          <Slider {...settings}>
            {cards}
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
