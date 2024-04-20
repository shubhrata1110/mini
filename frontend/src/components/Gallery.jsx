import React from 'react'
import Carousel from 'better-react-carousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Gallery = () => {
   
    const settings = {
        //dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        
      };
    
      return (
        <div className='carousel'>
          
          <Slider {...settings}>
            <div>
            <Carousel cols={3} rows={1} gap={10} >
                <Carousel.Item className='.item'>
                    <img width="100%" height={300}  src="/guesthouse.jpg" />
                </Carousel.Item>
                <Carousel.Item className='.item'>
                    <img width="100%" height={300}  src="/guesthouse2.jpg" />
                </Carousel.Item>
                <Carousel.Item className='.item'>
                    <img width="100%" height={300}  src="/guesthouse3.jpg" />
                </Carousel.Item>
            </Carousel>
            </div>
            <div>
            <Carousel cols={3} rows={1} gap={10} >
                <Carousel.Item className='.item'>
                    <img width="100%" height={300}  src="/guesthouse4.jpg" />
                </Carousel.Item>
                <Carousel.Item className='.item'>
                    <img width="100%" height={300}  src="/guesthouse5.jpg" />
                </Carousel.Item>
                <Carousel.Item className='.item'>
                    <img width="100%" height={300}  src="/guesthouse6.jpg" />
                </Carousel.Item>
            </Carousel>
            </div>
          </Slider>
        </div>
      );
    };
      

export default Gallery;