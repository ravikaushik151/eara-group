//"use client";
//import { useEffect } from "react";
import "./homepage.css";
import Link from "next/link";
import Preloader from "./components/Preloader";
// import HomeHeroSlider from "./components/Home/HeroSlider";

import Image from "next/image";
import TestimonialSlider from "./components/Home/TestimonialSlider";
import LatestBlogs from "./components/LatestBlogs";
import CoreValuesSlider from "./components/CoreValuesSlider";
export const metadata = {
  title: 'Eara Group - Luxury Villa Plots for Sale in Kanakapura Road.',
  description: 'Discover Eara Group&rsquo;s luxury villa plots for sale in Kanakapura Main Road. Build your dream home amidst nature with premium amenities and great connectivity.',
  keywords: 'Eara Group, Luxury villa plots for sale in Kanakapura Main Road, Plots for Sale in Kanakapura Main Road, Villa plots sale near Kanakapura Main Road, Premium villa plots for sale in Kaggalipura',
  alternates: {
    canonical: 'https://earagroup.com/',
  },
};

export default function Home() {
 

  return (
    <>
      <main className="main-wrapper">
       
        <div className="overflow-clip" id="main-slider">
          <div id="carouselExampleDark" className="header-section position-relative">
            <div className="row">
              <div className="col-md-12">
                <div className="video-container position-relative " style={{ lineHeight: "0 !important" }}>
                  {/* ✅ Background video */}
                
                  <video
                    className="w-100 h-100 object-fit-cover d-none d-md-block"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/images/hero-image-edit-4-new.avif" // fallback image before video loads
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <source src="/images/home-video.mp4" style={{
                      objectFit: "cover",
                      height: "100vh",
                      width: "100%",
                    }} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <video
                    className="w-100 h-100 object-fit-cover d-md-none"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/images/mobile-img.avif" // fallback image before video loads
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <source src="/images/mobileHomePage.mp4" style={{
                      objectFit: "cover",
                      height: "100vh",
                      width: "100%",
                    }} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
          {/* <MicroHomeHeroSlider /> */}
        </div>
        <div id="scroll-more">
          <section className="section-1 px-md-5 px-3 theme-bg-light homehome"  >
            <div className="container">
              <div className="row">
                <div className="col-md-5 offset-md-6 py-lg-5">
                  <h2 className="mb-0 theme-color-dark">Green Thinking. Luxurious Living.</h2>
                  <span className="fs-4 theme-color-dark">Because true luxury is not loud. It&rsquo;s peaceful.</span>
                  <p className="mt-3 theme-color-dark">
                    At EARA Group, we&rsquo;re redefining the future of real estate with a strong vision to build premium communities that balance modern living with environmental responsibility.</p>
                  <p>
                    Backed by 20+ years of industry experience, our foundation is rooted in sustainability and driven by innovation. We specialise in developing real estate projects designed to integrate seamlessly with nature. Every square foot is planned with precision, combining modern infrastructure, long-term value, and green living at its core.
                  </p>
                  <div className="text-start m-center">
                    <Link
                      href="/about"
                      className="btn theme-bg-dark text-white border mt-1"
                    > Explore More
                    </Link>
                  </div>

                </div>
                <div className="col-md-6 d-md-none ">
                  <div className="" style={{ minHeight: "100px" }}>
                    <p></p>
                  </div>

                </div>

              </div>


            </div>

          </section>

         

          <section className="same-gap position-relative bg-light theme-bg-dark up-coming" style={{
            backgroundImage: "url('/images/Flower_Cream.avif')",
            backgroundSize: "15% 35%",   // ✅ width 100%, height 80%
            backgroundPosition: "right 99%", // ✅ right aligned, center vertically
            color: "#fff",
            backgroundRepeat: "no-repeat",   // ✅ fixed
          }}>
            <div className="container">
              <div id="upcoming-project" className="noclass" data-bs-ride="carousel">
                <div className="row">
                  <div className="title text-center mb-3">
                    <h2 className="text-black mb-4 theme-color-light">Upcoming Project</h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6 px-md-0 text-center">
                    <Image
                      alt="Project"
                      src="/images/upcoming-projects.avif"
                      width={500}
                      height={750}
                      className="img-fluid p-0 mb-3 w-100"
                      priority
                      fetchPriority="high" style={{ objectFit: "cover", objectPosition: "bottom center" }}
                    />
                  </div>
                  <div
                    className="col-md-6 px-md-5 px-3 d-flex align-items-center"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                  >
                    <div>
                      <div className="title text-left ">
                        <h4 className="text-black mb-2 fs-4 theme-color-light fw-bold m-center">
                          Ultra Luxury Plotted Development
                        </h4>
                        <p className="m-center">
                          <span className="theme-color-light  m-center">

                            <svg style={{ width: "20px", height: "20px" }} className="w-8 h-8 theme-color-light m-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" /></svg>
                            Kaggalipura, Off Kanakapura Main  Road
                          </span>
                        </p>
                      </div>
                      <div className="noclass">
                        <p className="text-justify m-center lh-md text-black mt-3 theme-color-light ">
                          The project is nestled just Off Kanakapura Main  Road, <br /> thoughtfully designed to offer a blend of serene living and modern infrastructure.
                        </p>
                      </div>
                      <div className="row align-items-start mb-3 mt-4 mob-center">
                        <div className="col-12 text-black">
                          <h5 className="mb-3 theme-color-light fs-4  m-center">Key Highlights of the Project:</h5>
                          <ul className="text-black ps-3 theme-color-light  ps-md-3 ps-5 px-md-0 px-4 homeHighlights">
                            <li className="">Plot sizes ranging from 1500 - 3300 sq ft.</li>
                            <li className="">11,000 sqft. clubhouse with gym, pool, yoga room, caf&eacute; & library</li>
                            <li className="">Indoor and outdoor party zones</li>
                            <li className="">Sacred space, amphitheatre, elders&rsquo; park, children&rsquo;s play area</li>
                            <li className="">Cricket pitch & pickleball court</li>
                            <li className="">Underground electrical cabling & LED streetlights</li>
                            <li className="">Rainwater harvesting & sewage treatment plant</li>
                            <li className="">Avenue plantation & landscaped green zones</li>
                          </ul>
                        </div>
                      </div>
                      <p className="m-center py-md-0 py-1">
                        <a
                          href="/amidstnature"
                          className="btn theme-bg-light"
                        >
                          Explore More
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: 360 Lifestyle Cards */}
          <CoreValuesSlider />
          <TestimonialSlider />
          {/* Section 4: Blog Section */}
          <LatestBlogs />
        </div>
      </main>
    </>
  );
}
