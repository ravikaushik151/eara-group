import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      <div id="carouselExampleDark" className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/About-About-us.jpg"
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

      <section id="TOP" className="section_amenities-hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="amenities-hero_components">
              <div className="amenities-hero_content-wrapper">
                <div className="amenities-hero_heading-wrapper">
                  <div className="text-color-dark-rainforest">
                    <h1
                      data-animate={2}
                      className="heading-style-h2 text-center"
                    >
                      Welcome to <strong>Eara Group</strong>, where vision meets
                      reality.
                    </h1>
                  </div>
                </div>
                <div className="amenities-hero_text-head text-center">
                  <div className="text-color-green">
                    <div className="text-size-regular">
                      Join us on our journey as we continue to shape the
                      skylines of tomorrow and create spaces where dreams
                      thrive.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="section-1">
              <div className="content">
                <h2>About Us</h2>
                <p>
                  Eara began with a quiet belief, that the finest things in life aren’t loud. They’re felt in silence, built with care, and remembered because they hold meaning.<br />
                  We are thinkers, makers, and believers in slow design, where intention leads, detail matters, and beauty is uncovered, not added. Our approach is rooted in timeless values: clarity, depth, and respect for the land, the craft, and the lives shaped within.<br />
                  We don’t chase more. We pursue what’s right, with restraint, purpose, and grace. For us, real estate is where philosophy becomes place.  With every development, like Amidst Nature, we create spaces grounded in stillness and emotional connection, not just places to live, but places to truly arrive.<br />
                  Because we’re not just here to build.
                  We’re here to create what deserves to last.

                </p>
              </div>
              <div className="image-wrapper">
                <Image
                  alt="Luxury interior"
                  width={648}
                  height={338}
                  className="img-fluid"
                  src="/images/About-Us-Main.jpg"
                />
              </div>
            </section>
            {/* Mission & Vision Section */}
            <section className="noclass" >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className=" text-center ">
                      <h2 className="mb-3">Our Mission &amp; Vision</h2>
                      <p>What drives us forward and what we aim to achieve</p>
                    </div>
                  </div>
                </div>

                <div className="row my-3 ">
                  <div className="col-md-5 d-block mx-auto  px-md-5 py-md-5 py-4 bg-white mb-3">
                    <div className="text-center">
                      <h3 className="fw-bold">Our Mission</h3>
                      <p>
                        To deliver exceptional living experiences by integrating
                        quality, innovation, and sustainability in every project
                        we undertake.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 d-block mx-auto  px-md-5 py-md-5 py-4 bg-white mb-3">
                    <div className="text-center">
                      <h3 className="fw-bold">Our Vision</h3>
                      <p>
                        To become a leading real estate brand known for
                        transforming lifestyles and shaping communities with
                        trust and integrity.
                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </section>
            <section>
              <h2 className="text-center">TESTIMONIALS</h2>
              <div className="info-cards">
                <div className="info-box">
                  <div className="noclass">
                    <h3>Zero Out</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="info-box">
                  <div className="noclass">
                    <h3>Smart Power</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
                <div className="info-box">
                  <div className="noclass">
                    <h3>Sponge Effect</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
