// "use client";
// import { useEffect } from "react";
//import './style.css';
import "./../microsite.css";
import Link from "next/link";
export const metadata = {
  title: 'Eara Group Amidst Nature BMRDA Villa Plots in Kanakapura Road',
  description: 'Explore luxury BMRDA approved villa plots at Amidst Nature by Eara Group in Kanakapura Road. Enjoy lush greenery, modern amenities with Connectivity.',
  keywords: 'Amidst Nature Kanakapura Road,  Amidst Nature Price,  BMRDA Approved Sites in Kanakapura Road,  BMRDA Plots For Sale in Kanakapura Road,  BMRDA Residential Plot in Kanakapura Road',
  alternates: {
    canonical: 'https://earagroup.com/amidstnature/',
  },
};
import Image from "next/image";
import AmenitiesMarquee from "../components/AmenitiesMarquee";
import FooterModalForm from "../components/FooterModalForm";
import ContactFormPopup from "../components/ContactFormPopup";
import MicroHomeHeroSlider from "../components/Microsite/MicroHomeHeroSlider";
import Clubhouse from "../components/ClubhouseMarquee";
import MasterPlanSection from "../components/Microsite/MasterPlanSection";
import MyAccordion from "../components/MyAccordion";
import Gallery from "../components/Gallery";
import Construction from "../components/Construction";

export default function Home() {
  const faqItems = [
    {
      id: 1, title: 'SCHOOLS & COLLEGES', content: `  <ul dir="ltr">
    <li>Delhi Public School (DPS) south 20 mins</li>
    <li>The Valley School (Krishnamurti Foundation) 14 mins</li>
    <li>Sri Kumaran Public School 10 mins&nbsp;</li>
    <li>Dayananda Sagar Business Academy 06 mins</li>
    <li>Jain University (Global Campus) 48 mins</li>
    <li>Dayananda Sagar Medical College 30 mins</li>
    <li>Rashtrotthana School, Kanakapura main road 10 mins</li>
  </ul>
` },
    {
      id: 2, title: 'HOSPITALS', content: `<ul dir="ltr">
    <li>Sri Sri Hospital 12 mins</li>
    <li>Manipal Hospitals Kanakpura road 20 mins</li>
    <li>Aster RV Hospital 26 mins</li>
    <li>BGS Hospital 26 mins</li>
    <li>Apollo Hospitals, Bannerghatta 28 mins</li>
  </ul>` },
    {
      id: 3, title: 'LEISURE & HOTSPOTS', content: `<ul dir="ltr">
    <li>Art of Living International Centre 07 mins</li>
    <li>Turahalli Forest Cycling Trails 15 mins</li>

    <li>Cuhantra 12 mins</li>
    <li>Metro Station (upcoming) 5 mins</li>
    <li>Forum Mall South 18 mins</li>
    <li>Birds of Paradise 14 mins</li>
  </ul>
  ` },
    {
      id: 4, title: 'WORKPLACE AND CONNECTIVITY ', content: `<ul dir="ltr">
        <li>Whitefield: 45 minutes</li>
        <li>Electronic City: 30 minutes</li>
        <li> Harohalli Industrial Area: 20 minutes</li>
  
      </ul>
    ` },
    {
      id: 5, title: 'SUPERIOR CONNECTIVITY', content: `<ul dir="ltr">
          <li>Project is 200 meters from Proposed PRR 2.</li>
          <li>10 minutes from Nice Road Junction.</li>
         
      </ul>
    ` },
  ];
  /*
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
  */

  return (
    <>
      <main className="main-wrapper">

        <div className="overflow-clip" id="main-slider">

          <div id="carouselExampleDark" className="header-section position-relative ">
            <div className="row">
              <div className="col-md-12">
                <div className="video-container position-relative " style={{ lineHeight: "0 !important" }}>

                  <video
                    className="w-100 h-100 object-fit-cover d-md-block d-none"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"

                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <source src="/images/Project.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <video
                    className="w-100 h-100 object-fit-cover d-md-none"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"

                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <source src="/images/Project-mobile.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-0"></div>

                  {/* ✅ Centered Text using Bootstrap 5.3 */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-3 ">
                    <div className="micrositeslidertext">
                      <h1 className="display-4 fw-bold  mb-0 ">
                        Luxury villa plots in Kaggalipura
                      </h1>
                      <p className="lead mb-0 text-center">Crafted for serene living and timeless value.</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <MicroHomeHeroSlider /> */}
        </div>
        <div id="scroll-more">
          <section
            className="project-info-section theme-bg-dark section-small mobileoverview"

          >
            <div className="container">
              <div className="row text-center text-white">
                <div className="col-6 col-md-3 border-end border-light">
                  <h6 className="fw-bold text-uppercase fs-5 mb-3 theme-color-light">Project Size</h6>
                  <span className="mb-0 fs-2 fw-light theme-color-light">18+  Acres</span>
                </div>
                <div className="col-6 col-md-3 border-end border-light">
                  <h4 className="fw-bold text-uppercase fs-5 mb-3 theme-color-light">Approved By</h4>
                  <span className="mb-0 fs-2 fw-light theme-color-light">BMRDA</span>
                </div>
                <div className="col-6 col-md-3 border-end border-light mt-4 mt-md-0">
                  <h4 className="fw-bold text-uppercase fs-5 mb-3  theme-color-light">
                    Possession
                  </h4>
                  <span className="mb-0 fs-2 fw-light theme-color-light">18 Months</span>
                </div>
                <div className="col-6 col-md-3 mt-4 mt-md-0">
                  <h4 className="fw-bold text-uppercase fs-5 mb-3 theme-color-light">
                    Plot Sizes
                  </h4>
                  <span className="mb-0 fs-2 fw-light theme-color-light">1500 - 3300 sq.ft.</span>
                </div>
              </div>
            </div>
          </section>




          <section className="section theme-bg-light page-project-amidst" id="about" >
            <div className="container">
              <div className="row  px-md-5">
                <div className="col-md-6 d-flex align-items-center" >
                  <div className=" ">
                    <h2 className="mb-0 theme-color-dark text-center">Amidst Nature</h2>
                    <span className="fs-5 theme-color-dark text-center d-block">Where <span className="text-success">Green</span> is the New <span className="text-gold">Gold</span></span>
                    <p className="mt-4  theme-color-dark">
                      <strong>Every plot at &ldquo;Amidst Nature&rdquo; is a promise of green mornings, golden silence, and grounded luxury.</strong></p>
                    <p className=" theme-color-dark"><strong></strong>Spread across 18+ lush green acres in Kaggalipura, just Off Kanakapura Main Road, this ultra-luxury plotted development invites you to design your forever home in a place where the city fades and nature speaks. This BMRDA Approved Sites in Kanakapura Road is thoughtfully designed and well executed, blending nature&rsquo;s calm with modern comfort.

                    </p>
                    <div className="text-center  my-4">
                      <ContactFormPopup
                        buttonText="Download Brochure"
                        buttonClassName="theme-bg-dark theme-color-light px-3 py-2 text-decoration-none rounded-2 "
                        redirectUrl="/download-page"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="px-md-5">
                    <Image
                      alt="Project"
                      src="/images/Amidstnature_project-pg.avif"
                      width={5500}
                      height={750}
                      className="img-fluid  mb-3  rounded-4"
                      priority
                      fetchPriority="high" style={{ maxHeight: "50vh", objectFit: "cover", objectPosition: "bottom center" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="py-5 theme-bg-dark d-none" >
            <div className="padding-global">
              <div className="container-large">
                <div className="home-stats_components">
                  <div className="home-stats_content-wrapper">
                    <div className="home-stats_text-wrapper">
                      <div className="text-color-grey">
                        <div className="text-size-medium theme-color-light fs-5">
                          Enter and see a sprawling canvas of green within the
                          city
                        </div>
                      </div>
                    </div>
                    <div className="home-stats_items highlights">
                      <div
                        id="w-node-cdea1d55-fe63-8f1c-3822-d0c3250461c3-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 theme-color-light">Acres</h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular theme-color-light">15 acres</div>
                        </div>
                      </div>
                      <div
                        id="w-node-f6750213-c322-5874-8b4c-dd2586408f82-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 theme-color-light">
                            Plot Sizes<span className="heading-style-h5"></span>
                          </h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular theme-color-light">
                            1500 – 3300 Sqft
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_1989e816-fb39-3880-661b-bed1357559b4-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 theme-color-light">Approved </h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular theme-color-light">
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
          <section className="same-gap mysection visible theme-bg-dark " >
            <div className="container-fluid">
              <div className="row p-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="p-3">
                    <div className="row">
                      <div className="col-md-12">
                        <div><div className="title text-center">
                          <h2 className="mb-3 theme-color-light">Project Unique Selling Points (USPs)</h2>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 d-flex justify-content-center align-items-center">
                  <div className="p-3">
                    <div className="row">
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Accessibility.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Accessibility
                            </h4>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Comfort.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Comfort 
                            </h4>
                            
                          </div>
                        </div>
                      </div>
                       <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Community.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Community
                            </h4>
                            
                          </div>
                        </div>
                      </div>
                       <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Freedom.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Freedom
                            </h4>
                            
                          </div>
                        </div>
                      </div>
                       <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Legacy.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Legacy
                            </h4>
                            
                          </div>
                        </div>
                      </div>
                       <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Open space.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Open space
                            </h4>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Safety.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Safety
                            </h4>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Security.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Security
                            </h4>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Serenity.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Serenity
                            </h4>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Smart living.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Smart living
                            </h4>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Tranquility.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Tranquility
                            </h4>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Wellness.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Wellness
                            </h4>
                            
                          </div>
                        </div>
                      </div>
                      



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: 360 Lifestyle Cards */}
          <section className="section_biodiversity-benefits py-5  theme-bg-light" id="amenities"  >
            <div className="padding-global" >
              <div className="container-large" >
                <div className="biodiversity-benefits_components">
                  <div
                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                    className=""
                  >
                    <h2 data-animate={1} className="m-center text-center  theme-color-dark">
                      Amenities
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <AmenitiesMarquee />

          </section>


          {/* Section 2: 360 Lifestyle Cards */}
          <section className="section_biodiversity-benefits py-5 theme-bg-dark section-small" id="amenities">
            <div className="padding-global">
              <div className="container-large">
                <div className="biodiversity-benefits_components">
                  <div
                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                    className=""
                  >
                    <h2 data-animate={1} className=" theme-color-light text-center">
                      Club House
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <Clubhouse />
          </section>


          <MasterPlanSection />
          <Gallery />
          <Construction />

          <section className="section_home-connectivity theme-bg-dark page-about-mv" id="location">
            <div className="padding-global">
              <div className="container-large">
                <div className="home-connectivity_content">
                  <div className="home-connectivity_heading-wrapper text-center">
                    <h2
                      data-animate={1}
                      className="heading-style-h2 text-color-offwhite theme-color-light m-center"
                    >
                      Location
                    </h2>
                  </div>
                </div>
                <div className="home-connectivity_components">
                  <div className="home-connectivity_image-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7781.187708608875!2d77.51706043914793!3d12.804854316360881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4169b07f2a7b%3A0xe6d9ff13f19a5517!2sAmidst%20Nature!5e0!3m2!1sen!2sin!4v1759994801277!5m2!1sen!2sin" width="100%" height="680" loading="lazy"></iframe>
                  </div>
                  <div
                    id="w-node-ae28a13d-3673-7d72-6c93-35ac2b8ff216-ac1b3e9a"
                    className="home-connectivity_content-wrapper  position-relative"
                  >
                    <div className="home-connectivity_content">
                      <div className="home-connectivity_heading-wrapper">
                        <h3
                          data-animate={1}
                          className="fs-2 text-color-offwhite theme-color-light m-center mb-3"
                        >
                          Located in{" "}
                          <span className="text-white">
                            Kaggalipura,
                          </span>{" "}
                          Off Kanakapura Main  Road, Bengaluru.
                        </h3>
                      </div>
                      <div className="w-100">
                        <div className="text-size-regular text-color-offwhite theme-color-light m-center lh">
                          <p className="text-start m-center">
                            Surrounded by serene greenery and nestled along the city&rsquo;s fast-developing Kanakapura stretch, Amidst Nature is among the most sought-after premium villa plots in Kanakapura Road.
                          </p>
                          <p className="text-start  m-center">
                            For those seeking villa plots in Kaggalipura, this address offers unmatched tranquility and long-term value -  perfectly placed for families and investors alike.
                          </p>

                          <br />


                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-10">
                        <MyAccordion items={faqItems} />
                      </div>

                    </div>
                    {/* <div className="home-connectivity_distance-wrapper">
                      <div className="home-connectivity_distance m-center">
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large theme-color-light m-center">
                              • Art of Living International Center
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular theme-color-light m-center">&nbsp;&nbsp;&nbsp;7 mins</div>
                          </div>
                        </div>
                      </div>

                      <div className="home-connectivity_distance m-center">
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large theme-color-light m-center">
                              • Vajarahalli Metro Station
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular theme-color-light m-center">&nbsp;&nbsp;&nbsp;15 mins</div>
                          </div>
                        </div>
                      </div>

                      <div className="home-connectivity_distance m-center">
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large theme-color-light m-center">
                              • NICE Road Junction
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular theme-color-light m-center">&nbsp;&nbsp;&nbsp;10 mins</div>
                          </div>
                        </div>
                      </div>

                      <div className="home-connectivity_distance m-center">
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large theme-color-light m-center">
                              • Kumarans School
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular theme-color-light m-center">&nbsp;&nbsp;&nbsp;10–15 mins</div>
                          </div>
                        </div>
                      </div>

                      <div className="home-connectivity_distance m-center">
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large theme-color-light m-center">
                              • Metro Cash & Carry
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular theme-color-light m-center">&nbsp;&nbsp;&nbsp;20–25 mins</div>
                          </div>
                        </div>
                      </div>

                      <div className="home-connectivity_distance m-center">
                        <div className="home-connectivity_distance-text">
                          <div className="text-color-offwhite">
                            <div className="text-size-large theme-color-light m-center">
                              • Global Village Tech Park
                            </div>
                          </div>
                          <div className="text-color-silvermist">
                            <div className="text-size-regular theme-color-light m-center">&nbsp;&nbsp;&nbsp;20–25 mins</div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <Image
                      width={800}
                      height={200}
                      src="/images/page-6.png"
                      loading="lazy"
                      alt=""
                      className="home-masterplan_img img-fluid bg-transparent mt-3 rounded-3"
                      style={{ top: "220px", maxHeight: "270px", objectFit: "cover", objectPosition: "bottom bottom", position: "absolute", opacity: ".6" }}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section_home-masterplan theme-bg-light lifestyle-section py-5" id="master-plan">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 d-block mx-auto">
                  <div className="row">
                    <div className="col-md-12 mb-5">
                      <div className="text-center">
                        <h2 className="text-color-dark-rainforest theme-color-dark mb-md-4 mb-4 m-center text-center">
                          About the Developer
                        </h2>
                        {/* Masterplan Image with Clickable Popup */}
                        <div

                        >
                          <Image
                            src="/images/logo-dark.webp"
                            alt="logo"
                            width={150}
                            height={66}
                            className="logo theme-logo mb-3 d-block mx-auto"
                          />

                          <p className="theme-color-dark text-center">We don&#39;t chase trends - we grow value.<br />
                            With every project, we honour land and its legacy.<br />
                            We build for those who think deeper.</p>

                          <p className="theme-color-dark text-center">At EARA Group, we&#39;re redefining the future of real estate with a strong vision to build premium communities that balance modern living with environmental responsibility. Backed by 20 years of industry experience, our foundation is rooted in sustainability and driven by innovation.
                            <br />
                            We specialize in plotted developments and gated layouts that integrate seamlessly with nature - perfect for those looking for luxury villa plots in Kaggalipura or peaceful plots near Kanakapura Road. Every square foot is planned with precision, combining modern infrastructure, long-term value, and green living at its core.</p>

                        </div>
                      </div>
                    </div>

                    {/* Hidden Columns (optional) */}

                  </div>
                </div>
              </div>
            </div>



          </section>

          <FooterModalForm autoShowTime={45000} />
        </div >
      </main >

    </>
  );
}
