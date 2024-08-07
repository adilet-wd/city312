"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, Keyboard, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

import carouselBg1 from "@/assets/homePage/carousel_bg1.png";
import carouselBg2 from "@/assets/homePage/carousel_bg2.png";

// Импорт изображений для карусели "популярное"
import allProductsImg from "@/assets/homePage/popular/all_products.svg";
import animalsImg from "@/assets/homePage/popular/animals.svg";
import autoImg from "@/assets/homePage/popular/auto.svg";
import beautyImg from "@/assets/homePage/popular/beauty.svg";
import buildingImg from "@/assets/homePage/popular/building.svg";
import businessImg from "@/assets/homePage/popular/business.svg";
import deliveryImg from "@/assets/homePage/popular/delivery.svg";
import educationImg from "@/assets/homePage/popular/education.svg";
import entertainmentImg from "@/assets/homePage/popular/entertainment.svg";
import eventsImg from "@/assets/homePage/popular/events.svg";
import familyImg from "@/assets/homePage/popular/family.svg";
import foodImg from "@/assets/homePage/popular/food.svg";
import healthImg from "@/assets/homePage/popular/health.svg";
import sportImg from "@/assets/homePage/popular/sport.svg";
import transportImg from "@/assets/homePage/popular/transport.svg";
import travelImg from "@/assets/homePage/popular/travel.svg";
import popular_button from "@/assets/homePage/popular/carousel_button.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./page.module.scss"


export default function page() {
  return (
    <div className='homePage'>
      <div className="carousel-container">
        <Swiper className="main-carousel" 
        modules={[Keyboard, Pagination, Autoplay]}
        slidesPerView={'auto'}
        initialSlide={1}
        loop={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}>
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
      <div className="popular-container">
        <h2>Популярные запросы</h2>
        <Swiper className="popular-carousel" 
        modules={[FreeMode,Navigation, Autoplay]}
        slidesPerView={'auto'}
        initialSlide={4}
        freeMode={false}
        centeredSlides={true}
        navigation={{
          nextEl: '.popular-button-next',
          prevEl: '.popular-button-prev',
        }}
        spaceBetween={20}>
  
        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={allProductsImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Все услуги</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={travelImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Отели/Туры/Билеты</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={foodImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Кафе/Рестораны</div>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={sportImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Отдых и спорт</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={entertainmentImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Развлечения</div>
          </Link>
        </SwiperSlide>
        
        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={healthImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Здоровье</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={beautyImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Красота</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={educationImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Образование</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={familyImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Для семьи и дома</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={autoImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Авто</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={businessImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Для бизнеса</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={buildingImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Ремонт и строительство</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={transportImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Перевозки</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={eventsImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Организация мероприятий</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={deliveryImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">На заказ</div>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="carousel__element">
          <Link href="">
            <div className="carousel__img">
              <Image src={animalsImg} alt="City 312"></Image>
            </div>
            <div className="carousel__text">Для животных</div>
          </Link>
        </SwiperSlide>

        
        </Swiper> 
        <div className="popular-carousel__buttons">
          <div className="popular-button-prev popular-button"><Image src={popular_button} alt=''></Image></div>
          <div className="popular-button-next popular-button"><Image src={popular_button} alt=''></Image></div>
        </div>
      </div>
    </div>
  )
}
