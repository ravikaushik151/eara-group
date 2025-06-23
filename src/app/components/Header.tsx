"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg bg-body-tertiary d-md-none ">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <Image
              src="/img/logo-white.png"
              className="logo"
              alt="logo"
              width={150}
              height={66}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ minHeight: "auto" }}
            >
              <li className="nav-item">
                <Link
                  className="nav-link active text-dark"
                  aria-current="page"
                  href="./"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="career">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-black_wrap d-md-block d-none">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar w-nav"
        >
          <div className="padding-global">
            <div className="container-large w-container">
              <div className="nav">
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <Link
                    href="/"
                    className="nav-link_wrap w-inline-block w--current"
                  >
                    <div className="nav-link-icon w-embed">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4" r="4" fill="#a1c889" />
                      </svg>
                    </div>
                    <div>Home</div>
                  </Link>
                  <Link href="/about" className="nav-link_wrap w-inline-block">
                    <div className="nav-link-icon w-embed">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4" r="4" fill="#a1c889" />
                      </svg>
                    </div>
                    <div>About Us</div>
                  </Link>
                  <Link href="/blog" className="nav-link_wrap w-inline-block">
                    <div className="nav-link-icon w-embed">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4" r="4" fill="#a1c889" />
                      </svg>
                    </div>
                    <div>Blog</div>
                  </Link>
                  <Link href="/career" className="nav-link_wrap w-inline-block">
                    <div className="nav-link-icon w-embed">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4" r="4" fill="#a1c889" />
                      </svg>
                    </div>
                    <div>Career</div>
                  </Link>
                  <Link
                    href="/contact"
                    className="nav-link_wrap w-inline-block"
                  >
                    <div className="nav-link-icon w-embed">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4" r="4" fill="#a1c889" />
                      </svg>
                    </div>
                    <div>Contact</div>
                  </Link>
                  <Link
                    href="/gallery"
                    className="nav-link_wrap w-inline-block"
                  >
                    <div className="nav-link-icon w-embed">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4" cy="4" r="4" fill="#a1c889" />
                      </svg>
                    </div>
                    <div>Gallery</div>
                  </Link>
                </nav>
                <Link href="/">
                  <Image
                    src="/img/logo-white.png"
                    className="logo"
                    alt="logo"
                    width={150}
                    height={66}
                  />
                </Link>

                <div className="nav-menu_mobile w-nav-button">
                  <div className="nav-icon w-embed">
                    <svg
                      width="35"
                      height="19"
                      viewBox="0 0 35 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="0.916016"
                        x2="34.6667"
                        y2="0.916016"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <line
                        y1="9.58203"
                        x2="34.6667"
                        y2="9.58203"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <line
                        y1="18.25"
                        x2="34.6667"
                        y2="18.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
