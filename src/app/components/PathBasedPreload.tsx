// app/components/PathBasedPreload.js
"use client";

import { usePathname } from 'next/navigation';

// Configure which image to preload for each path
const preloadConfig = {
  '/': {
    href: '/images/hero-image-edit-4-new.webp',
    imagesizes: '(max-width: 768px) 100vw, 997px',
    // Add imagesrcset if you have multiple image sizes
    // imagesrcset: "/images/About-Abutus-small.webp 480w, /images/About-Abutus.webp 997w"
  },
  // '/services': {
  //   href: '/images/services-hero.webp',
  //   imagesizes: '(max-width: 768px) 100vw, 1200px',
  // },
  
};

export default function PathBasedPreload() {
  const pathname = usePathname();
  const imageToPreload = preloadConfig[pathname];

  // If there is no image configured for the current path, render nothing
  if (!imageToPreload) {
    return null;
  }

  return (
    <link
      rel="preload"
      as="image"
      href={imageToPreload.href}
      fetchpriority="high"
      // The key ensures React updates the link tag on route changes
      key={pathname}
      // These attributes are crucial for responsive images
      imagesizes={imageToPreload.imagesizes}
      // imagesrcset={imageToPreload.imagesrcset} // Uncomment if you use srcset
    />
  );
}