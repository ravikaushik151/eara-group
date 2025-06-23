import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                {/* Left Side: Logo + Contact Info */}
                <div className="footer-left">
                    <Image
                        src="/img/logo-white.png"
                        className="footer-logo"
                        alt="logo"
                        width={150}
                        height={66}
                    />
                    <p>
                        <Image
                            width={24}
                            height={24}
                            src="https://img.icons8.com/ios-filled/24/ffffff/marker.png"
                            alt="Address Icon"
                        />
                        123 Dream Street, Cityname, Country
                    </p>
                    <p>
                        <Image
                            width={24}
                            height={24}
                            src="https://img.icons8.com/ios-filled/24/ffffff/phone.png"
                            alt="Phone Icon"
                        />
                        +91 98765 43210
                    </p>
                    <p>
                        <Image
                            width={24}
                            height={24}
                            src="https://img.icons8.com/ios-filled/24/ffffff/email.png"
                            alt="Email Icon"
                        />
                        info@example.com
                    </p>
                </div>
                {/* Center: Quick Links + Social Media */}
                <div className="footer-center mt-md-0 mt-4">
                    <h3>Quick Links</h3>
                    <ul className="quick-links">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blogs</Link>
                        </li>
                        <li>
                            <Link href="/career">Career</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="social-icons mb-md-0 mb-4">
                        <a href="#">
                            <Image
                                width={24}
                                height={24}
                                src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png"
                                alt="Facebook"
                            />
                        </a>
                        <a href="#">
                            <Image
                                width={24}
                                height={24}
                                src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
                                alt="Instagram"
                            />
                        </a>
                        <a href="#">
                            <Image
                                width={24}
                                height={24}
                                src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png"
                                alt="LinkedIn"
                            />
                        </a>
                    </div>
                </div>
                {/* Right Side: Contact Form */}
                <div className="footer-right mt-md-0 mt-4">
                    <h3>Send a Message</h3>
                    <form>
                        <div className="form-row">
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                        </div>

                        <input type="text" placeholder="Phone" required />

                        <textarea placeholder="Your Message" required></textarea>

                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            {/* Copyright */}
            <div className="copyright">
                © 2025 Your Company Name. All rights reserved.
            </div>
        </footer>
    );
}
