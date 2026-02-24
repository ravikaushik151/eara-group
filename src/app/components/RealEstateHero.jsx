"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashNavigation, EffectFade, Controller } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/hash-navigation";

const menuItems = [
    {
        id: "featured",
        label: "Sustainability",
        bgClass: "bg-brown text-white",
        text: "Creating future-ready communities that respect the land and restore balance with nature.",
        image: "/images/Sustainability_Eara.webp",
    },
    {
        id: "valuation",
        label: "Innovation",
        bgClass: "bg-light-brown text-white",
      //  hasLogo: true,
        text: "Blending thoughtful design with cutting-edge planning to build smarter, greener spaces.",
        image: "/images/Innovations_Eara.webp",
    },
    {
        id: "buying",
        label: "Integrity",
        bgClass: "bg-beige text-white",
        text: "Rooted in transparency and trust — every decision guided by what’s right and reliable.",
        image: "/images/Integrity_Eara.webp",
    },
    {
        id: "selling",
        label: "Quality",
        bgClass: "bg-white text-brown",
        text: "Delivering excellence in every detail, from foundation to finish.",
        image: "/images/Quality_Eara.webp",
    },
];

export default function RealEstateHero() {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (index) => {
        if (!controlledSwiper || controlledSwiper.activeIndex === index) return;
        controlledSwiper.slideTo(index);
    };

    return (
        <section className="container-fluid p-0">
            <div className="hero-wrapper">

                {/* LEFT MENU */}
                <div className="hero-menu">
                    {menuItems.map((item, index) => (
                        <button
                            key={item.id}
                            className={`hero-menu-item ${item.bgClass} ${activeIndex === index ? "active" : ""
                                }`}
                            onClick={() => handleSlideChange(index)}
                            onMouseEnter={() => handleSlideChange(index)}
                        >
                            <div className="d-flex align-items-center">
                                <div>
                                    {item.hasLogo && (
                                        <div className="logo-hex me-3">
                                            <div className="hex-border"></div>
                                            <span>
                                                I <br /> — <br /> R
                                            </span>
                                        </div>
                                    )}

                                    <h2 className="menu-title mb-0">{item.label}</h2>
                                    <p>{item.text}</p>
                                </div>

                            </div>

                            {activeIndex === index && <div className="menu-arrow"></div>}
                        </button>
                    ))}
                </div>

                {/* RIGHT SLIDER */}
                <div className="hero-slider">
                    <Swiper
                        modules={[HashNavigation, EffectFade, Controller]}
                        effect="fade"
                        speed={1000}
                        hashNavigation={{ watchState: true }}
                        onSwiper={setControlledSwiper}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        className="h-100"
                    >
                        {menuItems.map((item) => (
                            <SwiperSlide key={item.id} data-hash={item.id}>
                                <div className="hero-slide">
                                    <img
                                        src={item.image}
                                        alt={item.label}
                                        className="hero-image"
                                    />

                                    {item.id === "valuation" && (
                                        <div className="valuation-btn-wrapper">
                                            <button className="btn btn-outline-light rounded-pill px-4">
                                                GET A FREE HOME VALUATION
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
}