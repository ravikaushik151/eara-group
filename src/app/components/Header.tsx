'use client';

export default function Header() {
    return (
        <div className="nav-black_wrap">
            <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
                <div className="padding-global">
                    <div className="container-large w-container">
                        <div className="nav">
                            <a href="/" aria-current="page" className="nav-logo-link w-nav-brand w--current">
                                <svg className="nav-logo" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 143 70" fill="none">
                                    {/* SVG Content */}
                                    <path d="M66.6261 60.0781C66.8039 60.0484..." fill="currentColor" />
                                </svg>
                            </a>

                            <nav role="navigation" className="nav-menu w-nav-menu">
                                <a href="/" className="nav-link_wrap w-inline-block w--current">
                                    <div className="nav-link-icon w-embed">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                        </svg>
                                    </div>
                                    <div className="nav-link">Home</div>
                                </a>
                                <a href="/biodiversity" className="nav-link_wrap w-inline-block">
                                    <div className="nav-link-icon w-embed">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                        </svg>
                                    </div>
                                    <div className="nav-link">Biodiversity</div>
                                </a>
                                <a href="/amenities" className="nav-link_wrap w-inline-block">
                                    <div className="nav-link-icon w-embed">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                        </svg>
                                    </div>
                                    <div className="nav-link">Amenities</div>
                                </a>
                                <a href="/location" className="nav-link_wrap w-inline-block">
                                    <div className="nav-link-icon w-embed">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                        </svg>
                                    </div>
                                    <div className="nav-link">Location</div>
                                </a>
                                <a href="/contact" className="nav-link_wrap w-inline-block">
                                    <div className="nav-link-icon w-embed">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                        </svg>
                                    </div>
                                    <div className="nav-link">Contact</div>
                                </a>
                                <a href="/gallery" className="nav-link_wrap w-inline-block">
                                    <div className="nav-link-icon w-embed">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="4" cy="4" r="4" fill="#a1c889" />
                                        </svg>
                                    </div>
                                    <div className="nav-link">Gallery</div>
                                </a>
                            </nav>

                            <div className="nav-menu_mobile w-nav-button">
                                <div className="nav-icon w-embed">
                                    <svg width="35" height="19" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="0.916016" x2="34.6667" y2="0.916016" stroke="currentColor" strokeWidth="1.5" />
                                        <line y1="9.58203" x2="34.6667" y2="9.58203" stroke="currentColor" strokeWidth="1.5" />
                                        <line y1="18.25" x2="34.6667" y2="18.25" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}