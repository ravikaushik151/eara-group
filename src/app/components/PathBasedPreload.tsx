"use client";

import { usePathname } from "next/navigation";

// Configure which images to preload for each path
const preloadConfig = {
  "/": [
    {
      href: "/images/hero-image-edit-4-new.webp",
      fetchpriority: "high",
      imagesizes: "(max-width: 768px) 100vw, 1440px",
      imagesrcset: "/images/hero-image-edit-4-new-small.webp 480w, /images/hero-image-edit-4-new.webp 997w",
    },
    {
      href: "/images/About-Abutus.webp",
      fetchpriority: "hight",
      imagesizes: "(max-width: 768px) 100vw, 500px",
      imagesrcset: "/images/About-Abutus.webp 480w, /images/About-Abutus.webp 997w",
    },
  ],
  "/services": [
    {
      href: "/images/services-hero.webp",
      fetchpriority: "high",
      imagesizes: "(max-width: 768px) 100vw, 1200px",
      imagesrcset: "/images/services-hero-small.webp 480w, /images/services-hero.webp 1200w",
    },
  ],
};

export default function PathBasedPreload() {
  const pathname = usePathname();
  const imagesToPreload = preloadConfig[pathname] || [];

  return (
    <>
      {imagesToPreload.map((img, index) => (
        <link
          key={`${pathname}-${index}`}
          rel="preload"
          as="image"
          href={img.href}
          fetchpriority={img.fetchpriority || "auto"}
          imagesizes={img.imagesizes}
          imagesrcset={img.imagesrcset}
        />
      ))}
    </>
  );
}
