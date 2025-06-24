'use client';
import { useEffect } from 'react';

import Link from "next/link";
import Preloader from "./components/Preloader";

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      const getCurrentPath = () => window.location.pathname;
      const setLerp = () => {
        lenis.options.lerp = getCurrentPath() === '/being-here-at-studio' ? 0.1 : undefined;
        console.log('lerp applied:', lenis.options.lerp);
        console.log('Current Path:', getCurrentPath());
      };

      setTimeout(setLerp, 100);

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    const form = document.getElementById("wf-form-Melodies-of-Life-Contact-Form");
    const trigger = document.getElementById("brochure-download-trigger");
    const popup = document.getElementById("popup-form");
    const thankYou = document.getElementById("popup-thankyou");
    const sourceInput = document.getElementById("SourceURL");

    if (sourceInput) {
      sourceInput.value = window.location.href;
    }

    if (trigger && popup) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "flex";
      });
    }

    const closePopup = () => {
      if (popup) popup.style.display = "none";
      if (thankYou) thankYou.style.display = "none";
    };

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(form.action, {
          method: form.method,
          body: new FormData(form),
        })
          .then((res) => {
            if (res.ok) {
              closePopup();
              document.getElementById("brochure-download-link")?.click();
              if (thankYou) thankYou.style.display = "flex";
            } else {
              alert("There was an issue with your submission. Please try again.");
            }
          })
          .catch((err) => console.error("Submission error:", err));
      });
    }

  }, []);



  return (
    <>


      <main className="main-wrapper">
        <div className="overflow-clip">
          <div
            id="TOP"
            data-w-id="fdbb3392-f834-7a53-ef0d-9c7bd7a9a3b3"
            className="section-home_hero"
          >
            <div
              data-w-id="32a0484c-1834-6612-d729-c9b71ab0b8cc"
              className="home-hero_backgound-wrapper"
            >
              <img
                src="images/hero-image-edit-bg-1-1.png"
                loading="eager"
                alt="Hero nature background"
                className="home-hero_background-image"
              />
            </div>
            <div className="padding-global">
              <div className="home-hero_content-wrapper">
                <div
                  data-w-id="e2520bdf-27cc-4170-9a9b-d109ad8b8353"
                  className="home-hero_forest-content"
                >
                  <div className="text-color-offwhite">
                    <h1 className="display-1">See the forest</h1>
                  </div>
                </div>
                <div
                  data-w-id="48a399cc-bca8-ec64-6c57-b90df97cbb33"
                  className="home-forest_breathe-content"
                >
                  <div className="text-color-offwhite">
                    <h1 className="display-1">
                      <span className="span-text text-color-enchanted">breathe</span>{" "}
                      with you
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="ff347ae9-4a33-9025-77fd-d9d20a599180"
              className="home-hero_image-wrapper"
            >
              <img
                src="images/hero-image-edit-4.png"
                loading="eager"
                alt=""
                className="home-hero_image"
              />
            </div>
            <div className="home-hero_experience-wrapper">
              <div className="home-hero_experience-content">
                <div
                  data-w-id="71cf7792-bbdc-9de6-daa4-7bc2deef980d"
                  className="home-hero_experience"
                >
                  <div className="text-color-offwhite">
                    <h5 className="heading-style-h5">
                      Introducing 39 acres of the most luxurious experience in nature.
                    </h5>
                  </div>
                </div>
                <div className="home-hero_button">
                  <a
                    href="#scroll-more"
                    data-w-id="bc94cbd8-ce4d-341c-c820-bc43343c5866"
                    className="home-hero_button-wrap w-inline-block"
                  >
                    <div className="button is-small">
                      <div className="button_text">Scroll to learn more</div>
                      <div className="button-arrow_wrapper oral" />
                      <div className="button-arrow_image w-embed">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.0457 7H12.1075L12.0941 14.9435L15.3602 11.664L16.1398 12.4167L11.5833 17L6.99999 12.4301L7.77956 11.6774L11.0457 14.957V7Z"
                            fill="#F3F4EF"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="scroll-more">
          <section className="section-1">
            <div className="content">
              <h2>About Us</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="image-wrapper">
              <img src="images/Club-Entrance-View-min.jpg" alt="Luxury interior" />
            </div>
          </section>
          {/* Section 2: 360 Lifestyle Cards */}
          <section className="lifestyle-section">
            <div className="container">
              <h2>Ethos of EARA Group</h2>
              <div className="lifestyle-grid">
                <div className="flip-card rounded-tl">
                  <div className="flip-inner">
                    <div className="flip-front">
                      <img
                        src="/img/biodiversity-highlights-6.png"
                        alt="Entry"
                        width={600}
                        height={250}
                      />
                    </div>
                    <div className="flip-back">
                      <div className="overlay-text">ENTRY EXPERIENCE</div>
                    </div>
                  </div>
                </div>
                <div className="flip-card rounded-tr">
                  <div className="flip-inner">
                    <div className="flip-front">
                      <img
                        src="/img/biodiversity-highlights-6.png"
                        alt="Entry"
                        width={600}
                        height={250}
                      />
                    </div>
                    <div className="flip-back">
                      <div className="overlay-text">LIVING BALCONIES</div>
                    </div>
                  </div>
                </div>
                <div className="flip-card rounded-bl">
                  <div className="flip-inner">
                    <div className="flip-front">
                      <img
                        src="/img/biodiversity-highlights-6.png"
                        alt="Entry"
                        width={600}
                        height={250}
                      />
                    </div>
                    <div className="flip-back">
                      <div className="overlay-text">UPSCALE CLUBHOUSE</div>
                    </div>
                  </div>
                </div>
                <div className="flip-card rounded-br">
                  <div className="flip-inner">
                    <div className="flip-front">
                      <img
                        src="/img/biodiversity-highlights-6.png"
                        alt="Entry"
                        width={600}
                        height={250}
                      />
                    </div>
                    <div className="flip-back">
                      <div className="overlay-text">HIGH-END SPECIFICATIONS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-center">TESTIMONIALS</h2>
            <div className="info-cards">
              <div className="info-box">
                <div className="">
                  <h3>Zero Out</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="info-box">
                <div className="">
                  <h3>Smart Power</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="info-box">
                <div className="">
                  <h3>Sponge Effect</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Section 4: Blog Section */}
          <section>
            <h2 className='text-center'>LATEST BLOGS</h2>
            <div className="blog-grid">
              <div className="blog-card">
                <img src="images/Amenities-clubhouse-min.jpg" alt="Blog 1" />
                <div className="content">
                  <h4>The Future of Smart Living</h4>
                  <p>
                    Discover how smart technologies are redefining luxury in modern
                    homes.
                  </p>
                </div>
              </div>
              <div className="blog-card">
                <img src="images/Amenities-clubhouse-min.jpg" alt="Blog 2" />
                <div className="content">
                  <h4>Eco-Conscious Architecture</h4>
                  <p>
                    Explore architectural trends that prioritize sustainability and
                    efficiency.
                  </p>
                </div>
              </div>
              <div className="blog-card">
                <img src="images/Amenities-clubhouse-min.jpg" alt="Blog 3" />
                <div className="content">
                  <h4>Why Choose Integrated Townships?</h4>
                  <p>
                    Benefits of living in planned, self-sufficient residential
                    environments.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>


      </main>
    </>
  );
}
