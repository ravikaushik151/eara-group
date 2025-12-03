//"use client";
//import { useEffect } from "react";
import "./homepage.css";
import Link from "next/link";
import Preloader from "./components/Preloader";
import UpcomingSlider from "./components/UpcomingSlider";
// import HomeHeroSlider from "./components/Home/HeroSlider";
import Image from "next/image";
import TestimonialSlider from "./components/Home/TestimonialSlider";
import LatestBlogs from "./components/LatestBlogs";
import CoreValuesSlider from "./components/CoreValuesSlider";
import Ongoing from "./components/Ongoing";
import ImageCompare from "./components/ImageCompare";
export const metadata = {
  title: 'Eara Group - Luxury Villa Plots for Sale in Kanakapura Road.',
  description: "Discover Eara Group's luxury villa plots for sale in Kanakapura Road. Build your dream home amidst nature with premium amenities & great connectivity.",
  keywords: 'Eara Group, Luxury villa plots for sale in Kanakapura Main Road, Plots for Sale in Kanakapura Main Road, Villa plots sale near Kanakapura Main Road, Premium villa plots for sale in Kaggalipura',
  alternates: {
    canonical: 'https://earagroup.com/',
  },
  other: {
    "link:preload": [
      { rel: "preload", as: "image", href: "/images/hero-image-edit-4-new.avif", type: "image/avif" },
      { rel: "preload", as: "image", href: "/images/mobile-img.avif", type: "image/avif" },
      { rel: "preload", as: "image", href: "/images/Green-thinking-2.avif", type: "image/avif" },
    ],
  }
};

export default function Home() {
// In the page where you want to display the slider (e.g., HomePage.js)

const upcomingProjects = [
    {
        id: 1,
        title: "Ultra Luxury Plotted Development (Phase I)",
        location: "Kaggalipura, Off Kanakapura Main Road",
        description: "The project is nestled just Off Kanakapura Main Road, thoughtfully designed to offer a blend of serene living and modern infrastructure.",
        highlights: [
            "Plot sizes ranging from 1500 - 3300 sq ft.",
            "11,000 sqft. clubhouse with gym, pool, yoga room, caf&eacute; & library",
           'Indoor and outdoor party zones',
           'Sacred space, amphitheatre, elders&rsquo; park, children&rsquo;s play area',
           'Cricket pitch & pickleball court',
           'Underground electrical cabling & LED streetlights',
           'Rainwater harvesting & sewage treatment plant',
           'Avenue plantation & landscaped green zones',
          
        ],
        link: "#",
        // Crucial image props for the ImageCompare component
        beforeImg: "/images/upcoming-projects.png",
        afterImg: "/images/upcoming-projects.avif",
    },
    {
        id: 2,
        title: "Ultra Luxury Plotted Development (Phase II)",
        location: "Kaggalipura, Off Kanakapura Main Road",
        description: "The project is nestled just Off Kanakapura Main Road, thoughtfully designed to offer a blend of serene living and modern infrastructure.",
        highlights: [
            "Plot sizes ranging from 1500 - 3300 sq ft.",
            "11,000 sqft. clubhouse with gym, pool, yoga room, caf&eacute; & library",
           'Indoor and outdoor party zones',
           'Sacred space, amphitheatre, elders&rsquo; park, children&rsquo;s play area',
           'Cricket pitch & pickleball court',
           'Underground electrical cabling & LED streetlights',
           'Rainwater harvesting & sewage treatment plant',
           'Avenue plantation & landscaped green zones',
          
        ],
        link: "#",
        // Crucial image props for the ImageCompare component
        beforeImg: "/images/upcoming-projects.png",
        afterImg: "/images/upcoming-projects.avif",
    },
];


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
                    // poster="/images/hero-image-edit-4-new.avif" 
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <source src="/images/EaraWebsiteHmeBannerVideo.mp4" style={{
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
                    // poster="/images/mobile-img.avif" // fallback image before video loads
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <source src="/images/Eara-WebsiteHmeBannerMobileVersion.mp4" style={{
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
              <div className="row py-md-5">
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



          <section className="same-gap position-relative bg-light theme-bg-dark up-coming d-none">
            <div className="container">
              <div id="upcoming-project" className="noclass" data-bs-ride="carousel">
                <div className="row">
                  <div className="title text-center mb-3">
                    <h2 className="text-black mb-4 theme-color-light">Upcoming Project</h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6 px-md-0 text-center">

                    <ImageCompare beforeImg="/images/upcoming-projects.png"
                afterImg="/images/upcoming-projects.avif" />
                    {/* <Ongoing /> */}
                    {/* <Image
                      alt="Project"
                      src="/images/upcoming-projects.avif"
                      width={500}
                      height={750}
                      className="img-fluid p-0 mb-3 w-100"
                      priority
                      fetchPriority="high" style={{ objectFit: "cover", objectPosition: "bottom center" }}
                    /> */}
                  </div>
                  <div
                    className="col-md-6 px-md-5 px-3 d-flex align-items-center"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                  >
                    <div>
                      <div className="title text-left ">
                        <h4 className="text-black my-2 fs-4 theme-color-light fw-bold m-center">
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
         
<UpcomingSlider 
    projects={upcomingProjects}
    sectionTitle=" Upcoming Projects" // Dynamic title
/>


          {/* <section className="quality-assurance-section bg-black">
            <div className="image-wrapper py-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-12 text-center">
                    <div className="image-frame">
                      <Image
                        src="/images/hero-image-edit-4-new.jpg"
                        alt="Business professionals walking"
                        width={1400}
                        height={700}
                        className="img-fluid d-block mx-auto"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}




          {/* Section 2: 360 Lifestyle Cards */}
          <CoreValuesSlider />
          <TestimonialSlider />
          {/* Section 4: Blog Section */}
         

          <section className="px-md-5 px-3 theme-bg-light blog">
            <h2 className="text-center theme-color-dark">LATEST BLOGS</h2>
            <div className="blog-grid">
            
                <div  className="blog-card theme-bg-dark">
                  <Image
                    src="/images/Blog-img1_eara.avif"
                    alt=" Why Choose Integrated Townships?"
                    loading="lazy"
                    width={578}
                    height={200}
                    style={{ minHeight: "250px", objectFit: "cover" }}
                    className="w-100 h-auto object-cover"
                  />
                  <div className="content">
                    {/* Agar detail page banana ho to Link use karo */}
                    <Link href={`/blog/why-choose-integrated-townships`} className="text-decoration-none">
                      <h4 className="theme-color-light text-center cursor-pointer fs-4" style={{ fontWeight: "600" }}>
                        Why Choose Integrated Townships?
                      </h4>
                    </Link>
                    <p className="theme-color-light ">Discover how Eara Group&rsquo;s location redefine urban living with modern infrastructure, green spaces, and smart connectivity.
                    </p>
                  </div>
                </div>
                <div  className="blog-card theme-bg-dark">
                  <Image
                    src="/images/Blog-img2_eara.avif"
                    alt="Eco-Conscious Architecture"
                    loading="lazy"
                    width={578}
                    height={200}
                    style={{ minHeight: "250px", objectFit: "cover" }}
                    className="w-100 h-auto object-cover"
                  />
                  <div className="content">
                    {/* Agar detail page banana ho to Link use karo */}
                    <Link href={`/blog/eco-conscious-architecture`} className="text-decoration-none">
                      <h4 className="theme-color-light text-center cursor-pointer fs-4" style={{ fontWeight: "600" }}>
                       Eco-Conscious Architecture
                      </h4>
                    </Link>
                    <p className="theme-color-light ">Experience sustainable design where every Eara Group address blends nature, comfort, and innovation.

                    </p>
                  </div>
                </div>
            
                <div  className="blog-card theme-bg-dark">
                  <Image
                    src="/images/Blog-img3_eara.avif"
                    alt="The Future of Smart Living"
                    loading="lazy"
                    width={578}
                    height={200}
                    style={{ minHeight: "250px", objectFit: "cover" }}
                    className="w-100 h-auto object-cover"
                  />
                  <div className="content">
                    {/* Agar detail page banana ho to Link use karo */}
                    <Link href={`/blog/the-future-of-smart-living`} className="text-decoration-none">
                      <h4 className="theme-color-light text-center cursor-pointer fs-4" style={{ fontWeight: "600" }}>
                      The Future of Smart Living

                      </h4>
                    </Link>
                    <p className="theme-color-light ">Explore next-gen homes by Eara Group - where smart technology meets value and future-ready pricing.

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
