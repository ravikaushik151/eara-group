'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/thumbs';
 import 'swiper/css/navigation';

// Import required Swiper modules
// NOTE: Added Mousewheel module here!
import { Autoplay, Navigation, Thumbs, Controller, Mousewheel } from 'swiper/modules';
import Image from 'next/image';

const slides = Array.from({ length: 5 }, (_, i) => ({
  src: `/images/progress/Image${String(i + 1)}.avif`, // Ensure these paths are correct
  alt: `Construction Image ${i + 1}`,
}));

export default function Construction() {
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null); // Use <any> for Swiper instance state
  // NEW: State to hold the main Swiper instance
  const [mainSwiper, setMainSwiper] = useState<any>(null);

  // Function to handle slide click and update main swiper
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
      className="gallery-section same-gap construction theme-bg-light py-5"
      id="gallery"
    >
      <div className="container">
        <div className="title text-center mb-4">
          <h2 className="theme-color-dark">Project Progress</h2>
        </div>

        {/* === Main Content Area: Row with Columns === */}
        <div className="row">
          {/* === 1. Main Swiper (col-md-8) === */}
          <div className="col-md-8 position-relative d-flex align-items-center">
            <Swiper
              onSwiper={setMainSwiper} // Get the main Swiper instance
              modules={[Autoplay, Navigation, Thumbs, Controller]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={15}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-main-construction',
                prevEl: '.swiper-button-prev-main-construction',
              }}
              thumbs={{ swiper: thumbsSwiper }}
              className="rounded-xl overflow-hidden main-construction-swiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1920}
                    height={1080}
                    
                    className="img-fluid rounded-xl"
                    loading="lazy"
                    style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                    onClick={() => handleSlideClick(slide.src, index)}
                  />
                </SwiperSlide>
              ))}

              {/* Swiper navigation buttons for the Main Slider */}
              <div
                className="swiper-button-prev swiper-button-prev-main-construction theme-bg-dark d-md-none"
                style={{ color: '#fff', left: '0', zIndex: 10 }}
              ></div>
              <div
                className="swiper-button-next swiper-button-next-main-construction theme-bg-dark d-md-none"
                style={{ color: '#fff', right: '0', zIndex: 10 }}
              ></div>
            </Swiper>
          </div>
          {/* === 2. Vertical Thumbnails Swiper (col-md-4) === */}
          {/* IMPORTANT: Added position-relative to anchor the custom navigation buttons */}
          <div className="col-md-4 mt-md-0 d-none d-md-block position-relative thumbnail-wrapper-construction">
            <Swiper
              // NOTE: Added Mousewheel module here
              modules={[Navigation, Thumbs, Mousewheel]}
              onSwiper={setThumbsSwiper}
              direction={'vertical'}
              spaceBetween={10}
              slidesPerView={2} // Adjusted to 3 for better vertical look
              freeMode={true}
              watchSlidesProgress={true}
              loop={true}
              // NEW: Enable Mousewheel control
              mousewheel={true}
              // NEW: Use onSlideChangeTransitionEnd to sync main slider
              onSlideChangeTransitionEnd={handleThumbScroll}
              // Set up navigation for custom buttons
              navigation={{
                nextEl: '.swiper-button-next-thumbs-construction',
                prevEl: '.swiper-button-prev-thumbs-construction',
              }}
              className="mySwiper-thumbs-construction h-100"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative ">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={350}
                    height={155}
                    className="img-fluid rounded-2  swiper-thumb-image-construction"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons (outside the Swiper) */}
            {/* <div className="swiper-button-prev swiper-button-prev-thumbs-construction theme-bg-light"></div>
            <div className="swiper-button-next swiper-button-next-thumbs-construction theme-bg-light"></div> */}
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

      {/* --- Custom Styling for Thumbnails and Navigation --- */}
      <style jsx global>{`
        /* Global height control for the thumbnail area */
        .mySwiper-thumbs-construction {
          height: 100%;
          max-height: 350px; /* Aligned with main slider height */
        }
        
        /* Thumbnails styling */
        .swiper-thumb-image-construction {
          transition: transform 0.3s, opacity 0.3s;
          opacity: 0.6;
          cursor: pointer;
        }
        .mySwiper-thumbs-construction .swiper-slide-thumb-active .swiper-thumb-image-construction {
          opacity: 1;
          transform: scale(1.05);
          border: 3px solid var(--theme-color-dark, #000); 
        }

        /* --- Main Slider Navigation (Horizontal) --- */
        .swiper-button-prev-main-construction, .swiper-button-next-main-construction {
            top: 50% !important;
            transform: translateY(-50%) !important;
            width: 40px; 
            height: 40px; 
            border-radius: 50%; 
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .swiper-button-prev-main-construction::after, .swiper-button-next-main-construction::after {
            font-size: 1rem; 
        }

        /* --- Thumbnail Navigation FIX (Vertical & Centered) --- */
        /* General styling and horizontal centering */
        .swiper-button-prev-thumbs-construction, 
        .swiper-button-next-thumbs-construction {
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
        /* Position PREV/UP button */
        .swiper-button-prev-thumbs-construction {
            top: 0px !important; 
            bottom: auto !important;
        }
        /* Position NEXT/DOWN button */
        .swiper-button-next-thumbs-construction {
            bottom: 0px !important;
            top: auto !important; 
        }
        /* Apply vertical arrows correctly */
        .swiper-button-prev-thumbs-construction::after {
            content: '\u2191'; /* Unicode for Up Arrow */
            font-size: 1.2rem;
        }
        .swiper-button-next-thumbs-construction::after {
            content: '\u2193'; /* Unicode for Down Arrow */
            font-size: 1.2rem;
        }

        .swiper-button-next-main-construction {right:10px !important;}
        .swiper-button-prev-main-construction {left:10px !important}
      
       

      `}</style>
    </section>
  );
}