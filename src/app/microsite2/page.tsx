"use client";
import { useEffect } from "react";

import Link from "next/link";

import Image from "next/image";
import AmenitiesMarquee from "../components/AmenitiesMarquee";
import MicroHomeHeroSlider from "../components/Microsite/MicroHomeHeroSlider";
import Clubhouse from "../components/ClubhouseMarquee";
export default function Home() {
  const DecorativeLine = () => (
    <div className="d-flex flex-column align-items-center mx-4 mx-md-5">
      <div style={{ height: '8rem', width: '1px', backgroundColor: '#ced4da' }}></div>
      <svg className="my-2 text-secondary" width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      <div style={{ height: '8rem', width: '1px', backgroundColor: '#ced4da' }}></div>
    </div>
  );
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
            className="project-info-section theme-bg-dark"

          >
            <div className="container">
              <div className="row text-center text-white">
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3 theme-color-light">Project Size</h6>
                  <p className="mb-0 fs-2 fw-light theme-color-light">15 Acres</p>
                </div>
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3 theme-color-light">Approved</h6>
                  <p className="mb-0 fs-2 fw-light theme-color-light">BMRDA</p>
                </div>
                <div className="col-6 col-md-3 border-end border-light mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3  theme-color-light">
                    Possession
                  </h6>
                  <p className="mb-0 fs-2 fw-light theme-color-light">12 Months</p>
                </div>
                <div className="col-6 col-md-3 mt-4 mt-md-0">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3 theme-color-light">
                    Plot Sizes
                  </h6>
                  <p className="mb-0 fs-2 fw-light theme-color-light">1500 - 3300 sq.ft.</p>
                </div>
              </div>
            </div>
          </section>





          <section className="d-flex align-items-center justify-content-center p-0 theme-bg-light" id="philosophy">
            <div className="container-fluid p-0">
              <div className="row g-0 align-items-center w-100 mx-auto shadow-lg rounded-3 overflow-hidden" >


                <div className="col-md-6 px-md-5 py-md-5 order-2 order-md-2">
                  <div className="row">
                    <div className="col-md-8 d-flex px-md-5 px-4 py-md-0 py-3 align-items-center justify-content-center ">
                      <div className="">


                        <div className="flex-grow-1   ">
                          <h3 className="fs-3 mb-3  theme-color-dark" >
                            Where Green is the New Gold
                          </h3>
                          <div>

                            <p className=" theme-color-dark mb-3">
                              In an age where value is often measured in skyscrapers and square footage, we measure it in trees, tranquility, and timelessness. </p>
                            <p className=" theme-color-dark mb-3">
                              At Evara, green is not just a design choice, it’s a way of life. Every breeze unblocked, every birdsong preserved, every inch of soil respected. It’s our tribute to nature’s original architecture.</p>
                            <p className=" theme-color-dark mb-3">
                              Because true luxury isn’t found in concrete. It’s found in clarity of air, of vision, of intent. Here, nature isn’t a backdrop, it’s the blueprint.
                            </p>

                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-4">
                      <div className="d-flex  align-items-center justify-content-center">



                        <div>
                          <div className="d-flex flex-column align-items-center ">
                            <div style={{ height: '10rem', width: '1px', backgroundColor: '#ced4da' }} className="theme-bg-dark"></div>
                            <svg className="my-2 text-secondary" width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" className="theme-color-dark" />
                            </svg>
                            <h3 className="small text-uppercase fw-semibold text-secondary theme-color-dark text-center my-4 fs-2 theme-color-dark" style={{ letterSpacing: '0.1em' }}>
                              BRAND PHILOSOPHY
                            </h3>
                            <svg className="my-2 text-secondary" width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" className="theme-color-dark" />
                            </svg>
                            <div style={{ height: '10rem', width: '1px', backgroundColor: '#ced4da' }} className="theme-bg-dark"></div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>


                <div className="col-md-6  order-1 order-md-1">
                  <img
                    src='/images/About-About-us.jpg'
                    alt="Brand Philosophy"
                    className="img-fluid w-100 h-100 mb-md-0 mb-3"
                    style={{ objectFit: 'cover', minHeight: '600px', objectPosition: 'center top' }}

                  />
                </div>
              </div>
            </div>
          </section>
          <section className="d-flex align-items-center justify-content-center p-0 theme-bg-light" id="philosophy">
            <div className="container-fluid p-0">
              <div className="row g-0 align-items-center w-100 mx-auto shadow-lg rounded-3 overflow-hidden" >


                <div className="col-md-6 px-md-5 py-md-5 order-2 order-md-1">
                  <div className="row">
                    <div className="col-md-8 d-flex px-md-5 px-4 py-md-0 py-3 align-items-center justify-content-center ">
                      <div className="">


                        <div className="flex-grow-1   ">
                          <h3 className="fs-3 mb-3  theme-color-dark" >
                            Where Green is the New Gold
                          </h3>
                          <div>

                            <p className=" theme-color-dark mb-3">
                              In an age where value is often measured in skyscrapers and square footage, we measure it in trees, tranquility, and timelessness. </p>
                            <p className=" theme-color-dark mb-3">
                              At Evara, green is not just a design choice, it’s a way of life. Every breeze unblocked, every birdsong preserved, every inch of soil respected. It’s our tribute to nature’s original architecture.</p>
                            <p className=" theme-color-dark mb-3">
                              Because true luxury isn’t found in concrete. It’s found in clarity of air, of vision, of intent. Here, nature isn’t a backdrop, it’s the blueprint.
                            </p>

                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-4">
                      <div className="d-flex  align-items-center justify-content-center">



                        <div>
                          <div className="d-flex flex-column align-items-center ">
                            <div style={{ height: '10rem', width: '1px', backgroundColor: '#ced4da' }} className="theme-bg-dark"></div>
                            <svg className="my-2 text-secondary" width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" className="theme-color-dark" />
                            </svg>
                            <h3 className="small text-uppercase fw-semibold text-secondary theme-color-dark text-center my-4 fs-2 theme-color-dark" style={{ letterSpacing: '0.1em' }}>
                              BRAND PHILOSOPHY
                            </h3>
                            <svg className="my-2 text-secondary" width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" className="theme-color-dark" />
                            </svg>
                            <div style={{ height: '10rem', width: '1px', backgroundColor: '#ced4da' }} className="theme-bg-dark"></div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>


                <div className="col-md-6  order-1 order-md-2">
                  <img
                    src='/images/About-About-us.jpg'
                    alt="Brand Philosophy"
                    className="img-fluid w-100 h-100 mb-md-0 mb-3"
                    style={{ objectFit: 'cover', minHeight: '600px', objectPosition: 'center top' }}

                  />
                </div>
              </div>
            </div>
          </section>







        </div>
      </main>
    </>
  );
}
