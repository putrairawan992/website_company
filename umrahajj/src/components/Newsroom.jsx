import React, { Component } from "react";
import Slider, { CenterMode } from 'react-slick';
import './Newsroom.css';
import axios from 'axios';
import { render } from 'react-dom';
import Parser from 'html-react-parser';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", height: "400" }}
      onClick={onClick}
    />
  );
}


const PostCard = ({title, body, imageCover}) => (
	<div class="carousel-cell22">
		<a href="#">
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

     

		<div className="homepage-newsroom newsroom-homepage hidden-xs">

		<h3>Newsroom</h3>
			<Slider {...settings}>
       {cards}
			</Slider>
		</div>
    );
  
    }
  }



export default Newsroom;