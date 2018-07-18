import React, { Component } from "react";
import Slider, { CenterMode } from 'react-slick';
import './Newsroom.css';
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

const PostCard = ({title, body, imageCover}) => (
	<div class="carousel-cell22">
		<a href="https://umrahajj.co/blog/">
			<img style={imageCover} src={""} className="img-responsive" />
			<div class="newsroom-text1">
				<h1>{ title }</h1>
				<p>{ body }</p>
				<p class="newsroom-text2">More</p>
			</div>
		</a>
	</div>
)

class Newsroom extends React.Component {
    state = {
        posts: null,
    }
    
    fetchFromApi() {
        axios({
            method: 'GET',
            url: 'https://umrahajj.co/blog/wp-json/wp/v2/posts?page=1',
        }).then(res => {
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

		<div className=" homepage-newsroom newsroom-homepage hidden-xs">

		<h3>Newsroom</h3>
			<Slider {...settings}>
				{cards}
			</Slider>
		</div>
		);
    }
  }

export default Newsroom;