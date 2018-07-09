import React, { Component } from "react";
import Slider, { CenterMode } from 'react-slick';
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

const PostCard = ({title, body, imageUrl, imageCover}) => (
	<div class="instagram">
		<a href="newsroom_details.html">
			<img style={imageCover} src={""} className="img33" />
		</a>
	</div>
)

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
        console.log(res.data)
        this.setState({
            posts: [...res.data],
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

if(this.state.posts != null) {
  cards = posts.map(post => {
    const imageUrl = post.better_featured_image.source_url;
    console.log("post", post)
    console.log("imageUrl", imageUrl);
    console.log("excerpt", post.excerpt.rendered);
    console.log("title", post.title.rendered);

    const imageCover = {
      background: `url(${imageUrl})`,
      "background-size": "cover",
    }

    return <PostCard 
      title={post.title.rendered}
      body={post.excerpt.rendered}
      imageUrl={".."}
      imageCover={imageCover}
    />
  }) 
}

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