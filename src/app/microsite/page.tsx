"use client";
import { useEffect } from "react";

import Link from "next/link";

import Image from "next/image";
import AmenitiesMarquee from "../components/AmenitiesMarquee";
export default function Home() {
  useEffect(() => {

    const form = document.getElementById(
      "wf-form-Melodies-of-Life-Contact-Form"
    );
    const trigger = document.getElementById("brochure-download-trigger");
    const popup = document.getElementById("popup-form");
    const thankYou = document.getElementById("popup-thankyou");




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


  }, []);

  return (
    <>
      <main className="main-wrapper">
        <div className="overflow-clip" id="main-slider">
          <div
            id="TOP"
            data-w-id="fdbb3392-f834-7a53-ef0d-9c7bd7a9a3b3"
            className="section-home_hero"
          >
            <div
              data-w-id="32a0484c-1834-6612-d729-c9b71ab0b8cc"
              className="home-hero_backgound-wrapper"
            >
              <Image
                width={1920}
                height={1080}
                src="/images/web-banner.webp"
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
                      <span className="span-text text-color-enchanted">
                        breathe
                      </span>{" "}
                      with you
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-hero_experience-wrapper">
              <div className="home-hero_experience-content">
                <div
                  data-w-id="71cf7792-bbdc-9de6-daa4-7bc2deef980d"
                  className="home-hero_experience"
                >
                  <div className="text-color-offwhite">
                    <h5 className="heading-style-h5">
                      Introducing 39 acres of the most luxurious experience in
                      nature.
                    </h5>
                  </div>
                </div>
                <div className="home-hero_button">
                  <Link
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="scroll-more">
          <section
            className="project-info-section"
            style={{ backgroundColor: "#1e291d" }}
          >
            <div className="container">
              <div className="row text-center text-white">
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3">Project Size</h6>
                  <p className="mb-0 fs-2 fw-light">80 Acres</p>
                </div>
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3">Possession</h6>
                  <p className="mb-0 fs-2 fw-light">2029</p>
                </div>
                <div className="col-6 col-md-3 border-end border-light mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3">
                    Starting Price
                  </h6>
                  <p className="mb-0 fs-2 fw-light">Rs 98 Lack*</p>
                </div>
                <div className="col-6 col-md-3 mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3">
                    Available Units
                  </h6>
                  <p className="mb-0 fs-2 fw-light">2 &amp; 3 BHK</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-1" id="about">
            <div className="contenter">
              <div className="row  px-md-5">
                <div className="col-md-6 d-flex align-items-center">
                  <div className=" ">
                    <h2>About Us</h2>
                    <p>
                      At Binary Realty, we don’t just build structures — we
                      shape meaningful spaces that reflect aspirations, enhance
                      lifestyles, and stand the test of time. With every
                      project, we blend innovation with intention, delivering
                      homes defined by design clarity, construction excellence,
                      and long-term value.
                    </p>
                    <p>
                      Driven by a team that brings together deep industry
                      experience and a forward-looking mindset, we approach each
                      development as an opportunity to create more than just
                      living spaces — we build communities rooted in trust,
                      quality, and modern urban thinking.
                    </p>
                    <p>
                      From vision to reality, every detail matters — and at
                      Binary Realty, we ensure each one brings you closer to a
                      better way of living.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="image-wrapper">
                    <Image
                      width={500}
                      height={900}
                      src="/images/About-Abut us .jpg"
                      alt="Luxury interior"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="py-5" style={{ backgroundColor: "#1e291d" }}>
            <div className="padding-global">
              <div className="container-large">
                <div className="home-stats_components">
                  <div className="home-stats_content-wrapper">
                    <div className="home-stats_text-wrapper">
                      <div className="text-color-grey">
                        <div className="text-size-medium">
                          Enter and see a sprawling canvas of green within the
                          city
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
                            2 & 3 <span className="heading-style-h5">BHKS</span>
                          </h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular">
                            Miyawaki Forest
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_1989e816-fb39-3880-661b-bed1357559b4-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1">30+</h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular">
                            World Class Amenities
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="py-5 bg-light" id="price">
            <div className="container">
              <h2 className="text-center">Price</h2>
              <div className="row justify-content-center g-4">
                {/* 2 BHK Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="pricing-card text-center p-4 rounded-4 shadow-sm bg-white">
                    <div className="bhk-tag border border-success text-success fw-bold py-2 rounded-3 mb-3">
                      2 BHK
                    </div>
                    <h4 className="fw-bold mb-1">₹ 98 Lakh*</h4>
                    <p className="mb-1">Onwards</p>
                    <p className="text-muted mb-3">
                      Size – 1180 to 1200 Sq.ft.
                    </p>
                    <hr />
                    <a href="#" className="btn btn-dark fw-bold mt-3">
                      Click here
                    </a>
                  </div>
                </div>
                {/* 3 BHK Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="pricing-card text-center p-4 rounded-4 shadow-sm bg-white">
                    <div className="bhk-tag border border-success text-success fw-bold py-2 rounded-3 mb-3">
                      3 BHK
                    </div>
                    <h4 className="fw-bold mb-1">₹ 1.35 Cr*</h4>
                    <p className="mb-1">Onwards</p>
                    <p className="text-muted mb-3">
                      Size – 1630 to 1660 Sq.ft.
                    </p>
                    <hr />
                    <a href="#" className="btn btn-dark fw-bold mt-3">
                      Click here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: 360 Lifestyle Cards */}
          <div className="section_biodiversity-benefits py-5" id="amenities">
            <div className="padding-global">
              <div className="container-large">
                <div className="biodiversity-benefits_components">
                  <div
                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                    className="biodiversity-benefits_header-wrap"
                  >
                    <h2 data-animate={1} className="heading-style-h2">
                      Amenities
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <AmenitiesMarquee />
          </div>


          <div
            data-w-id="8905ac58-eaf7-356f-bf47-4ad8001e257f"
            className="section_home-masterplan"
            id="master-plan"
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
                    <Image
                      width={500}
                      height={700}
                      src="https://placehold.co/700x700?text=Master+Plan"
                      loading="lazy"
                      alt=""
                      className="home-masterplan_img"
                    />
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
                          <div className="home-highlights_text">
                            Community Seating
                          </div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">11</div>
                          </div>
                          <div className="home-highlights_text">
                            Box Cricket
                          </div>
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
                          <div className="home-highlights_text">
                            Bird Watching Zone
                          </div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">14</div>
                          </div>
                          <div className="home-highlights_text">
                            Amphitheatre
                          </div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">15</div>
                          </div>
                          <div className="home-highlights_text">
                            Multipurpose Lawn
                          </div>
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
                          <div className="home-highlights_text">
                            Entrace Archway
                          </div>
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
                          <div className="home-highlights_text">
                            Tennis Court
                          </div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">6</div>
                          </div>
                          <div className="home-highlights_text">
                            Multipurpose Court
                          </div>
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
                          <div className="home-highlights_text">
                            Kids Play Area
                          </div>
                        </div>
                      </div>
                      <div className="home-highlights_points-grid last">
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">17</div>
                          </div>
                          <div className="home-highlights_text">
                            Padel Tennis
                          </div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">18</div>
                          </div>
                          <div className="home-highlights_text">
                            Garden Pavilion
                          </div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">19</div>
                          </div>
                          <div className="home-highlights_text">
                            Leisure Park
                          </div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">20</div>
                          </div>
                          <div className="home-highlights_text">
                            Miyawaki Forest
                          </div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">21</div>
                          </div>
                          <div className="home-highlights_text">
                            Avenue Plantation
                          </div>
                        </div>
                        <div className="home-highlights_points">
                          <div className="home-highlights_point-circle">
                            <div className="home-highlights_point-text">22</div>
                          </div>
                          <div className="home-highlights_text">
                            Outdoor Gym
                          </div>
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
          </div>
          <div className="section_home-connectivity" id="location">
            <div className="padding-global">
              <div className="container-large">
                <div className="home-connectivity_components">
                  <div className="home-connectivity_image-wrapper">
                    <Image
                      alt="google map"
                      src="https://placehold.co/700x1050?text=Master+Plan"
                      width={700}
                      height={700}
                    />
                  </div>
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
                          <span className="text-color-accent">
                            Off Hosa Road,
                          </span>{" "}
                          Bengaluru.
                        </h2>
                      </div>
                      <div className="home-connectivity_text-wrapper">
                        <div className="text-size-regular text-color-offwhite">
                          A spacious city layout. A direct line to Electronic
                          City. Fast connectivity to most of Bengaluru. Hosa
                          Road is full of opportunities and is primed to be the
                          citys new hub.
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
                            src="/images/Layer_1-9.svg"
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
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">
                              Electronic City
                            </div>
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
                            src="/images/Layer_1-9.svg"
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
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">
                              HAL Old Airport Road
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">12 kms</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_681bb572-5097-8f68-667c-d8add2d0c9a1-ac1b3e9a"
                        className="home-connectivity_distance"
                      >
                        <div className="home-connectivity_distance-icon">
                          <img
                            src="/images/Layer_1-9.svg"
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
                            src="/images/Layer_1-9.svg"
                            loading="lazy"
                            alt=""
                            className="home-connectivity-icon"
                          />
                        </div>
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">Airport Road</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">12 kms</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
