"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import carouselBg1 from "@/assets/homePage/carousel_bg1.png";
import carouselBg2 from "@/assets/homePage/carousel_bg2.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./page.module.scss"
import Image from 'next/image';



export default function page() {
  return (
    <div>
      <div className="carousel-container">
        <Swiper className="main-carousel" 
        modules={[Pagination, Autoplay]}
        slidesPerView={'auto'}
        initialSlide={1}
        loop={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
  
        <SwiperSlide className="carousel__element">
          <Image src={carouselBg2} alt="City 312"></Image>
          <div className="carousel__text">Делитесь компаниями друзьям и получайте бонусы за их покупки!</div>
        </SwiperSlide>
        <SwiperSlide className="carousel__element">
          <Image src={carouselBg1} alt="City 312"></Image>
          <div className="carousel__text">Делитесь компаниями друзьям и получайте бонусы за их покупки!</div>
        </SwiperSlide>
        <SwiperSlide className="carousel__element">
          <Image src={carouselBg1} alt="City 312"></Image>
          <div className="carousel__text">Делитесь компаниями друзьям и получайте бонусы за их покупки!</div>
        </SwiperSlide>
        <SwiperSlide className="carousel__element">
          <Image src={carouselBg2} alt="City 312"></Image>
          <div className="carousel__text">Делитесь компаниями друзьям и получайте бонусы за их покупки!</div>
        </SwiperSlide>
        <SwiperSlide className="carousel__element">
          <Image src={carouselBg1} alt="City 312"></Image>
          <div className="carousel__text">Делитесь компаниями друзьям и получайте бонусы за их покупки!</div>
        </SwiperSlide>
        
      </Swiper>
      </div>
      
    </div>
  )
}
