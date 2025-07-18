"use client";
import { useEffect } from "react";

import Link from "next/link";

import Image from "next/image";
import AmenitiesMarquee from "../components/AmenitiesMarquee";
import MicroHomeHeroSlider from "../components/Microsite/MicroHomeHeroSlider";
import Clubhouse from "../components/ClubhouseMarquee";
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
          <MicroHomeHeroSlider />
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
                  <p className="mb-0 fs-2 fw-light">15 Acres</p>
                </div>
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3">Approved</h6>
                  <p className="mb-0 fs-2 fw-light">BMRDA</p>
                </div>
                <div className="col-6 col-md-3 border-end border-light mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3">
                    Possession
                  </h6>
                  <p className="mb-0 fs-2 fw-light">12 Months</p>
                </div>
                <div className="col-6 col-md-3 mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3">
                    Plot Sizes
                  </h6>
                  <p className="mb-0 fs-2 fw-light">1500 – 3300 sq.ft.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-1" id="about">
            <div className="contenter">
              <div className="row  px-md-5">
                <div className="col-md-6 d-flex align-items-center">
                  <div className=" ">
                    <h2 className="mb-0">Amidst Nature</h2>
                    <span className="fs-5">Crafted by Earth. Designed by Eara.</span>
                    <p className="mt-4">
                      <strong>Every plot at &ldquo;Amidst Nature&rdquo; is a promise of green mornings, golden silence, and grounded luxury.</strong><strong><br /></strong>Spread across 15 lush acres in Kaggalipura, just off Kanakapura Road, this premium plotted development invites you to design your forever home in a place where the city fades and nature speaks. Thoughtfully approved by BMRDA and connected to every urban convenience, this is more than a plot &mdash; it&rsquo;s a path back to balance.
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
                          <h2 className="heading-style-h1">Acres</h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular">15 acres</div>
                        </div>
                      </div>
                      <div
                        id="w-node-f6750213-c322-5874-8b4c-dd2586408f82-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1">
                            Plot Sizes<span className="heading-style-h5"></span>
                          </h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular">
                            1500 – 3300 Sqft
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_1989e816-fb39-3880-661b-bed1357559b4-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1">Approved </h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular">
                            BMRDA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="py-5 bg-light d-none" id="price">
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
                      Club House
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <Clubhouse />
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
                      src="https://placehold.co/700x1050?text=Location"
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
                          Located in{" "}
                          <span className="text-color-accent">
                            Kaggalipura,
                          </span>{" "}
                          Off Kanakapura Road, Bengaluru.
                        </h2>
                      </div>
                      <div className="w-100">
                        <div className="text-size-regular text-color-offwhite">
                          Surrounded by serene greenery and nestled along the city’s fast-developing Kanakapura stretch, Kaggalipura is a peaceful retreat that’s seamlessly connected to Bengaluru’s most prominent hubs. With wide roads, clean air, and spiritual landmarks nearby, it’s not just a location — it’s a lifestyle.
                        </div>
                      </div>
                    </div>
                    <div className="home-connectivity_distance-wrapper">
                      <div
                        id="w-node-_9441ef5f-b995-4318-be5b-df8ccce3289b-ac1b3e9a"
                        className="home-connectivity_distance"
                      >

                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">Art of Living International Center</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">7 mins</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_2e82b6e9-e071-cd09-e477-4c91b9a4b018-ac1b3e9a"
                        className="home-connectivity_distance"
                      >

                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">
                              Vajarahalli Metro Station
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">15 mins</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_681bb572-5097-8f68-667c-d8add2d0c9a1-ac1b3e9a"
                        className="home-connectivity_distance"
                      >

                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">NICE Road Junction</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">10 mins</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-connectivity_distance">

                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">
                              Kumarans School
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">10–15 mins</div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_681bb572-5097-8f68-667c-d8add2d0c9a1-ac1b3e9a"
                        className="home-connectivity_distance"
                      >

                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large">Metro Cash & Carry</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">20–25 mins</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-connectivity_distance">

                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large"> Global Village Tech Park</div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular">20–25 mins</div>
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
