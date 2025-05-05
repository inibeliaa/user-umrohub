    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import React, { useRef } from "react";
    import Slider from "react-slick";
    import prevNextIcon from "../assets/icons/Expand_left.svg"
    import umrohcarousel from "../assets/images/pexels-sultan-alhuthali-175963006-18274181.png"
   

    function CarouselHome() {
    const sliderRef = useRef<Slider | null>(null);  // Membuat ref untuk mengakses slider
    const settings = {
        dots: false,
        // Autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <button className="slick-next">Next</button>,  
        // prevArrow: <button className="slick-prev">Prev</button>,
    };
    
    return (
        <div className="slider-container w-full h-[600px] overflow-x-hidden relative">
            <button 
            className="absolute left-5 top-1/2 transform -translate-y-1/2"
            onClick={() => sliderRef?.current?.slickPrev()}
        >
            <img src={prevNextIcon} alt="Previous" className="rotate-90 w-10 h-10" />
        </button>
        
        <button 
            className="absolute right-0 top-1/2 transform bg-pink-300 -translate-y-1/2"
            onClick={() => sliderRef?.current?.slickNext()}
        >
            <img src={prevNextIcon} alt="Next" className="w-10 h-10" />
        </button>  
        <Slider {...settings} ref={sliderRef}>
            <div className="w-full h-[600px] bg-pink-600">
            <img src={umrohcarousel} width={500} height={100} alt="pict 1" className="w-full h-full"/>
            <h1 className="absolute text-white text-[40px]">Solusi Untuk Umroh</h1>
            </div>
            <div className="w-full h-screen bg-blue-600">
            <h3>2</h3>
            </div>
            <div className="w-full h-screen bg-green-600">
            <h3>3</h3>
            </div>
            <div className="w-full h-screen bg-red-600">
            <h3>4</h3>
            </div>
            <div className="w-full h-screen bg-yellow-600">
            <h3>5</h3>
            </div>
            <div className="w-full h-screen bg-purple-600">
            <h3>6</h3>
            </div>
        </Slider>
        </div>
    );
    }

    export default CarouselHome;
