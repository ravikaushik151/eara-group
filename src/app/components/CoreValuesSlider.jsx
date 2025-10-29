"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const coreValues = [
    {
        title: "Sustainability",
        text: "Creating future-ready communities that respect the land and restore balance with nature.",
        img: "/images/Sutainablity.png",
    },
    {
        title: "Innovation",
        text: "Blending thoughtful design with cutting-edge planning to build smarter, greener spaces.",
        img: "/images/Innovation_2.png",
    },
    {
        title: "Integrity",
        text: "Rooted in transparency and trust — every decision guided by what’s right and reliable.",
        img: "/images/Intergrity.png",
    },
    {
        title: "Quality",
        text: "Delivering excellence in every detail, from foundation to finish.",
        img: "/images/Quality.png",
    },
];

export default function CoreValuesSlider() {
    return (
        <section className="lifestyle-section section theme-bg-light">
            <div className="container">
                <div className="row">
                    <div className="title text-center mb-3">
                        <h2 className="text-black mb-4 theme-color-dark fw-bold">
                            Eara Group Core Values
                        </h2>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                    }}
                >
                    {coreValues.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="mb-5 theme-bg-dark shadow p-3">
                                <div className="row">
                                <div className="col-md-6">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="img-fluid p-md-5 p-2 eimg theme-png-light"
                                    />
                                </div>
                                <div className="mb-md-0 mb-3 col-md-6 px-3 d-flex flex-column justify-content-center">
                                    <div>
                                        <h5 className="theme-color-light text-start m-center fw-bold fs-4">
                                            {item.title}
                                        </h5>
                                        <p className="theme-color-light text-start m-center small">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
