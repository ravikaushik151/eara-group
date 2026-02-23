import Image from "next/image";
import Link from "next/link";
import "./../about.css";
import TestimonialSlider from "../components/Home/TestimonialSliderAbout";
export const metadata = {
  title: 'Premium Residential Plots in Kanakapura Main Road - Eara Group',
  description: 'Discover Premium Villa Plots in Kanakapura Main Road by Eara Group. Invest in spacious, well-planned plots with excellent connectivity and modern amenities.',
  keywords: 'BMRDA Residential Plot in Kanakapura Main Road, Premium Villa Plots in Kanakapura Main Road, Premium Residential Plots in Kanakapura Main Road, Plots for Sale in Kanakapura Main Road',
  alternates: {
    canonical: 'https://earagroup.com/about/',
  },
};
export default function About() {

  return (
    <>
      <div id="carouselExampleDark" className="header-section ">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/Abouts us_EARA.webp"
                height={2880}
                width={1920}
                className="img-fluid masterpiece"
                alt="masterpiece"
                style={{ objectPosition: "bottom" }}
              />
              <div className="overlay2 ">
                <div className="text-white d-block text-brown">
                  {" "}
                  <h1 className="text-center d-block fs-1 mb-3 text-uppercase">
                    {" "}
                    About us
                  </h1>
                  <p className="text-center d-block fs-6 ">
                    <Link
                      className="text-white text-decoration-none text-brown"
                      href="/"
                    >
                      {" "}
                      Home
                    </Link>{" "}
                    / About Us{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* <div id="carouselExampleDark" className="header-section position-relative">
        <div className="row">
          <div className="col-md-12">
            <div className="video-container position-relative">
              <video
                className="w-100 h-100 object-fit-cover d-md-block d-none"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                // poster="/images/About_new copy_Eara.avif"
                style={{
                  objectFit: "cover",
                  height: "100% !important",
                  width: "100%",
                }}
              >
                <source src="/images/Aboutus.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video
                className="w-100 h-100 object-fit-cover d-md-none"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                // poster="/images/About_new copy_Eara.avif"
                style={{
                  objectFit: "cover",
                  height: "auto !important",
                  width: "100%",
                }}
              >
                <source src="/images/abou-mobile.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="overlay2 position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-brown">
                <h1 className="text-center fs-1 mb-3 text-uppercase">About Us</h1>

              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="theme-bg-light section pb-0" id="TOP">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className=" text-center ">
                <h2
                  data-animate={2}
                  className="heading-style-h2 mb-1 text-center theme-color-dark"
                >
                  Welcome to <strong >Eara Group</strong>, where vision meets
                  reality.
                </h2>
                <p className="theme-color-dark text-size-regular theme-color-dark fs-5 mb-0 w-75 d-block mx-auto text-center">Join us on our journey as we continue to shape the landscapes of tomorrow and create spaces where dreams thrive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 aboutabout theme-bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-6 pt-4 py-5 d-flex align-items-center">
              <div>
                <h2 className="mb-2 theme-color-dark fs-2 text-center">About Us</h2>
                <p className="mb-2 theme-color-dark">
                  At EARA Group, we believe real estate is more than land and infrastructure - it&rsquo;s about building communities that thrive. Our vision is to create premium, future-ready neighborhoods where modern lifestyles are nurtured within a framework of environmental responsibility.

                </p>
                <p className="mb-2 theme-color-dark">With 20+ years of expertise, our approach combines sustainability, design excellence, and innovation to craft plotted developments and gated layouts that feel less like projects and more like living ecosystems. Every square foot is planned to foster connection - with nature, with neighbors, and with a larger sense of belonging.
                </p>
                <p className="mb-5 theme-color-dark">For us, a home is not just an investment, but a foundation for community, well-being, and shared growth. At EARA Group, we&rsquo;re committed to shaping environments that inspire conscious living while ensuring comfort, convenience, and long-term value.</p>
              </div>
            </div>
          </div>

        </div>
        <Image
          alt="Luxury interior"
          width={648}
          height={338}
          className="img-fluid  m-0 d-md-none"
          src="/images/about-mobile-banner.png"
          style={{ objectFit: "cover", objectPosition: "center", minHeight: "350px", marginTop: "-20% !important" }}
        />
      </section>


      <section id="" className="section_amenities-hero theme-bg-dark page-about-mv section">
        <div className="padding-global">
          <div className="container-large">


            {/* Mission & Vision Section */}
            <div className="noclass" >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className=" text-center ">
                      <h2 className="mb-1 theme-color-light">Our Mission &amp; Vision</h2>
                      <p className="theme-color-light fs-5 mx-auto d-block text-center">What drives us forward and what we aim to achieve</p>
                    </div>
                  </div>
                </div>

                <div className="row my-3 ">
                  <div className="col-md-5 d-block mx-auto  px-md-5 py-md-5 py-4 bg-white mb-3 theme-bg-light" >
                    <div className="text-center">
                      <h3 className="fw-bold theme-color-dark">Our Mission</h3>
                      <p className="theme-color-dark">
                        At EARA Group, we are dedicated to crafting serene, sustainable living environments that harmonize with nature. Our commitment to innovation, integrity, and quality shapes spaces that foster well-being, a sense of belonging, and quiet sophistication. Through thoughtful design and eco-conscious practices, we aim to create not just homes, but havens where communities thrive in harmony with the land.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 d-block mx-auto  px-md-5 py-md-5 py-4 bg-white mb-3 theme-bg-light" >
                    <div className="text-center">
                      <h3 className="fw-bold theme-color-dark">Our Vision</h3>
                      <p className="theme-color-dark">
                        To create timeless living environments where elegance and sustainability coexist - nurturing life, honoring the land, and empowering communities to thrive in quiet harmony with nature.<br />
                        Guided by innovation, built with integrity, and defined by quality, every space we craft reflects our unwavering commitment to a more sustainable tomorrow.
                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="player-section py-5 text-white bg-black" style={{
        backgroundImage: `
         linear-gradient(to bottom,
             rgba(23, 23, 23, 0.65),
             rgba(23, 23, 23, 0.65)
        ),
         url('/images/Ethos-Innovation.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }} >
        <div className="container text-center mb-5">
          <h2 className="fw-bold">
            LEADERSHIP <span className="text-danger"></span>
          </h2>

        </div>
        <div className="container position-relative">
          <div className="row justify-content-center">

            <div className="col-1 d-flex align-items-center justify-content-center">

            </div>

            <div className="col-lg-10 d-flex shadow player-card p-0">

              <div className="col-lg-6 p-0 d-none">
                <img src="https://placehold.co/400x450" className="img-fluid w-100 h-100 object-fit-cover" />
              </div>
              {/* RIGHT INFO */}
              <div className="col-lg-12 theme-bg-dark p-4 position-relative d-flex align-items-center">

                <div>



                  <h5 className="fw-bold  mb-0 fs-3 text-center text-black">Mr. L. N Reddy</h5>
                  <h6 className="text-black text-muted small text-center"> (Founder & CEO)</h6>

                  <p className="text-black small">
                    <strong> Mr. L. N Reddy</strong>, Founder & CEO of EARA Group, brings more than 16 years of hands-on experience in the real-estate sector. Over the years, he has worked across product conceptualization, the acquisition of strategically located land parcels, and regulatory liaison - always with a clear focus on creating safe, high-quality, and value-driven developments that genuinely serve the evolving needs of homebuyers and investors.

                  </p>
                  <p className="text-black small">His approach to leadership is rooted in clarity, integrity, and a strong sense of responsibility. Under his guidance, EARA Group continues to grow on the foundation of transparency, timely delivery, and ethical business practices. With a dedicated team of seasoned professionals and young, passionate talent, the company strives to craft real-estate solutions that not only meet expectations but meaningfully exceed them - building trust, nurturing long-term relationships, and ensuring a rewarding experience for every customer.</p>

                </div>

              </div>
            </div>
            {/* ARROW RIGHT */}
            <div className="col-1 d-flex align-items-center justify-content-center">

            </div>
          </div>
        </div>
      </section >






      <TestimonialSlider
        sectionClass="px-md-5 px-3 bg-light theme-bg-light testimonials"
        headingClass="text-center mb-4 fw-bold theme-color-dark"
        cardClass="info-box p-4 bg-white theme-bg-dark shadow-sm h-100 rounded d-flex flex-column justify-content-between mb-4"
        textClass="theme-color-light "
        nameClass="text-center fw-bold theme-color-light fw-bold mt-auto"
      />


    </>
  );
}
