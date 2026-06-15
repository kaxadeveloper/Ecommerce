import React from 'react';
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.jpg";
import Image2 from "../../assets/category/VR.webp";
import Image3 from "../../assets/category/macbook.jpg";

const HeroSlide = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphone",
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Virtual",
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Beats Solo",
        title: "Branded",
        title2: "Laptops",
    },
]

const Hero = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div>
            <div className='w-full'>
                <Slider {...settings}>
                    
                </Slider>
            </div>
        </div>
    )
}

export default Hero
