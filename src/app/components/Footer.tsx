"use client";
import Image from "next/image";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer accent-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-association">
              <Link href="/">
                <Image
                  src="/img/logo-dark.png"
                  alt="logo"
                  width={150}
                  height={66}
                  className="logo white-png d-block mx-auto"
                />
              </Link>
              <p className="pt-3 text-center">
                RERA No. : PRM/KA/RERA/1251/309/PR/280324/006745
              </p>
            </div>
          </div>
          {/* Project Info */}
          <div className="col-md-3 ps-md-4 ps-0  py-3 py-md-0">
            <h4 className="footer-title m-center">Address</h4>
            <p className="m-center">
              <strong>Eara Group</strong>
              <br />
              Kaggalipura, <br />Off Kanakapura Road, <br />Bengaluru, Karnataka 560082
            </p>
            <p className="pt-3 mb-2 fw-bold fs-6 text-start m-center">
              Follow Us
            </p>

            <div className="footer-social text-center d-flex justify-content-md-start justify-content-center ">
              <Link href="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>

          {/* Developer Info */}
          <div className="col-md-2 m-center py-3 py-md-0">
            <h4 className="footer-title ">Quick Links</h4>
            <ul className="px-0" style={{ listStyle: "none" }}>
              <li className="noclass">
                <Link href="./" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-decoration-none text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/microsite" className="text-decoration-none text-white">
                  Project
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-decoration-none text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-decoration-none text-white"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-decoration-none text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-decoration-none text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Association */}

          {/* Get In Touch Form */}
          <div className="col-md-3">
            <h4 className="footer-heading m-center">GET IN TOUCH</h4>
            <form className="footer-form">
              <input
                type="text"
                placeholder="Name"
                className="footer-input rounded-0"
              />
              <input
                type="email"
                placeholder="Email"
                className="footer-input rounded-0"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="footer-input rounded-0"
              />
              <div className="m-center">
                <button type="submit" className="footer-button mb-3">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eara Group. All rights reserved.</p>
      </div>
    </footer>
  );
}
