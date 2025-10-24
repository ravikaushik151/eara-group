'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// Import required Swiper modules
import { Autoplay, Navigation, Thumbs, EffectCoverflow, Controller, Mousewheel } from 'swiper/modules';
import Image from 'next/image';

const slides = Array.from({ length: 5 }, (_, i) => ({
  src: `/images/gallery/Image${String(i + 1)}.png`,
  alt: `Gallery Image ${i + 1}`,
}));

export default function Gallery() {
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null); 

  // Function to handle slide click and update
  const handleSlideClick = (slideSrc: string, index: number) => {
    // 1. Programmatically slide the main Swiper to the clicked slide
    if (mainSwiper) {
        // use slideToLoop for Swipers with loop: true
        mainSwiper.slideToLoop(index, 500); 
    }
    // 2. Open the popup
    setPopupImage(slideSrc);
  };

  // NEW: Handler to sync main Swiper when thumbnail Swiper scrolls/changes
  const handleThumbScroll = (swiper: any) => {
      if (mainSwiper && !swiper.params.cssMode) {
          // Get the real index to handle looping correctly
          const newIndex = swiper.realIndex;
          mainSwiper.slideToLoop(newIndex, 0); // Slide immediately (0ms transition)
      }
  };


  return (
    <section
      className="gallery-section same-gap gallery theme-bg-dark py-5 "
      id="gallery"
    >
      <div className="container">
        <div className="title text-center mb-4">
          <h2 className="theme-color-light">Gallery</h2>
        </div>

        {/* === Main Content Area: Row with Columns === */}
        <div className="row">

          {/* === 1. Main Swiper (col-md-8) === */}
          <div className="col-md-8 position-relative   d-flex align-items-center">
            <Swiper
              onSwiper={setMainSwiper} 
              modules={[Autoplay, Navigation, EffectCoverflow, Thumbs, Controller]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              spaceBetween={30}
              // effect={'coverflow'}
              // grabCursor={true}
              // centeredSlides={true}
              slidesPerView={1}
              // coverflowEffect={{
              //   rotate: 0,
              //   stretch: 1,
              //   depth: 100,
              //   modifier: 1,
              //   slideShadows: false,
              // }}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next-main',
                prevEl: '.swiper-button-prev-main',
              }}
              thumbs={{ swiper: thumbsSwiper }}
              className="rounded-xl overflow-hidden main-gallery-swiper  "
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
                    style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                    onClick={() => handleSlideClick(slide.src, index)}
                  />
                </SwiperSlide>
              ))}

              {/* Swiper navigation buttons for the Main Slider */}
              <div
                className="swiper-button-prev swiper-button-prev-main theme-bg-light d-md-none"
                style={{ color: '#352822', left: '0', zIndex: 10 }}
              ></div>
              <div
                className="swiper-button-next swiper-button-next-main theme-bg-light d-md-none"
                style={{ color: '#352822', right: '0', zIndex: 10 }}
              ></div>
            </Swiper>
          </div>

          {/* === 2. Vertical Thumbnails Swiper (col-md-4) === */}
          <div className="col-md-4 my-md-4 d-none d-md-block position-relative thumbnail-wrapper">
            <Swiper
              modules={[Navigation, Thumbs, Mousewheel]} 
              onSwiper={setThumbsSwiper} 
              direction={'vertical'}
              spaceBetween={10}
              slidesPerView={2} 
              freeMode={true}
              watchSlidesProgress={true}
              loop={true}
              mousewheel={true} 
              
              // NEW: Use onSlideChangeTransitionEnd to sync main slider
              onSlideChangeTransitionEnd={handleThumbScroll}
              
              navigation={{
                nextEl: '.swiper-button-next-thumbs', 
                prevEl: '.swiper-button-prev-thumbs', 
              }}
              
              className="mySwiper-thumbs"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative" style={{ height: 'auto' }}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={350}
                    height={155}
                    className="img-fluid rounded-2 swiper-thumb-image"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* The Thumbnail Navigation Buttons - outside the Swiper component */}
            {/* <div className="swiper-button-prev swiper-button-prev-thumbs theme-bg-light"></div>
            <div className="swiper-button-next swiper-button-next-thumbs theme-bg-light"></div>
             */}
          </div>
        </div>
      </div>

      {/* === Image Popup Modal (Lightbox) === */}
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

      {/* --- Custom Styling --- */}
      <style jsx global>{`
        /* Global height control for the thumbnail area */
        .mySwiper-thumbs {
          height: 100%;
          max-height: 350px; 
        }
        
        /* Thumbnails styling */
        .swiper-thumb-image {
          transition: transform 0.3s, opacity 0.3s;
          opacity: 0.6;
          cursor: pointer;
        }
        .mySwiper-thumbs .swiper-slide-thumb-active .swiper-thumb-image {
          opacity: 1;
          transform: scale(1.05);
          border: 3px solid var(--theme-color-light, #fff); 
        }

        /* --- Main Slider Navigation (Horizontal) --- */
        .swiper-button-prev-main, .swiper-button-next-main {
            top: 50% !important;
            transform: translateY(-50%) !important;
            
        }

        /* --- Thumbnail Navigation FIX (Vertical & Centered) --- */
        .swiper-button-prev-thumbs, 
        .swiper-button-next-thumbs {
            position: absolute !important;
            left: 50% !important; 
            transform: translateX(-50%); 
            z-index: 10; 
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            margin: 0 !important;
            color: #352822 !important; 
            background-color: var(--theme-bg-light, #fff) !important;
        }
        .swiper-button-prev-thumbs {
            top: 0px !important; 
            bottom: auto !important;
        }
        .swiper-button-next-thumbs {
            bottom: 0px !important;
            top: auto !important; 
        }
        .swiper-button-prev-thumbs::after {
            content: '\u2191'; 
            font-size: 1.2rem;
        }
        .swiper-button-next-thumbs::after {
            content: '\u2193'; 
            font-size: 1.2rem;
        }
        .swiper-button-next-main {right:10px !important;}
        .swiper-button-prev-main {left:10px !important}
      `}</style>
    </section>
  );
}