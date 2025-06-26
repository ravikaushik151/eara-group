'use client';
import Image from "next/image";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
               
                {/* Project Info */}
                <div className="footer-column">
                    <h4 className="footer-title">Eara Group</h4>
                    <p>
                        KIADB Hardware & IT Park,<br />
                        Near Shell Office, Devanahalli,<br />
                        Bangalore 562 149
                    </p>
                    <div className="footer-rera">
                        <p><strong>RERA NO.</strong></p>
                        <p>PRM/KA/RERA/1251/309/PR/280324/006745</p>
                    </div>
                </div>

                {/* Developer Info */}
                <div className="footer-column">
                    <h4 className="footer-title">Quick Links</h4>
                   <ul style={{listStyle:"none"}}>
                    <li className=''><Link href="./" className='text-decoration-none text-white'>Home</Link></li>
                    <li><Link href="/about" className='text-decoration-none text-white'>About</Link></li>
                    <li><Link href="/blog" className='text-decoration-none text-white'>Blog</Link></li>
                    <li><Link href="/career" className='text-decoration-none text-white'>Career</Link></li>
                    <li><Link href="/contact" className='text-decoration-none text-white'>Contact</Link></li>
                   </ul>
                </div>

                {/* Association */}
                <div className="footer-column">
                    <div className="footer-association">
                        <p>In Association With</p>
                       
                        <div className="footer-social">
                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                            <Link href="#"><i className="fab fa-youtube"></i></Link>
                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>

                {/* Get In Touch Form */}
                <div className="footer-column">
                    <h4 className="footer-heading">GET IN TOUCH</h4>
                    <form className="footer-form">
                        <input type="text" placeholder="Name" className="footer-input rounded-0" />
                        <input type="email" placeholder="Email" className="footer-input rounded-0" />
                        <input type="tel" placeholder="Contact Number" className="footer-input rounded-0" />
                        <button type="submit" className="footer-button mb-3">SUBMIT</button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Eara Group. All rights reserved.</p>
            </div>
        </footer>
    );
}
