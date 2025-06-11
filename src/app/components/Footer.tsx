'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="section_home-footer">
            <div className="padding-global">
                <div className="container-large">
                    <div className="home-footer_components">
                        <div className="home-footer_top">
                            <div className="home-footer_top-grid">
                                <div className="home-footer_left-grid">
                                    <Link href="#TOP" className="home-footer_back-wrap w-inline-block">
                                        <div className="home-footer_top-link">Back to top</div>
                                    </Link>
                                    <div id="w-node-_82295e16-51c9-0a68-c497-f26ac0a9f09e-bcf394b9" className="home-footer_menu-wrap">
                                        <Link href="/" aria-current="page" className="footer-link w-inline-block w--current">
                                            <div className="home-footer_menu-text">Home</div>
                                        </Link>
                                        <Link href="/location" className="footer-link w-inline-block">
                                            <div className="home-footer_menu-text">Location</div>
                                        </Link>
                                        <Link href="/biodiversity" className="footer-link w-inline-block">
                                            <div className="home-footer_menu-text">Biodiversity</div>
                                        </Link>
                                        <Link href="/contact" className="footer-link w-inline-block">
                                            <div className="home-footer_menu-text">Contact</div>
                                        </Link>
                                        <Link href="/amenities" className="footer-link w-inline-block">
                                            <div className="home-footer_menu-text">Amenities</div>
                                        </Link>
                                        <Link href="/gallery" className="footer-link w-inline-block">
                                            <div className="home-footer_menu-text">Gallery</div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="home-footer-right-wrap">
                                    <form action="#" method="post" className="home-footer_form w-form">
                                        <div className="form_group">
                                            <input
                                                type="text"
                                                className="form_input w-input"
                                                maxLength={256}
                                                name="name"
                                                data-name="Name"
                                                placeholder="Name"
                                                required
                                            />
                                        </div>
                                        <div className="form_group">
                                            <input
                                                type="email"
                                                className="form_input w-input"
                                                maxLength={256}
                                                name="email"
                                                data-name="Email"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                        <div className="form_group">
                                            <input
                                                type="tel"
                                                className="form_input w-input"
                                                maxLength={256}
                                                name="phone"
                                                data-name="Phone"
                                                placeholder="Phone"
                                                required
                                            />
                                        </div>
                                        <div className="form_group">
                                            <textarea
                                                name="message"
                                                data-name="Message"
                                                placeholder="Message"
                                                maxLength={5000}
                                                className="form_input w-input"
                                                rows={3}
                                            ></textarea>
                                        </div>
                                        <input
                                            type="submit"
                                            value="Submit"
                                            className="button full-width w-button"
                                        />
                                    </form>
                                    <a href="#" id="brochure-download-trigger" className="home-footer_brochure-wrapper w-inline-block">
                                        <div className="text-size-regular">Download the e-brochure</div>

                                    </a>
                                </div>
                            </div>
                        </div>

                        <div id="w-node-_53eda726-5973-1220-5437-b406cfd9a894-bcf394b9" className="home-footer_bottom">
                            <div id="w-node-_95a3d6bf-1126-d280-e0f7-6cd7fe037583-bcf394b9" className="home-footer_middle-wrap">
                                <div className="home-footer_middle-left">
                                    <div className="home-footer_top-link">Follow us</div>
                                    <div className="home-footer_social-wrap">
                                        <a href="https://www.facebook.com/AssetzProperty" target="_blank" rel="noopener noreferrer" className="home-footer_social-link w-inline-block">
                                            <div className="home-footer_social-icon w-embed">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.7714 26.1891V17.2726H20.7458L21.3098 13.5865H17.7714V11.1895C17.7714 10.1824 18.2682 9.19537 19.8528 9.19537H21.4642V6.05311C21.4642 6.05311 20.0005 5.80469 18.6107 5.80469C15.6967 5.80469 13.7898 7.57053 13.7898 10.7665V13.5798H10.5469V17.2659H13.7898V26.1824H17.7781L17.7714 26.1891Z" fill="#1E291D"></path>
                                                </svg>
                                            </div>
                                            <div className="home-footer_social-bg"></div>
                                        </a>
                                        <a href="https://www.instagram.com/assetzproperty/" target="_blank" rel="noopener noreferrer" className="home-footer_social-link w-inline-block">
                                            <div className="home-footer_social-icon w-embed">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.6779 24.3232H19.325C22.0845 24.3232 24.3271 22.0806 24.3271 19.3211V12.674C24.3271 9.91443 22.0845 7.67188 19.325 7.67188H12.6779C9.91833 7.67188 7.67578 9.91443 7.67578 12.674V19.3211C7.67578 22.0806 9.91833 24.3232 12.6779 24.3232ZM9.2402 12.674C9.2402 10.7806 10.7845 9.23629 12.6779 9.23629H19.325C21.2184 9.23629 22.7626 10.7806 22.7626 12.674V19.3211C22.7626 21.2145 21.2184 22.7587 19.325 22.7587H12.6779C10.7845 22.7587 9.2402 21.2145 9.2402 19.3211V12.674ZM20.4127 10.6463C19.8755 10.6463 19.4391 11.0827 19.4391 11.6198C19.4391 12.157 19.8755 12.5934 20.4127 12.5934C20.9498 12.5934 21.3862 12.157 21.3862 11.6198C21.3862 11.0827 20.9498 10.6463 20.4127 10.6463ZM16.0686 11.8951C13.8059 11.8951 11.9662 13.7348 11.9662 15.9975C11.9662 18.2602 13.8059 20.0999 16.0686 20.0999C18.3313 20.0999 20.171 18.2602 20.171 15.9975C20.171 13.7348 18.3313 11.8951 16.0686 11.8951ZM16.0686 18.6228C14.6183 18.6228 13.4433 17.4411 13.4433 15.9975C13.4433 14.554 14.625 13.3723 16.0686 13.3723C17.5121 13.3723 18.6938 14.554 18.6938 15.9975C18.6938 17.4411 17.5121 18.6228 16.0686 18.6228Z" fill="#1E291D"></path>
                                                </svg>
                                            </div>
                                            <div className="home-footer_social-bg"></div>
                                        </a>
                                        <a href="https://www.youtube.com/@AssetzPropertyGroup" target="_blank" rel="noopener noreferrer" className="home-footer_social-link w-inline-block">
                                            <div className="home-footer_social-icon w-embed">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.7739 13.9733C23.7739 12.0866 22.2498 10.5625 20.3631 10.5625H11.6413C9.7546 10.5625 8.23047 12.0866 8.23047 13.9733V18.0287C8.23047 19.9154 9.7546 21.4395 11.6413 21.4395H20.3631C22.2498 21.4395 23.7739 19.9154 23.7739 18.0287V13.9733ZM18.6442 16.3032L14.7366 18.2369C14.5821 18.3174 14.0651 18.21 14.0651 18.0354V14.0606C14.0651 13.886 14.5888 13.7719 14.7433 13.8592L18.4898 15.8936C18.6442 15.9809 18.8121 16.2092 18.6509 16.2964L18.6442 16.3032Z" fill="#1E291D"></path>
                                                </svg>
                                            </div>
                                            <div className="home-footer_social-bg"></div>
                                        </a>
                                        <a href="https://www.linkedin.com/company/assetz-property-group" target="_blank" rel="noopener noreferrer" className="home-footer_social-link w-inline-block">
                                            <div className="home-footer_social-icon w-embed">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.3416 9.45065C12.3416 8.57108 11.6299 7.85938 10.7503 7.85938C9.86404 7.85938 9.15234 8.57108 9.15234 9.45065C9.15234 10.3302 9.87074 11.0419 10.7503 11.0419C11.6299 11.0419 12.3416 10.3302 12.3416 9.45065ZM16.6991 12.2505H14.0671V21.0864H16.8066V16.7154C16.8066 15.5606 17.0415 14.446 18.4515 14.446C19.8615 14.446 19.8817 15.762 19.8817 16.7893V21.0864H22.6278V16.2387C22.6278 13.8552 22.1108 12.0289 19.3311 12.0289C17.995 12.0289 17.102 12.7608 16.7327 13.459H16.6991V12.2505Z" fill="#1E291D"></path>
                                                </svg>
                                            </div>
                                            <div className="home-footer_social-bg"></div>
                                        </a>
                                    </div>
                                    <div className="home-footer_divider"></div>
                                    <div className="home-footer_contact-wrap">
                                        <a href="tel:+917829554411" className="home-footer_contact-link w-inline-block">
                                            <div className="home-footer_contact-icon w-embed">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.5488 18.167L27.3925 20.722C27.5912 20.8069 27.757 20.9539 27.8651 21.1409C27.9733 21.3279 28.018 21.5449 27.9925 21.7595C27.7983 23.2108 27.0836 24.5422 25.9813 25.506C24.8791 26.4699 23.4642 27.0006 22 26.9995C17.4913 26.9995 13.1673 25.2084 9.97919 22.0203C6.79107 18.8322 5 14.5082 5 9.99948C4.99888 8.53524 5.5296 7.12042 6.49345 6.01815C7.45731 4.91588 8.78869 4.20119 10.24 4.00698C10.4545 3.9815 10.6716 4.02618 10.8586 4.13434C11.0456 4.2425 11.1926 4.40832 11.2775 4.60698L13.9188 10.507C13.9836 10.6585 14.0101 10.8238 13.9957 10.988C13.9813 11.1522 13.9265 11.3103 13.8363 11.4482L11.165 14.6245C11.0702 14.7675 11.0142 14.9326 11.0024 15.1037C10.9906 15.2748 11.0233 15.4461 11.0975 15.6007C12.1313 17.717 14.3188 19.8782 16.4413 20.902C16.5967 20.9758 16.7688 21.0079 16.9404 20.9949C17.112 20.982 17.2773 20.9246 17.42 20.8282L20.5488 18.167C20.6872 18.0748 20.8465 18.0187 21.0122 18.0036Z" stroke="#738E62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                            <div>+91 78295 54411</div>
                                        </a>
                                        <a href="mailto:enquiries@assetzproperty.com" className="home-footer_contact-link w-inline-block">
                                            <div className="home-footer_contact-icon w-embed">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z" stroke="#738E62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M28 7L16 18L4 7" stroke="#738E62" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                            <div>enquiries@assetzproperty.com</div>
                                        </a>
                                    </div>
                                </div>

                                <div className="home-footer_middle-right">
                                    <div className="home-footer_azzets">
                                        <div className="text-opacity-low">
                                            <div className="text-color-offwhite">
                                                <div className="text-size-tiny">An Assetz project</div>
                                            </div>
                                        </div>
                                        <div className="home-footer_azzets-wrapper">
                                            <img src="/images/Assetz-logo-1-1.svg" alt="Assetz Property Group" loading="lazy" className="home-footer_azzets-image" />
                                        </div>
                                    </div>
                                    <div className="home-footer_azzets">
                                        <div className="text-opacity-low">
                                            <div className="text-color-offwhite">
                                                <div className="text-size-tiny">In association with</div>
                                            </div>
                                        </div>
                                        <div className="home-footer_azzets-wrapper">
                                            <img src="/images/Inspira-Logo--v1-1.png" alt="Inspira Logo" loading="lazy" className="home-footer_azzets-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-footer_divider"></div>
                            <div id="w-node-ae6576b5-768d-e278-cc0f-e6f3bcf394da-bcf394b9" className="home-footer_last-wrap">
                                <div className="home-footer_info-wrapper">
                                    <div className="home-footer_brochure-address">
                                        <div className="home-footer_conditions-wrapper">
                                            <div className="home-footer_item">
                                                <div className="footer-link">
                                                    <div className="text-color-offwhite">
                                                        <div className="text-size-tiny">Site address</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-footer_text">
                                            <div className="text-color-white">
                                                <div className="text-size-tiny">
                                                    Ims,<br />K.G. Choodasandra Village &amp; Rayasandra Village, Sarjapura Hobli,Anekal Taluk, Bengaluru - 560035.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-footer_brochure-address">
                                        <div className="home-footer_conditions-wrapper">
                                            <div className="home-footer_item">
                                                <div className="footer-link">
                                                    <div className="text-color-offwhite">
                                                        <div className="text-size-tiny">Corporate address</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-footer_text">
                                            <div className="text-color-white">
                                                <div className="text-size-tiny">
                                                    Assetz Property Group, No. 30, Crescent Road, Bengaluru, Karnataka - 560001.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-footer_brochure">
                                    <div className="home-footer_conditions-wrapper hide">
                                        <div className="home-footer_item">
                                            <a href="#" className="footer-link w-inline-block">
                                                <div className="text-color-offwhite">
                                                    <div className="text-size-tiny">Terms & Conditions</div>
                                                </div>
                                            </a>
                                            <a href="#" className="footer-link w-inline-block">
                                                <div className="text-color-offwhite">
                                                    <div className="text-size-tiny">Privacy Policy</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="home-footer_disclaimer-wrap">
                                        <div className="home-footer_disclaimer">
                                            Disclaimer: The images used across the website are for representation purpose only
                                        </div>
                                        <div className="home-footer_disclaimer">
                                            RERA No: PRM/KA/RERA/1251/310/PR/300124/006594
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-footer_image-wrapper">
                        <img src="/images/footer_leaf.svg" alt="Leaf Icon" loading="lazy" className="home-footer_image" />
                    </div>
                </div>
            </div>
        </footer>
    );
}