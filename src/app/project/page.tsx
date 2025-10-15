import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "../components/Home/TestimonialSlider";

export default function Project() {
    return (
        <>
            {/* Header Section */}
            <div id="carouselExampleDark" className="header-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="image-container">
                            <Image
                                src="/images/project-header.png"
                                height={2880}
                                width={1920}
                                className="img-fluid masterpiece"
                                alt="Projects Banner"
                            />
                            <div className="overlay2">
                                <div className="text-white d-block">
                                    <p className="text-center d-block fs-1 mb-3 text-uppercase">
                                        Our Projects
                                    </p>
                                    <p className="text-center d-block fs-6">
                                        <Link
                                            className="text-white text-decoration-none"
                                            href={"./"}
                                        >
                                            Home
                                        </Link>{" "}
                                        / Projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intro Section */}
            <section id="TOP" className="section_amenities-hero theme-bg-light ">
                <div className="padding-global">
                    <div className="container-large">
                        {/* Featured Project Section */}
                        <section className="section-1 p-0 row align-items-center">
                            <div className="content col-md-6 page-project  ">
                                <div className="mb-md-5">
                                    <h2 className="mb-3 theme-color-dark text-center">Amidst Nature</h2>
                                    <p className="fs-4 theme-color-dark text-center">
                                        Crafted by Earth. Designed by EARA Group.
                                    </p>
                                    <p className="mt-4 theme-color-dark text-center ">
                                        <strong>
                                            Every plot at &ldquo;Amidst Nature&rdquo; is a promise of green
                                            mornings, golden silence, and grounded luxury.
                                        </strong>
                                        <br />
                                        Spread across 18+ lush acres in Kaggalipura, just off Kanakapura
                                        Road, this premium plotted development invites you to design your
                                        forever home in a place where the city fades and nature speaks.
                                        Thoughtfully approved by BMRDA and connected to every urban
                                        convenience, this is more than a plot - it&rsquo;s a path back to
                                        balance.
                                    </p>

                                    <div className="text-center">
                                        <Link href="/microsite" className="btn theme-bg-dark text-light mt-4  mb-md-5">
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 text-center">
                                <Image
                                    width={400}
                                    height={400}
                                    src="/images/project-img.webp"
                                    loading="lazy"
                                    alt="Amidst Nature Project"
                                    className="home-masterplan_img img-fluid rounded shadow"
                                    style={{ height: "500px", objectFit: "cover" }}
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}
