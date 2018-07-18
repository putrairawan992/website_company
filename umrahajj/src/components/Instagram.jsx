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
	<div class="carousel-cell22">
		<a href="newsroom_details.html">
			<img style={imageCover} src={""} className="img33" />
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
          url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=4679952802.1677ed0.4cd5e847be2f48e19889b29dc6645b5a',
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
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
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
