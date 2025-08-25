"use client";
import { useEffect } from "react";

import Link from "next/link";
import Preloader from "./components/Preloader";
import HomeHeroSlider from "./components/Home/HeroSlider";
import Image from "next/image";
import TestimonialSlider from "./components/Home/TestimonialSlider";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      const getCurrentPath = () => window.location.pathname;
      const setLerp = () => {
        lenis.options.lerp =
          getCurrentPath() === "/being-here-at-studio" ? 0.1 : undefined;
        console.log("lerp applied:", lenis.options.lerp);
        console.log("Current Path:", getCurrentPath());
      };

      setTimeout(setLerp, 100);

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    const form = document.getElementById(
      "wf-form-Melodies-of-Life-Contact-Form"
    );
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
              alert(
                "There was an issue with your submission. Please try again."
              );
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
          <HomeHeroSlider />
        </div>
        <div id="scroll-more">
          <section className="section-1 px-md-5 px-3 theme-bg-light">
            <div className="content">
              <h2 className="mb-0 theme-color-dark">Green Thinking. Luxurious Living.</h2>
              <span className="fs-5 theme-color-dark">Because true luxury is not loud. It’s peaceful.</span>
              <p className="mt-4 theme-color-dark">
                At EARA, we’re redefining the future of real estate with a strong vision to build premium communities that balance modern living with environmental responsibility.<br />
                Backed by 20+ years of industry experience, our foundation is rooted in sustainability and driven by innovation. We specialize in plotted developments and gated layouts designed to integrate seamlessly with nature. Every square foot is planned with precision, combining modern infrastructure, long-term value, and green living at its core.
              </p>
              <Link
                href="/about"
                className="btn btn-dark text-white border mt-4"
              >
                Read More…
              </Link>
            </div>
            <div className="image-wrapper">
              <img src="/images/About-Abut us .jpg" alt="About"
              />
            </div>
          </section>

          <section className="same-gap postion-relative bg-light d-none">
            <div className="container-fluid">
              <div id="project" className="noclass" data-bs-ride="carousel">
                <div className="row">
                  <div className="title text-center mb-3">
                    <h2 className="text-black mb-4">Ongoing Projects</h2>
                  </div>
                </div>
                <div className="row d-flex align-content-center justify-content-center px-md-3">
                  <div className="col-md-5 text-center">
                    <img
                      src="/images/Ongoing-Project.jpg"
                      alt="ongoing"
                      className="img-fluid  mb-3"
                    />
                  </div>
                  <div
                    className="col-md-5 ps-md-5 d-flex align-content-center align-items-center"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                  >
                    <div>
                      <div className="title text-left">
                        <h4 className=" text-black mb-2 fs-4 m-center" style={{ fontSize: "24px" }}>Amidst Nature</h4>
                        <p>
                          <span className="text-black">
                            <i
                              className="fa fa-map-marker mx-1"
                              aria-hidden="true"
                            />
                            Sompura fermentum Lorem - consectetur risus
                          </span>
                        </p>
                      </div>
                      <div className="noclass">
                        <p className="text-justify m-center lh text-black mt-3">
                          Spread across 15 lush acres in Kaggalipura, just off Kanakapura Road, this premium plotted development invites you to design your forever home in a place where the city fades and nature speaks. Thoughtfully approved by BMRDA and connected to every urban convenience, this is more than a plot — it’s a path back to balance.
                        </p>
                      </div>
                      <div className="row align-items-center mb-3 mt-4 mob-center">
                        <div className="col-md-6 col-12 border-end border-dark m-center">
                          <h4 className="bhk text-black fs-5 mb-2">
                            ₹7999/sq.ft.
                          </h4>
                          <div className="text-black m-center">
                            <h6>launch price — exclusive, value-driven investment</h6>
                          </div>
                        </div>
                        <div className="col-md-6 col-12 px-5 text-black m-center">
                          <h6 className="mb-2">15 acres</h6>
                          <h6 className="mb-2">1500 – 3300 sq.ft.</h6>
                          <h6 className="mb-0">BMRDA Approved</h6>
                        </div>
                      </div>

                      <p className="m-center py-md-0 py-3">
                        <a
                          href="/microsite"
                          className="btn btn-dark text-white border"
                          style={{ fontSize: "15px !important" }}
                        >
                          More Details
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="same-gap position-relative bg-light theme-bg-dark">
            <div className="container-fluid">
              <div id="upcoming-project" className="noclass" data-bs-ride="carousel">
                <div className="row">
                  <div className="title text-center mb-3">
                    <h2 className="text-black mb-4 theme-color-light">Upcoming Project</h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6 text-center">
                    <Image
                      alt="Project"
                      src="/images/Upcoming Project.jpg"
                      width={500}
                      height={700}
                    />
                  </div>
                  <div
                    className="col-md-5"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                  >
                    <div>
                      <div className="title text-left">
                        <h4 className="text-black mb-2 fs-4 m-center theme-color-light" style={{ fontSize: "24px" }}>
                          Ultra Premium Plotted Development
                        </h4>
                        <p className="">
                          <span className="theme-color-light">
                            <i className="fa fa-map-marker mx-1" aria-hidden="true" />
                            Kaggalipura, Off Kanakapura Road
                          </span>
                        </p>
                      </div>
                      <div className="noclass">
                        <p className="text-justify m-center lh text-black mt-3 theme-color-light">
                          The project is nestled just off Kanakapura Road, thoughtfully designed to offer a blend of serene living and modern infrastructure.
                        </p>
                      </div>
                      <div className="row align-items-start mb-3 mt-4 mob-center">
                        <div className="col-12 text-black">
                          <h5 className="mb-3 theme-color-light">Key Highlights of the Project:</h5>
                          <ul className="text-black ps-3 theme-color-light">
                            <li>Plot sizes ranging from 1500 – 3300 sq ft.</li>
                            <li>7,000 sq.ft. clubhouse with gym, pool, yoga room, café & library</li>
                            <li>Indoor and outdoor party zones</li>
                            <li>Ganesha temple, amphitheatre, elders’ park, children’s play area</li>
                            <li>Cricket pitch & pickleball court</li>
                            <li>Underground electrical cabling & LED streetlights</li>
                            <li>Rainwater harvesting & sewage treatment plant</li>
                            <li>Avenue plantation & landscaped green zones</li>
                          </ul>
                        </div>
                      </div>
                      <p className="m-center py-md-0 py-3">
                        <a
                          href="/microsite"
                          className="btn btn-dark text-white border green-bg"
                          style={{ fontSize: "15px" }}
                        >
                          More Details
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: 360 Lifestyle Cards */}
          <section className="lifestyle-section  ">
            <div className="container">
              <h2 className="theme-color-dark">Ethos of EARA Group</h2>
              {/* <div className="lifestyle-grid">
                <div className="flip-card rounded-tl">
                  <div className="flip-inner">
                    <div className="flip-front">
                      <img
                        src="/images/Ethos-Sustainablity.jpg"
                        alt="Entry"
                        width={600}
                        height={250}
                      />
                    </div>
                    <div className="flip-back">
                      <div className="overlay-text">Sutainablity</div>
                      <p className="mt-5 w-75">Creating future-ready communities that respect the land and restore balance with nature.</p>
                    </div>
                  </div>
                </div>
                <div className="flip-card rounded-tr">
                  <div className="flip-inner">
                    <div className="flip-front">
                      <img
                        src="/images/Ethos-Innovation.jpg"
                        alt="Entry"
                        width={600}
                        height={250}
                      />
                    </div>
                    <div className="flip-back">
                      <div className="overlay-text">Innovation</div>
                      <p className="mt-5 w-75">Blending thoughtful design with cutting-edge planning to build smarter, greener spaces.</p>
                    </div>
                  </div>
                </div>
                <div className="flip-card rounded-bl">
                  <div className="flip-inner">
                    <div className="flip-front">
                      <img
                        src="/images/Ethos-Intergrity.jpg"
                        alt="Entry"
                        width={600}
                        height={250}
                      />
                    </div>
                    <div className="flip-back">
                      <div className="overlay-text">Intergrity</div>
                      <p className="mt-5 w-75">Rooted in transparency and trust — every decision guided by what’s right and reliable.</p>
                    </div>
                  </div>
                </div>
                <div className="flip-card rounded-br">
                  <div className="flip-inner">
                    <div className="flip-front">
                      <img
                        src="/images/Ethos-Quality.jpg"
                        alt="Entry"
                        width={600}
                        height={250}
                      />
                    </div>
                    <div className="flip-back">
                      <div className="overlay-text">Quality</div>
                      <p className="mt-5 w-75">Delivering excellence in every detail, from foundation to finish.</p>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="row">
                <div className="col-md-5 offset-md-1 mx-auto p-0 d-flex justify-content-start mb-4 mb-3 ">
                  <div className=" row  shadow  ">
                    <div className="col-md-6">
                      <img src="/images/go-green-icon.png" alt="Sustainability" className=" img-fluid p-5" />
                    </div>
                    <div className=" col-md-6 px-3 d-flex flex-column justify-content-center">
                      <div>
                        <h5 className="theme-color-dark text-start fw-bold">Sustainability</h5>
                        <p className="theme-color-dark text-start small">Creating future-ready communities that respect the land and restore balance with nature.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="col-md-5 offset-md-1 mx-auto p-0 d-flex justify-content-start mb-4 mb-3 ">
                  <div className=" row  shadow  ">
                    <div className="col-md-6">
                      <img src="/images/go-green-icon.png" alt="Sustainability" className=" img-fluid p-5" />
                    </div>
                    <div className=" col-md-6 px-3 d-flex flex-column justify-content-center">
                      <div>
                        <h5 className="theme-color-dark text-start fw-bold">Innovation</h5>
                        <p className="theme-color-dark text-start small">Blending thoughtful design with cutting-edge planning to build smarter, greener spaces.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

              <div className="row">
                <div className="col-md-5 offset-md-1 mx-auto p-0 d-flex justify-content-start mb-4 mb-3 ">
                  <div className=" row  shadow  ">
                    <div className="col-md-6">
                      <img src="/images/go-green-icon.png" alt="Sustainability" className=" img-fluid p-5" />
                    </div>
                    <div className=" col-md-6 px-3 d-flex flex-column justify-content-center">
                      <div>
                        <h5 className="theme-color-dark text-start fw-bold">Intergrity</h5>
                        <p className="theme-color-dark text-start small">Rooted in transparency and trust — every decision guided by what’s right and reliable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="col-md-5 offset-md-1 mx-auto p-0 d-flex justify-content-start mb-4 mb-3 ">
                  <div className=" row  shadow  ">
                    <div className="col-md-6">
                      <img src="/images/go-green-icon.png" alt="Sustainability" className=" img-fluid p-5" />
                    </div>
                    <div className=" col-md-6 px-3 d-flex flex-column justify-content-center">
                      <div>
                        <h5 className="theme-color-dark text-start fw-bold">Quality</h5>
                        <p className="theme-color-dark text-start small">Delivering excellence in every detail, from foundation to finish.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

            </div>
          </section>
          <TestimonialSlider />
          {/* Section 4: Blog Section */}
          <section className="px-md-5 px-3  theme-bg-dark">
            <h2 className="text-center theme-color-light">LATEST BLOGS</h2>
            <div className="blog-grid ">
              <div className="blog-card theme-bg-light">
                <img src="/images/Blog_1.jpg" alt="Blog 1" />
                <div className="content">
                  <h4 className="theme-color-dark">The Future of Smart Living</h4>
                  <p className="theme-color-dark">
                    Discover how smart technologies are redefining luxury in
                    modern homes.
                  </p>
                </div>
              </div>
              <div className="blog-card  theme-bg-light">
                <img src="/images/Blog_2.jpg" alt="Blog 2" />
                <div className="content">
                  <h4 className="theme-color-dark">Eco-Conscious Architecture</h4>
                  <p className="theme-color-dark">
                    Explore architectural trends that prioritize sustainability
                    and efficiency.
                  </p>
                </div>
              </div>
              <div className="blog-card  theme-bg-light">
                <img src="/images/Blog_3.jpg" alt="Blog 3" />
                <div className="content">
                  <h4 className="theme-color-dark">Why Choose Integrated Townships?</h4>
                  <p className="theme-color-dark">
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
