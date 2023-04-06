import React from 'react';
import cropField from '../../assests/Crop Field.jpg';
import homeVeg from '../../assests/homeVeg.jpg';
import chartWoman from '../../assests/chartWoman.jpg';
const HomeBanner = () => {
    return (
        <div className="carousel h-[100vh] w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={cropField} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-primary border-0 hover:bg-secondary text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-primary border-0 hover:bg-secondary text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={homeVeg} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-primary border-0 hover:bg-secondary text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-primary border-0 hover:bg-secondary text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={chartWoman} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-primary border-0 hover:bg-secondary text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-primary border-0 hover:bg-secondary text-white">❯</a>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;