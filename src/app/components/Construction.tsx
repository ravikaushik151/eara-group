'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/thumbs'; // Important for thumbnail control
import 'swiper/css/navigation';
// No need for 'effect-coverflow' if you're not using it here

// Import required Swiper modules
import { Autoplay, Navigation, Thumbs, Controller } from 'swiper/modules';
import Image from 'next/image';

const slides = Array.from({ length: 5 }, (_, i) => ({
  src: `/images/gallery/Image${String(i + 1)}.png`, // Ensure these paths are correct
  alt: `Construction Image ${i + 1}`,
}));

export default function Construction() {
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // State for the thumbnail Swiper instance

  return (
    <section
      className="gallery-section same-gap construction theme-bg-light py-5" // Added py-5 for consistent padding
      id="gallery"
    >
      <div className="container">
        <div className="title text-center mb-4">
          <h2 className="theme-color-dark">Project Progress</h2> {/* Corrected typo: Progress */}
        </div>

        {/* === Main Content Area: Row with Columns === */}
        <div className="row">

           {/* === 2. Vertical Thumbnails Swiper (col-md-4) === */}
           <div className="col-md-4  mt-md-0 d-none d-md-block"> {/* Hide on small screens */}
            <Swiper
              onSwiper={setThumbsSwiper} // Save the Swiper instance to state
              direction={'vertical'} // Key change: vertical scrolling
              spaceBetween={10}
              slidesPerView={2} // Display 4 thumbnails at a time
              freeMode={true}
              watchSlidesProgress={true}
              loop={true}
              className="mySwiper-thumbs-construction h-100" // Use h-100
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={500}
                    height={300}
                    className="img-fluid rounded-2 swiper-thumb-image-construction"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* === 1. Main Swiper (col-md-8) === */}
          <div className="col-md-8 position-relative pe-md-4"> {/* Added pe-md-4 for spacing */}
            <Swiper
              modules={[Autoplay, Navigation, Thumbs, Controller]} // Added Thumbs, Controller
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={10} // Reduced spaceBetween for main slider
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-main-construction', // Unique class for this component
                prevEl: '.swiper-button-prev-main-construction', // Unique class for this component
              }}
              thumbs={{ swiper: thumbsSwiper }} // Link to the thumbnail Swiper instance
              className="rounded-xl overflow-hidden main-construction-swiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1920}
                    height={1080}
                    className="img-fluid rounded-xl" // Removed mb-3 from here
                    loading="lazy"
                    style={{ cursor: 'zoom-in' }}
                    onClick={() => setPopupImage(slide.src)}
                  />
                </SwiperSlide>
              ))}
              
              {/* Swiper navigation buttons for the Main Slider */}
              <div
                className="swiper-button-prev swiper-button-prev-main-construction theme-bg-dark" // Ensure correct theme class
                style={{
                  color: '#fff', // Changed color for dark background button
                  left: '0',
                  zIndex: 10,
                }}
              ></div>
              <div
                className="swiper-button-next swiper-button-next-main-construction theme-bg-dark" // Ensure correct theme class
                style={{
                  color: '#fff', // Changed color for dark background button
                  right: '0',
                  zIndex: 10,
                }}
              ></div>
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
        /* Match the height of the main slider for Construction gallery */
        .main-construction-swiper {
            height: auto; /* Allow content to dictate height, or set a fixed height */
            /* max-height: 500px; Remove if not needed */
        }
        .mySwiper-thumbs-construction {
          height: 100%;
          max-height: 360px; /* Adjust this value to match your main slider's height */
        }
        /* Style the image within the slide */
        .swiper-thumb-image-construction {
          transition: transform 0.3s, opacity 0.3s;
          opacity: 0.6;
          cursor: pointer;
        }
        /* Style for the active thumbnail slide */
        .mySwiper-thumbs-construction .swiper-slide-thumb-active .swiper-thumb-image-construction {
          opacity: 1;
          transform: scale(1.05);
          border: 3px solid var(--theme-color-dark, #000); /* Example border for active state */
        }
        /* Fix Swiper button positioning for the main slider */
        .swiper-button-prev-main-construction, .swiper-button-next-main-construction {
            top: 50% !important;
            transform: translateY(-50%) !important;
            width: 40px; /* Adjust button size */
            height: 40px; /* Adjust button size */
            border-radius: 50%; /* Make them round */
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .swiper-button-prev-main-construction::after, .swiper-button-next-main-construction::after {
            font-size: 1rem; /* Adjust icon size */
        }

        /* Ensure theme-bg-dark buttons for dark theme */
        .theme-bg-dark {
          background-color: #352822 !important; /* Example dark color */
        }
        .theme-color-dark {
          color: #352822 !important; /* Example dark color */
        }
      `}</style>
    </section>
  );
}