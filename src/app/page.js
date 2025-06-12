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
      <Preloader />

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
        <div id="scroll-more" className="section_home-residental">
          <div className="padding-global vi">
            <div className="container-large">
              <div className="home-about_component">
                <div className="home-about_text-wrapper">
                  <div className="text-color-dark-rainforest">
                    <div className="text-size-regular">
                      In a serene suburb of South-east Bengaluru, surrounded by
                      vibrant natural colours is Ims, a planet-friendly residential
                      community.
                    </div>
                  </div>
                </div>
                <div className="home-about_heading-wrapper">
                  <div className="text-color-dark-rainforest">
                    <h2 data-animate={1} className="heading-style-h1">
                      Leaves you in awe, every single time.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-about_image-wrapper">
            <img
              src="images/home_about-image-min.jpg"
              loading="lazy"
              alt=""
              className="home-about_image mol-img_parallax"
            />
          </div>
        </div>
        <div className="section_home-stats">
          <div className="padding-global">
            <div className="container-large">
              <div className="home-stats_components">
                <div className="home-stats_content-wrapper">
                  <div className="home-stats_text-wrapper">
                    <div className="text-color-grey">
                      <div className="text-size-medium">
                        Enter and see a sprawling canvas of green within the city
                      </div>
                    </div>
                  </div>
                  <div className="home-stats_items">
                    <div
                      id="w-node-cdea1d55-fe63-8f1c-3822-d0c3250461c3-ac1b3e9a"
                      className="home-stats_item"
                    >
                      <div className="text-color-accent">
                        <h2 className="heading-style-h1">1000+</h2>
                      </div>
                      <div className="text-color-offwhite">
                        <div className="text-size-regular">Trees</div>
                      </div>
                    </div>
                    <div
                      id="w-node-f6750213-c322-5874-8b4c-dd2586408f82-ac1b3e9a"
                      className="home-stats_item"
                    >
                      <div className="text-color-accent">
                        <h2 className="heading-style-h1">
                          15,000<span className="heading-style-h5">sq. ft.</span>
                        </h2>
                      </div>
                      <div className="text-color-offwhite">
                        <div className="text-size-regular">Miyawaki Forest</div>
                      </div>
                    </div>
                    <div
                      id="w-node-_1989e816-fb39-3880-661b-bed1357559b4-ac1b3e9a"
                      className="home-stats_item"
                    >
                      <div className="text-color-accent">
                        <h2 className="heading-style-h1">45%</h2>
                      </div>
                      <div className="text-color-offwhite">
                        <div className="text-size-regular">Open Space</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-stats_more-wrapper">
                  <div className="button-group">
                    <a href="biodiversity" className="button w-inline-block">
                      <div className="button_text">More about biodiversity</div>
                      <div className="button-arrow_wrapper" />
                      <div className="button-arrow_image w-embed">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 12.0737V11.0161L14.9117 11.0295L11.6453 7.77644L12.3949 7L16.9599 11.5382L12.4083 16.1031L11.6587 15.3267L14.9251 12.0737H7Z"
                            fill="#F3F4EF"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="home-stats_image-wrapper">
                <div
                  data-w-id="a8744aaa-ea55-e0ce-ae38-16c1b4c217c3"
                  data-is-ix2-target={1}
                  className="home-stats_image"
                  data-animation-type="lottie"
                  data-src="documents/tree-4.json"
                  data-loop={0}
                  data-direction={1}
                  data-autoplay={0}
                  data-renderer="svg"
                  data-default-duration="7.016666666666667"
                  data-duration="7.016666666666667"
                  data-ix2-initial-state={3}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="5fa37586-fcbc-4396-23d1-dd98b9599e96"
          className="section_home-security"
        >
          <div className="padding-global">
            <div className="container-large">
              <div className="home-security_component">
                <div className="home-security_content">
                  <div className="home-security_heading-wrapper">
                    <h2 data-animate={1} className="heading-style-h2">
                      Comfort, Safety and
                      <br />
                      Security are yours.
                    </h2>
                  </div>
                  <div className="home-security_text-wrapper">
                    <div>
                      <div className="text-size-regular">
                        These are the feelings that will overwhelm you as you spend
                        time within Ims. The community that you will find here as well
                        as the natural beauty that surrounds you will make you feel
                        more at home than you ever have before.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-security_bg-image-wrap">
            <img
              src="images/home_safety-secutiy-min.jpg"
              loading="lazy"
              alt=""
              className="home-security_bg-img"
            />
            <div className="home-security_img-overlay" />
          </div>
        </div>
        <div
          data-w-id="8905ac58-eaf7-356f-bf47-4ad8001e257f"
          className="section_home-masterplan"
        >
          <div className="padding-global">
            <div className="container-large">
              <div className="home-masterplan_component">
                <div className="home-masterplan_left">
                  <h2
                    data-animate={1}
                    className="heading-style-h2 text-color-dark-rainforest"
                  >
                    The Master Plan
                  </h2>
                </div>
                <div
                  id="w-node-_0c32365e-28ce-9e1d-b95e-bd08d9997641-ac1b3e9a"
                  className="home-masterplan_right"
                >
                  <img
                    src="images/Masterplan-for-website.png"
                    loading="lazy"
                    alt=""
                    className="home-masterplan_img"
                  />
                  <div className="margin-top margin-small">
                    <div className="max-width-small">
                      <div className="text-style-muted">
                        <div className="disclamer-text">
                          Note: The sizes mentioned above are consolidated for ease of
                          categorization and may have minor variations.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-masterplan_legend">
                  <div className="heading-style-h5">Legend</div>
                  <div className="home-highlights_legend-grid">
                    <div
                      id="w-node-be4663ad-c0a0-253c-f46e-d6c640bbbb11-ac1b3e9a"
                      className="home-highlights_points-grid"
                    >
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">9</div>
                        </div>
                        <div className="home-highlights_text">Clubhouse</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">10</div>
                        </div>
                        <div className="home-highlights_text">Community Seating</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">11</div>
                        </div>
                        <div className="home-highlights_text">Box Cricket</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">12</div>
                        </div>
                        <div className="home-highlights_text">Parking</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">13</div>
                        </div>
                        <div className="home-highlights_text">Bird Watching Zone</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">14</div>
                        </div>
                        <div className="home-highlights_text">Amphitheatre</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">15</div>
                        </div>
                        <div className="home-highlights_text">Multipurpose Lawn</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">16</div>
                        </div>
                        <div className="home-highlights_text">
                          Senior Citizen Park
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_5bcfc565-769c-8295-15b8-0bc64774afab-ac1b3e9a"
                      className="home-highlights_points-grid"
                    >
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">1</div>
                        </div>
                        <div className="home-highlights_text">Entry/Exit</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">2</div>
                        </div>
                        <div className="home-highlights_text">Entrace Archway</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">3</div>
                        </div>
                        <div className="home-highlights_text">Roundabout</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">4</div>
                        </div>
                        <div className="home-highlights_text">Pet Park</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">5</div>
                        </div>
                        <div className="home-highlights_text">Tennis Court</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">6</div>
                        </div>
                        <div className="home-highlights_text">Multipurpose Court</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">7</div>
                        </div>
                        <div className="home-highlights_text">Open Park</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">8</div>
                        </div>
                        <div className="home-highlights_text">Kids' Play Area</div>
                      </div>
                    </div>
                    <div className="home-highlights_points-grid last">
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">17</div>
                        </div>
                        <div className="home-highlights_text">Padel Tennis</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">18</div>
                        </div>
                        <div className="home-highlights_text">Garden Pavilion</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">19</div>
                        </div>
                        <div className="home-highlights_text">Leisure Park</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">20</div>
                        </div>
                        <div className="home-highlights_text">Miyawaki Forest</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">21</div>
                        </div>
                        <div className="home-highlights_text">Avenue Plantation</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">22</div>
                        </div>
                        <div className="home-highlights_text">Outdoor Gym</div>
                      </div>
                      <div className="home-highlights_points">
                        <div className="home-highlights_point-circle">
                          <div className="home-highlights_point-text">23</div>
                        </div>
                        <div className="home-highlights_text">Services</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="images/Hightlight-right-leaf-image.svg"
            loading="lazy"
            alt=""
            className="home-highlights_left-leaf"
          />
        </div>
        <div className="section_home-plot-offerings">
          <div className="padding-global no-padding">
            <div className="container-large">
              <div className="home-offerings_component">
                <div className="home-offerings_content-wrapper">
                  <div className="home-offerings-content">
                    <div className="home-offerings_heading-wrapper">
                      <div className="text-color-dark-rainforest">
                        <h1 className="heading-style-h2">The offerings</h1>
                      </div>
                    </div>
                    <div className="home-offerings_item">
                      <div
                        id="w-node-e6931fed-39f2-146d-5a1b-cb17ad89f5a5-ac1b3e9a"
                        className="home-offerings_list-items"
                      >
                        <div className="home-offerings_dimensions">
                          <div className="text-color-dark-rainforest">
                            <div className="text-size-large">20 x 30</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">feet</div>
                          </div>
                        </div>
                        <div className="home-offerings_border-line" />
                        <div className="home-offerings_square-feet">
                          <div className="text-color-accent">
                            <div className="text-size-large">600</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">square feet</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-fce82218-34e6-2af9-e10c-bf5ae87661f3-ac1b3e9a"
                        className="home-offerings_list-items"
                      >
                        <div className="home-offerings_dimensions">
                          <div className="text-color-dark-rainforest">
                            <div className="text-size-large">30 x 40</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">feet</div>
                          </div>
                        </div>
                        <div className="home-offerings_border-line" />
                        <div className="home-offerings_square-feet">
                          <div className="text-color-accent">
                            <div className="text-size-large">1200</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">square feet</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_957cf707-5fe4-5507-ab0e-5288e2941f7c-ac1b3e9a"
                        className="home-offerings_list-items"
                      >
                        <div className="home-offerings_dimensions">
                          <div className="text-color-dark-rainforest">
                            <div className="text-size-large">40 x 60</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">feet</div>
                          </div>
                        </div>
                        <div className="home-offerings_border-line" />
                        <div className="home-offerings_square-feet">
                          <div className="text-color-accent">
                            <div className="text-size-large">2400</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">square feet</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-offerings_explore">
                    <div className="home-offerings_explore-content">
                      <div className="text-size-large text-color-dark-rainforest">
                        Or any unique plot combination of your choice upto{" "}
                        <span className="text-color-accent">5350 square feet.</span>
                      </div>
                    </div>
                    <div className="button-group">
                      <a href="contact" className="button w-inline-block">
                        <div className="button_text">Enquire Now</div>
                        <div className="button-arrow_wrapper" />
                        <div className="button-arrow_image w-embed">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 12.0737V11.0161L14.9117 11.0295L11.6453 7.77644L12.3949 7L16.9599 11.5382L12.4083 16.1031L11.6587 15.3267L14.9251 12.0737H7Z"
                              fill="#F3F4EF"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <img
                  src="images/home_offeings-1.png"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="images/home_offeings-1-p-500.png 500w, images/home_offeings-1-p-800.png 800w, images/home_offeings-1-p-1080.png 1080w, images/home_offeings-1-p-1600.png 1600w, images/home_offeings-1.png 1834w"
                  alt=""
                  className="home-offerings_image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section_home-connectivity">
          <div className="padding-global">
            <div className="container-large">
              <div
                data-w-id="a5c72909-6bfe-0f31-5750-471e8cf97d21"
                data-is-ix2-target={1}
                className="home-connectivity_image"
                data-animation-type="lottie"
                data-src="documents/data.json"
                data-loop={0}
                data-direction={1}
                data-autoplay={0}
                data-renderer="svg"
                data-default-duration={6}
                data-duration={0}
                data-ix2-initial-state={0}
              />
              <div className="home-connectivity_components">
                <div className="home-connectivity_image-wrapper" />
                <div
                  id="w-node-ae28a13d-3673-7d72-6c93-35ac2b8ff216-ac1b3e9a"
                  className="home-connectivity_content-wrapper"
                >
                  <div className="home-connectivity_content">
                    <div className="home-connectivity_heading-wrapper">
                      <h2
                        data-animate={1}
                        className="heading-style-h2 text-color-offwhite"
                      >
                        Located{" "}
                        <span className="text-color-accent">Off Hosa Road,</span>{" "}
                        Bengaluru.
                      </h2>
                    </div>
                    <div className="home-connectivity_text-wrapper">
                      <div className="text-size-regular text-color-offwhite">
                        A spacious city layout. A direct line to Electronic City. Fast
                        connectivity to most of Bengaluru. Hosa Road is full of
                        opportunities and is primed to be the city's new hub.
                      </div>
                    </div>
                  </div>
                  <div className="home-connectivity_distance-wrapper">
                    <div
                      id="w-node-_9441ef5f-b995-4318-be5b-df8ccce3289b-ac1b3e9a"
                      className="home-connectivity_distance"
                    >
                      <div className="home-connectivity_distance-icon">
                        <img
                          src="images/Layer_1-9.svg"
                          loading="lazy"
                          alt=""
                          className="home-connectivity-icon"
                        />
                      </div>
                      <div className="home-connectivity_distance-text">
                        <div className="text-color-offwhite">
                          <div className="text-size-large">HSR Layout</div>
                        </div>
                        <div className="text-color-silvermist">
                          <div className="text-size-regular">7.4 kms</div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_2e82b6e9-e071-cd09-e477-4c91b9a4b018-ac1b3e9a"
                      className="home-connectivity_distance"
                    >
                      <div className="home-connectivity_distance-icon">
                        <img
                          src="images/Layer_1-9.svg"
                          loading="lazy"
                          alt=""
                          className="home-connectivity-icon"
                        />
                      </div>
                      <div className="home-connectivity_distance-text">
                        <div className="text-color-offwhite">
                          <div className="text-size-large">Electronic City</div>
                        </div>
                        <div className="text-color-silvermist">
                          <div className="text-size-regular">9 kms</div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_681bb572-5097-8f68-667c-d8add2d0c9a1-ac1b3e9a"
                      className="home-connectivity_distance"
                    >
                      <div className="home-connectivity_distance-icon">
                        <img
                          src="images/Layer_1-9.svg"
                          loading="lazy"
                          alt=""
                          className="home-connectivity-icon"
                        />
                      </div>
                      <div className="home-connectivity_distance-text">
                        <div className="text-color-offwhite">
                          <div className="text-size-large">Koramangala</div>
                        </div>
                        <div className="text-color-silvermist">
                          <div className="text-size-regular">10.5 kms</div>
                        </div>
                      </div>
                    </div>
                    <div className="home-connectivity_distance">
                      <div className="home-connectivity_distance-icon">
                        <img
                          src="images/Layer_1-9.svg"
                          loading="lazy"
                          alt=""
                          className="home-connectivity-icon"
                        />
                      </div>
                      <div className="home-connectivity_distance-text">
                        <div className="text-color-offwhite">
                          <div className="text-size-large">HAL Old Airport Road</div>
                        </div>
                        <div className="text-color-silvermist">
                          <div className="text-size-regular">12 kms</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button-group">
                    <a href="contact" className="button w-inline-block">
                      <div className="button_text">Enquire Now</div>
                      <div className="button-arrow_wrapper" />
                      <div className="button-arrow_image w-embed">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 12.0737V11.0161L14.9117 11.0295L11.6453 7.77644L12.3949 7L16.9599 11.5382L12.4083 16.1031L11.6587 15.3267L14.9251 12.0737H7Z"
                            fill="#F3F4EF"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_home-promoter">
          <div className="padding-global">
            <div className="container-large">
              <div className="home-promoter_components">
                <div
                  id="w-node-_224f444c-e62a-fbc8-4da3-1a34ecc077c2-ac1b3e9a"
                  className="home-promoter_azzets-wrapper"
                >
                  <div className="home-pormoter_heading-wrapper">
                    <div className="text-color-dark-rainforest">
                      <h2 data-animate={1} className="heading-style-h2">
                        An Assetz Project
                      </h2>
                    </div>
                  </div>
                  <div className="home-promoter_text-wrapper">
                    <div className="text-color-dark-rainforest">
                      <div className="text-size-regular">
                        Every square inch of an Assetz property reflects our “Better
                        Design” philosophy. Here you will find homes that let in tons
                        of natural light, where space is intelligently managed, and
                        every amenity is of the highest quality. By nurturing the
                        greenery all around, we create living spaces that are
                        cherished forever.
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://www.assetzproperty.com/"
                    className="home-promoter_azzets-webiste w-inline-block"
                  >
                    <div className="text-color-accent">
                      <div className="text-size-regular">Assetz website</div>
                    </div>
                    <img
                      src="images/location_venue-arrow.svg"
                      loading="lazy"
                      alt=""
                      className="home-promoter_arrow-image"
                    />
                  </a>
                </div>
                <div
                  id="w-node-_73b538b0-ac60-285b-5cc5-cf52ad238c54-ac1b3e9a"
                  className="home-promoter_image-wrapper"
                >
                  <img
                    src="images/home-promoter_image.png"
                    loading="lazy"
                    alt=""
                    className="home-promoter_image mol-img_parallax"
                  />
                </div>
                <div className="home-promoter_content-wrapper">
                  <div className="home-promoter_content">
                    <div className="home-promoter_projects">
                      <div className="home-promoter_heading-wrapper">
                        <div className="text-color-accent">
                          <h2 className="heading-style-h2">30+</h2>
                        </div>
                      </div>
                      <div className="home-promoter_projects-text">
                        <div className="text-color-silvermist">
                          <div className="text-size-regular">
                            residential projects
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-promoter_square">
                      <div className="home-promoter_square-heading">
                        <div className="text-color-accent">
                          <h2 className="heading-style-h2">27 million</h2>
                        </div>
                      </div>
                      <div className="home-promoter_text-square">
                        <div className="text-color-silvermist">
                          <div className="text-size-regular">
                            sq. ft. developed and ongoing
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="home-promoter_square">
                      <div className="home-promoter_square-heading">
                        <div className="text-color-accent">
                          <h2 className="heading-style-h2">15,800+</h2>
                        </div>
                      </div>
                      <div className="home-promoter_text-square">
                        <div className="text-color-silvermist">
                          <div className="text-size-regular">
                            residential units delivered and underway
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-promoter_develops-content">
                    <div className="text-color-dark-rainforest">
                      <div className="text-size-regular">
                        Founded in 2006, our team comprises over 300 professionals who
                        bring outstanding expertise to their respective fields. The
                        team also has a 12-year average of rich cross-industry skills
                        across the board.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_home-cta">
          <div className="padding-global">
            <div className="container-large">
              <div className="home-cta_felx">
                <div
                  data-w-id="827afb3d-39c2-5769-0b76-d2edca8b1b3b"
                  className="home-cta_components"
                >
                  <div
                    id="w-node-_5878f7cc-923b-516e-5b6b-44ecfed3a9dc-ac1b3e9a"
                    data-w-id="5878f7cc-923b-516e-5b6b-44ecfed3a9dc"
                    className="home-cta_content-wrapper"
                  >
                    <div className="home-cta_content">
                      <div className="text-color-dark-rainforest">
                        <h3 className="display-v3">
                          Wonder awaits inside the woodland.
                        </h3>
                      </div>
                      <div className="button-group">
                        <a href="contact" className="button w-inline-block">
                          <div className="button_text">Enquire Now</div>
                          <div className="button-arrow_wrapper" />
                          <div className="button-arrow_image w-embed">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 12.0737V11.0161L14.9117 11.0295L11.6453 7.77644L12.3949 7L16.9599 11.5382L12.4083 16.1031L11.6587 15.3267L14.9251 12.0737H7Z"
                                fill="#F3F4EF"
                              />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-afba4dd2-5dc3-1865-ab5a-2521bd202976-ac1b3e9a"
                    className="home-cta_image-wrapper"
                  >
                    <img
                      src="images/home-cta_leafC.png"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="images/home-cta_leafC-p-500.png 500w, images/home-cta_leafC-p-800.png 800w, images/home-cta_leafC-p-1080.png 1080w, images/home-cta_leafC.png 1834w"
                      alt=""
                      className="home-cta_image"
                    />
                  </div>
                </div>
                <div
                  data-w-id="973a1350-ed4c-1900-5731-c83ee4133871"
                  className="home-cta_white-screen"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
