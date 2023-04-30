import React, { useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import {  FaArrowRight, } from "react-icons/fa";
import image1 from "../../../public/images/icons/Sajek.png"
import image2 from "../../../public/images/icons/Sreemongol.png"
import image3 from "../../../public/images/icons/sundorbon.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const HomePage = () => {
    const [backgroundImage, setBackgroundImage] = useState('url("https://media.istockphoto.com/id/532523359/photo/spooky-dark-forest-at-night-in-moonlight.jpg?b=1&s=170667a&w=0&k=20&c=JEhl8Xb7IBCuqAt4Z1ZFAegWwYj_aI1_nPFD4qCynig=")');
    const [clickedCardName, setClickedCardName] = useState('');

    const handleCardClick = (image) => {
        setBackgroundImage(`url(${image})`);
         // Determine the name of the clicked card based on the image URL
         if (image === image1) {
            setClickedCardName('Cox’s  Bazar');
          } else if (image === image2) {
            setClickedCardName('Sreemangal');
          } else if (image === image3) {
            setClickedCardName('Sundarbans');
          }
      };



    const params = {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
      };
  
    return (
    <div
    style={{
      backgroundImage: backgroundImage,
      height: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color:'white',
      alignItems:'center',
      justifyContent:'center',
    }}
  >
    
<div className='row'>
    <div className='col-5' style={{ paddingTop: '90px', paddingLeft:'90px' }}>
    <div className='infornation'>
        <h1 className='fw-bold'>{clickedCardName}</h1>
        <p>{clickedCardName} is a beautiful town located in the northeastern part of Bangladesh, <br /> known for its vast tea gardens, hilly forests, and wildlife sanctuaries. <br /> It is also famous for its natural beauty, including the Lawachara National Park, <br /> Baikka Beel Wetland, and Madhabpur Lake. </p>
        <Button  className='fw-bold ' variant="warning">Booking <FaArrowRight/></Button>{' '}
    </div> 
    </div>
    <div className='col-7'  style={{ paddingTop: '90px' }}>
    <Swiper {...params} style={{ height: '400px'}}>
      <SwiperSlide>
      <Card style={{ width: '20rem' }} onClick={() => handleCardClick(image1)}>
      <Card.Img variant="top" src={image1} />
      <Card.ImgOverlay>
        <Card.Title><h1 className='text-danger  fw-bold'>Cox’s  Bazar</h1></Card.Title>
      </Card.ImgOverlay>
    </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '20rem' }} onClick={() => handleCardClick(image2)}>
      <Card.Img variant="top" src={image2} />
      <Card.ImgOverlay>
        <Card.Title><h1 className='text-secondary  fw-bold'>Sreemangal</h1></Card.Title>
      </Card.ImgOverlay>
    </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '20rem' }} onClick={() => handleCardClick(image3)}>
      <Card.Img variant="top" src={image3} />
      <Card.ImgOverlay>
        <Card.Title><h1 className='text-light  fw-bold'>Sundarbans</h1></Card.Title>
      </Card.ImgOverlay>
    </Card>
      </SwiperSlide>
    </Swiper>
    </div>
</div>


 </div>

    );
};

export default HomePage;