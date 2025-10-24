"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const collapseEl = document.getElementById("navbarScroll");
    if (collapseEl?.classList.contains("show")) {
      collapseEl.classList.remove("show");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 100 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Safe logging
  useEffect(() => {
    console.log("Current pathname:", pathname);
  }, [pathname]);

  return (
    <>
      {/* ✅ Mobile Navbar */}
      <nav
        className={`navbar-animated position-fixed top-0 w-100 navbar navbar-expand-lg bg-white accent-bg d-md-none shadow-sm ${
          isVisible
            ? "navbar-visible bg-white accent-bg navbar-dark"
            : "navbar-hidden"
        }`}
        style={{ zIndex: 999 }}
      >
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <Image
             src={
              pathname?.replace(/\/$/, "").startsWith("/amidstnature")
                ? "/images/Amidst-Nature-Logo.png"
                : "/images/logo-dark.webp"
            }
              alt="logo"
              width={120}
              height={66}
              className={
                pathname?.replace(/\/$/, "").startsWith("/amidstnature")
                  ? "logo img-fluid" // removed white-png
                  : lastScrollY < 100
                  ? "white-png logo img-fluid"
                  : "white-png"
              }
              priority
              fetchPriority="high"
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
            <ul className="navbar-nav text-center me-auto my-2 my-lg-0 navbar-nav-scroll text-white">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/project", label: "Project" },
                { href: "/channel-partner", label: "Channel Partner" },
                { href: "/blog", label: "Blogs" },
                { href: "/career", label: "Career" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li className="nav-item" key={link.href}>
                  <Link className="nav-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Desktop Navbar */}
      <div
        className={`navbar-animated position-fixed top-0 w-100 d-none d-md-block ${
          isVisible ? "navbar-visible bg-white " : "navbar-hidden"
        } ${lastScrollY < 100 ? "bg-transparent" : "accent-bg"}`}
        style={{ zIndex: 999 }}
      >
        <div className="container py-3 d-flex justify-content-between align-items-center">
          <Link href="/">
            <Image
              src={
                pathname?.replace(/\/$/, "").startsWith("/amidstnature")
                  ? "/images/Amidst-Nature-Logo.png"
                  : "/images/logo-dark.webp"
              }
              alt="logo"
              width={150}
              height={66}
              className={
                pathname?.replace(/\/$/, "").startsWith("/amidstnature")
                  ? "logo img-fluid" // removed white-png
                  : lastScrollY < 100
                  ? "white-png logo img-fluid"
                  : "white-png"
              }
              priority
              fetchPriority="high"
            />
          </Link>
          <nav className="d-flex gap-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/project", label: "Project" },
              { href: "/channel-partner", label: "Channel Partner" },
              { href: "/blog", label: "Blogs" },
              { href: "/career", label: "Career" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-decoration-none d-flex align-items-center gap-2 mx-2 ${
                  lastScrollY < 100 ? "text-white" : "text-white"
                }`}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="4" r="4" fill="#fff" />
                </svg>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
