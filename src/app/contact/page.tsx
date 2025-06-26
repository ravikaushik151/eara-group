import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div id="carouselExampleDark" className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container position-relative">
              <Image
                src="/img/banner (1).png"
                height={2880}
                width={1920}
                className="img-fluid masterpiece rounded-4"
                alt="masterpiece"
              />
              <div className="overlay2 position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <div className="text-white d-block text-center">
                  <p className="fs-1 mb-3 text-uppercase">Contact Us</p>
                  <p className="fs-6">
                    <Link className="text-white text-decoration-none" href="/">
                      Home
                    </Link>{" "}
                    / Contact Us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container bg-light px-3 px-md-5 py-md-5">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <div className="heading">
                <h2 className="text-center">Contact Us</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                {/* Contact Form */}
                <div className="col-md-7">
                  <div className="contact_form_inner px-md-5 px-3">
                    <div className="contact_field">
                      <p className="text-main">
                        Feel free to contact us any time. We will get back to
                        you as soon as we can!
                      </p>
                      <form id="contact-form">
                        <input
                          type="text"
                          className="form-control form-group mb-3"
                          placeholder="Name"
                        />
                        <input
                          type="email"
                          className="form-control form-group mb-3"
                          placeholder="Email"
                        />
                        <input
                          type="tel"
                          className="form-control form-group mb-3"
                          placeholder="Mobile"
                        />
                        <textarea
                          className="form-control form-group mb-3"
                          placeholder="Message"
                        ></textarea>
                        <div className="text-center">
                          <button
                            className="contact_form_submit mb-3 btn btn-dark"
                            id="contact-button"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="col-md-5">
                  <div className="contact_info_sec text-bg-dark px-md-5 py-md-5 px-4 py-4 text-white shadow">
                    <h4 className="text-white mb-3">Contact Info</h4>

                    <div className="d-flex info_single align-items-center pb-2">
                      <Link
                        href="tel:+911234567890"
                        className="text-white text-decoration-none"
                      >
                        <i className="fas fa-headset me-2"></i>
                        <span>+91 1234567890</span>
                      </Link>
                    </div>

                    <div className="d-flex info_single align-items-center pb-2">
                      <Link
                        href="mailto:abc@gmail.com"
                        className="text-white text-decoration-none"
                      >
                        <i className="fas fa-envelope-open-text me-2"></i>
                        <span>abc@gmail.com</span>
                      </Link>
                    </div>

                    <div className="d-flex info_single pb-2">
                      <i className="fas fa-map-marked-alt text-white mt-1 me-2"></i>
                      <span>
                        <strong className="d-block mb-1">EARA GROUP</strong>
                        KIADB Hardware & IT Park, Near Shell Office,
                        Devanahalli, Bangalore 562 149
                      </span>
                    </div>
                  </div>
                </div>
                {/* End Contact Info */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
