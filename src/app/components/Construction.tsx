'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Scrollbar, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const slides = Array.from({ length: 5 }, (_, i) => ({
  src: `/images/gallery/Image${String(i + 1)}.png`,
  alt: `Gallery Image ${i + 1}`,
}));

export default function Construction() {
  const [popupImage, setPopupImage] = useState<string | null>(null);

  return (
    <section
      className="gallery-section same-gap construction theme-bg-light"
      id="gallery"
    >
      <div className="container">
        <div className="title text-center mb-4">
          <h2 className="theme-color-dark">Project Updates</h2>
        </div>

        <div className="position-relative">
          <Swiper
            modules={[Autoplay, Scrollbar, Pagination, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            // pagination={{
            //   clickable: true,
            //   dynamicBullets: true,
            // }}
            scrollbar={{
              el: '.swiper-scrollbar',
              draggable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="rounded-xl overflow-hidden px-md-3 mx-4"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1920}
                  height={1080}
                  className="img-fluid rounded-xl mb-3"
                  loading="lazy"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setPopupImage(slide.src)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper navigation buttons */}
          <div
            className="swiper-button-prev theme-bg-darl"
            style={{
              color: '#000',
              left: '-10px',
              zIndex: 10,
              top: '60% !important',
              transform: 'translateY(-60%)',
            }}
          ></div>
          <div
            className="swiper-button-next theme-bg-darl"
            style={{
              color: '#000',
              right: '-10px',
              zIndex: 10,
              top: '60% !important',
              transform: 'translateY(-60%)',
            }}
          ></div>
        </div>
      </div>

      {/* === Image Popup Modal === */}
      {popupImage && (
        <div
          className="popup-overlay"
          onClick={() => setPopupImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out',
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <Image
              src={popupImage}
              alt="Popup Image"
              width={1920}
              height={1080}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
              }}
            />
            <button
              onClick={() => setPopupImage(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'transparent',
                color: '#fff',
                border: 'none',
                fontSize: '2rem',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
