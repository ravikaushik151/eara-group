import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "../components/Home/TestimonialSlider";
export default function About() {
  return (
    <>
      <div id="carouselExampleDark" className="header-section ">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/Earan.jpeg.jpg"
                height={2880}
                width={1920}
                className="img-fluid masterpiece"
                alt="masterpiece"
              />
              <div className="overlay2 ">
                <div className="text-white d-block">
                  {" "}
                  <p className="text-center d-block fs-1 mb-3 text-uppercase">
                    {" "}
                    About us
                  </p>
                  <p className="text-center d-block fs-6 ">
                    <Link
                      className="text-white text-decoration-none"
                      href={"./"}
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

      <section id="TOP" className="section_amenities-hero theme-bg-light page-about section" >
        <div className="padding-global">
          <div className="container-large">
            <div className="amenities-hero_components">
              <div className="amenities-hero_content-wrapper">
                <div className="amenities-hero_heading-wrapper">
                  <div className="text-color-dark-rainforest">
                    <h2
                      data-animate={2}
                      className="heading-style-h2 text-center theme-color-dark"
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
            <section className="section-1 ">
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



      <TestimonialSlider />


    </>
  );
}
