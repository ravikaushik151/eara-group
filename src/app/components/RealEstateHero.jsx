"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const menuItems = [
  { id: 0, label: "Sustainability", image: "/images/Sustainability.webp" },
  { id: 1, label: "Innovation", image: "/images/Innovation.webp" },
  { id: 2, label: "Integrity", image: "/images/Integrity.webp" },
  { id: 3, label: "Quality", image: "/images/Quallity.webp" },
];

export default function RealEstateHero() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index) => {
    if (!swiperRef || swiperRef.realIndex === index) return;
    swiperRef.slideToLoop(index);
    setActiveIndex(index);
  };

  return (
    <section className="hero-section p-0">
      <div className="container-fluid p-0 section-start">
         <div className="row  justify-content-center">
                    <div className="title text-center mb-3">
                        <h2 className="text-black  theme-color-dark fw-bold">
                            Our Core Values
                        </h2>
                    </div>
                </div>
        {/* g-0 is critical to remove the gap between menu and slider */}
        <div className="row g-0 align-items-stretch">
          
          {/* LEFT MENU - col-md-4 ensures a 1/3 width */}
          <div className="col-md-4 ps-md-5">
            <div className="hero-menu ps-md-5">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className={`hero-menu-item ${activeIndex === index ? "active" : ""}`}
                  onMouseEnter={() => handleChange(index)}
                  onClick={() => handleChange(index)}
                >
                  <h2 className="menu-text mb-0">{item.label}</h2>
                  {/* Arrow is absolute positioned to the right edge */}
                  <div className="menu-arrow" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SLIDER - col-md-8 takes the remaining 2/3 width */}
          <div className="col-md-8">
            <Swiper
              modules={[EffectFade, Autoplay]}
              effect="fade"
              speed={2000}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              onSwiper={setSwiperRef}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="hero-swiper p-0"
             
            >
              {menuItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="hero-slide">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="hero-image"
                    />
                    <div className="white-overlay"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}