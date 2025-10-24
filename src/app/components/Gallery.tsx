'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/thumbs'; // Important for thumbnail control
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// Import required Swiper modules
import { Autoplay, Navigation, Thumbs, EffectCoverflow, Controller } from 'swiper/modules';
import Image from 'next/image';

const slides = Array.from({ length: 5 }, (_, i) => ({
  src: `/images/gallery/Image${String(i + 1)}.png`,
  alt: `Gallery Image ${i + 1}`,
}));

export default function Gallery() {
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // State for the thumbnail Swiper instance

  return (
    <section
      className="gallery-section same-gap gallery theme-bg-dark"
      id="gallery"
    >
      <div className="container">
        <div className="title text-center mb-4">
          <h2 className="theme-color-light">Gallery</h2>
        </div>

        {/* === Main Content Area: Row with Columns === */}
        <div className="row">

          {/* === 1. Main Swiper (col-md-8) === */}
          <div className="col-md-8 position-relative pe-md-4 d-flex align-items-center">
            <Swiper
              modules={[Autoplay, Navigation, EffectCoverflow, Thumbs, Controller]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 0,
                stretch: 1,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next-main',
                prevEl: '.swiper-button-prev-main',
              }}
              thumbs={{ swiper: thumbsSwiper }} // Link to the thumbnail Swiper instance
              className="rounded-xl overflow-hidden main-gallery-swiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1920}
                    height={1080}
                    className="img-fluid rounded-3"
                    loading="lazy"
                    style={{ cursor: 'zoom-in' }}
                    onClick={() => setPopupImage(slide.src)}
                  />
                </SwiperSlide>
              ))}

              {/* Swiper navigation buttons for the Main Slider */}
              <div
                className="swiper-button-prev swiper-button-prev-main theme-bg-light"
                style={{
                  color: '#352822',
                  left: '0',
                  zIndex: 10,
                }}
              ></div>
              <div
                className="swiper-button-next swiper-button-next-main theme-bg-light"
                style={{
                  color: '#352822',
                  right: '0',
                  zIndex: 10,
                }}
              ></div>
            </Swiper>
          </div>

          {/* === 2. Vertical Thumbnails Swiper (col-md-4) === */}
          <div className="col-md-4   mt-md-0 d-none d-md-block">
            <Swiper
              onSwiper={setThumbsSwiper} // Save the Swiper instance to state
              direction={'vertical'} // Key change: vertical scrolling
              spaceBetween={10}
              slidesPerView={2} // Display 4 thumbnails at a time
              freeMode={true}
              watchSlidesProgress={true}
              loop={true}
              className="mySwiper-thumbs" // Use h-100 to fill the height of the column
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={412}
                    height={185}
                    className="img-fluid rounded-2 swiper-thumb-image img-fluid"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* === Image Popup Modal (Same as before) === */}
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

      {/* === Custom Styling for Thumbnails === */}
      <style jsx global>{`
        /* Match the height of the main slider */
        .mySwiper-thumbs {
          height: 100%;
          max-height: 412px; /* You might need to adjust this value */
        }
        /* Style the image within the slide */
        .swiper-thumb-image {
          transition: transform 0.3s, opacity 0.3s;
          opacity: 0.6;
          cursor: pointer;
        }
        /* Style for the active thumbnail slide */
        .mySwiper-thumbs .swiper-slide-thumb-active .swiper-thumb-image {
          opacity: 1;
          transform: scale(1.05);
          border: 3px solid var(--theme-color-light, #fff); /* Example border for active state */
        }
        /* Fix Swiper button positioning for the main slider */
        .swiper-button-prev-main, .swiper-button-next-main {
            top: 50% !important;
            transform: translateY(-50%) !important;
        }
      `}</style>
    </section>
  );
}