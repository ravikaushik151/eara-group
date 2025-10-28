import Image from "next/image";
import Link from "next/link";
import "./../about.css";
import TestimonialSlider from "../components/Home/TestimonialSlider";
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
      {/* <div id="carouselExampleDark" className="header-section ">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/About_new copy_Eara.webp"
                height={2880}
                width={1920}
                className="img-fluid masterpiece"
                alt="masterpiece"
                style={{ objectPosition: "top" }}
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
      </div> */}
      <div id="carouselExampleDark" className="header-section position-relative">
  <div className="row">
    <div className="col-md-12">
      <div className="video-container position-relative">
        {/* ✅ Background video */}
        <video
          className="w-100 h-100 object-fit-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/About_new copy_Eara.webp" // fallback image before video loads
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        >
          <source src="/images/ABout-us-Video-Size.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* ✅ Overlay */}
        <div className="overlay2 position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-brown">
          <h1 className="text-center fs-1 mb-3 text-uppercase">About Us</h1>
          <p className="text-center fs-6">
            <Link
              className="text-white text-decoration-none text-brown"
              href="/"
            >
              Home
            </Link>{" "}
            / About Us
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


      <section id="TOP" className="section_amenities-hero theme-bg-light aboutabout  section" >
        <div className="padding-global">
          <div className="container-large">
            <div className="amenities-hero_components">
              <div className="amenities-hero_content-wrapper">
                <div className="amenities-hero_heading-wrapper">
                  <div className="text-color-dark-rainforest">
                    <h2
                      data-animate={2}
                      className="heading-style-h2 mb-2 text-center theme-color-dark"
                    >
                      Welcome to <strong>Eara Group</strong>, where vision meets
                      reality.
                    </h2>
                  </div>
                </div>
                <div className="amenities-hero_text-head text-center">
                  <div className="text-color-green">
                    <div className="text-size-regular theme-color-dark fs-4">
                      Join us on our journey as we continue to shape the
                      skylines of tomorrow and create spaces where dreams
                      thrive.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <section className="section-1 ">
              <div className="content">
                <h2 className="mb-3 theme-color-dark fs-2 text-center">About Us</h2>
                <p className="mb-2 theme-color-dark">
                  At EARA Group, we believe real estate is more than land and infrastructure - it’s about building communities that thrive. Our vision is to create premium, future-ready neighborhoods where modern lifestyles are nurtured within a framework of environmental responsibility.

                </p>
                <p className="mb-2 theme-color-dark">With 20+ years of expertise, our approach combines sustainability, design excellence, and innovation to craft plotted developments and gated layouts that feel less like projects and more like living ecosystems. Every square foot is planned to foster connection - with nature, with neighbors, and with a larger sense of belonging.
                </p>
                <p className="mb-2 theme-color-dark">For us, a home is not just an investment, but a foundation for community, well-being, and shared growth. At EARA Group, we’re committed to shaping environments that inspire conscious living while ensuring comfort, convenience, and long-term value.</p>
              </div>
              <div className="image-wrapper">
                <Image
                  alt="Luxury interior"
                  width={648}
                  height={338}
                  className="img-fluid"
                  src="/images/ABout_Us_Eara.jpg"
                />
              </div>
            </section> */}
            <section className="section-1  ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 offset-md-6">
                    <h2 className="mb-3 theme-color-dark fs-2 text-center">About Us</h2>
                    <p className="mb-2 theme-color-dark">
                      At EARA Group, we believe real estate is more than land and infrastructure - it’s about building communities that thrive. Our vision is to create premium, future-ready neighborhoods where modern lifestyles are nurtured within a framework of environmental responsibility.

                    </p>
                    <p className="mb-2 theme-color-dark">With 20+ years of expertise, our approach combines sustainability, design excellence, and innovation to craft plotted developments and gated layouts that feel less like projects and more like living ecosystems. Every square foot is planned to foster connection - with nature, with neighbors, and with a larger sense of belonging.
                    </p>
                    <p className="mb-2 theme-color-dark">For us, a home is not just an investment, but a foundation for community, well-being, and shared growth. At EARA Group, we’re committed to shaping environments that inspire conscious living while ensuring comfort, convenience, and long-term value.</p>
                  </div>

                </div>

              </div>
              <Image
                alt="Luxury interior"
                width={648}
                height={338}
                className="img-fluid w-100 m-0 d-md-none"
                src="/images/about-about.png"
                style={{ objectFit: "cover", objectPosition: "05% 100%", minHeight: "350px", marginTop: "-33% !important" }}
              />
            </section>
          </div>
        </div>
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
                      <h2 className="mb-3 theme-color-light">Our Mission &amp; Vision</h2>
                      <span className="theme-color-light fs-4 mb-0">What drives us forward and what we aim to achieve</span>
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



      <TestimonialSlider
        sectionClass="px-md-5 px-3 bg-light theme-bg-light testimonials"
        headingClass="text-center mb-4 fw-bold theme-color-dark"
        cardClass="info-box p-4 bg-white theme-bg-dark shadow-sm h-100 rounded d-flex flex-column justify-content-between"
        textClass="theme-color-light mb-3"
        nameClass="text-center fw-bold theme-color-light fw-bold mt-auto"
      />


    </>
  );
}
